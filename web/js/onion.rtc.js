// here we create onion connections to the server or to other users 
// using pub sub



var Onion = function() {
    self = this
    new Exit().then(
        function(exit) {
            exit.onleacher = function(channel) {
                if (Object.keys(self.leachers).length >= 6) {
                    exit.wssession.call("disallowLeachers", [exit.rtcKey])
                }
                self.rtcKey = exit.rtcKey
                self.waiting = true;
                // console.log("new leacher", channel.peerID)
                self.leachers[channel.peerID] = new Channel(channel)
                self.leachers[channel.peerID].onclose = function() {
                    delete self.leachers[channel.peerID]
                    if (Object.keys(self.leachers).length <= 6) {
                        exit.wssession.call("allowLeachers", [exit.rtcKey])
                    }
                }
                self.leachers[channel.peerID].register("map", function(data) {
                    return Object.keys(self.seeds)
                })
                self.leachers[channel.peerID].register("session", function(data) {

                    sessionID = data.sessionID
                    switch (data.type) {
                        case "direct":
                            console.log("direct session was asked from ", channel.peerID)
                            ses = new Session()
                            ses.peerID = sessionID
                            ses.send = function(req) {
                                console.log("ses sending:", req)
                                self.leachers[channel.peerID].publish(sessionID, req)
                            }
                            self.leachers[channel.peerID].subscribe(sessionID, function(req) {

                                    ses.onmessage({
                                        "data": JSON.stringify(req)
                                    })
                                })
                                // self.leachsessions[sessionID] = new Channel(ses)
                            exit.onleacher(ses)
                            return true
                            break;
                        case "proxy":
                            console.log("proxy session was asked from ", channel.peerID, " to ", data.to)
                            to = data.to
                            if (to in self.seeds) {

                                self.seeds[to].call("session", data[data.to]).then(function(d) {
                                    console.log("proxy from:", channel.peerID, " to ", data.to, " established with sesid", sessionID)
                                    self.proxying[data.sessionID] = new Session(data.sessionID, self.seeds[data.to], self.leachers[channel.peerID])
                                })
                                return self.seedMap[to]
                            } else {
                                return false
                            }

                            break;
                        case "exit":
                            self.proxying[data.sessionID] = new Session(data.sessionID, self.leachers[channel.peerID], exit)
                            return {
                                "exit": true
                            }
                            break;
                    }


                })

            }
            exit.getRandomPeers(3).then(function(seeds) {
                if (seeds.length == 0) {
                    exit.type = "exitonly"
                    self.proxies["exit"] = exit.wssession
                    self.onready()
                    self.waiting = false
                }
                for (i in seeds) {
                    exit.createConnection(seeds[i]).then(function(channel) {
                        if (channel.peerID in self.seeds) {
                            console.warn(channel.peerID, "in seeds")
                            return null
                        }
                        console.log("seed :", channel.peerID)
                        self.seeds[channel.peerID] = new Channel(channel)
                            // self.routes.push([channel.peerID])
                        self.onion([channel.peerID])

                        self.map(self.seeds[channel.peerID]).then(
                            function(map) {
                                self.seedMap[channel.peerID] = map
                                for (j in map) {
                                    self.onion([channel.peerID, map[j]])
                                    self.routes.push([channel.peerID, map[j]])
                                }

                            })

                    })
                }
            })

        })
}
Onion.prototype = {
        seeds: {},
        leachers: {},
        seedMap: {},
        sessions: {},
        routes: [],
        proxies: {},
        proxying: {},
        publish: function(topic, data) {
            var keys = Object.keys(this.proxies)
            this.proxies[keys[keys.length * Math.random() << 0]].publish(topic, data);
        },
        subscribe: function(topic, func) {
            var keys = Object.keys(this.proxies)
            this.proxies[keys[keys.length * Math.random() << 0]].subscribe(topic, func)
        },
        call: function(procedure, data) {
            var self = this
            var keys = Object.keys(this.proxies)
            var key = keys[keys.length * Math.random() << 0]
            return new Promise(function(resolve, reject) {
                self.proxies[key].call(procedure, data).then(function(ans) {
                    resolve(ans)
                })
            })
        },
        onready: function() {
            console.log("onion session ready")
        },
        onion: function(route, direct) {
            var self = this
            sessionKeys = nacl.box.keyPair()
            var sessionKey = nacl.util.encodeBase64(sessionKeys.publicKey)
                // console.log("calling onion with route ", route)
                // send proxy request to seed
            if (route.length == 1) {
                if (direct) {

                } else {
                    // console.log("try new onion exit: ", route)
                    var req = {
                        "sessionID": sessionKey,
                        "type": "exit"
                    }
                    self.seeds[route[0]].call("session", req).then(function(exitKey) {
                        self.sessions[sessionKey] = new Session(sessionKey, self.seeds[route[0]])
                        self.proxies[sessionKey] = new Channel(self.sessions[sessionKey])

                    })
                }
            } else {

                // console.log("try new onion proxy: ", route[0], " to exit:", route[1], " with sessionID:", sessionKey)

                var req = {
                    "sessionID": sessionKey,
                    "type": "proxy",
                    "to": route[1]
                }
                req[route[1]] = {
                    "sessionID": sessionKey,
                    "type": "exit"
                }


                self.seeds[route[0]].call("session", req).then(function(map) {
                    if (map) {

                        // console.log("session creation returned map:", map)

                    }
                    console.log("Onion route from me to:", route)
                    self.sessions[sessionKey] = new Session(sessionKey, self.seeds[route[0]])
                    self.proxies[sessionKey] = new Channel(self.sessions[sessionKey])
                    if (self.waiting) {
                        self.onready()
                        self.waiting = false;
                    }
                })

            }

        },
        map: function(channel) {
            return new Promise(function(resolve, reject) {
                channel.call("map", []).then(function(data) {
                    // console.log("map answered", data)
                    self.map[channel.peerID] = data
                    resolve(data)
                })

            })
        }
    }
    // var onionnet = new Onion()

var Session = function(key, seed, leacher) {
    // can be master or slave?
    var self = this
    this.peerID = key
    this.leacher = leacher
    this.seed = seed
    if (leacher instanceof Exit) {
        console.log("proxy exit for:", seed.peerID, " and sessionID:", this.peerID)
        this.seed.subscribe(this.peerID, function(req) {
            console.log("exiting request:", req, "for sessionID", self.peerID)
            switch (req.action) {
                case "publish":
                    self.leacher.wssession.publish(req.topic, [req.data])
                    break;
                case "subscribe":
                    self.leacher.wssession.subscribe(req.topic, function(data) {
                        ans = {
                            topic: req.topic,
                            data: data,
                            action: "publish"
                        }
                        self.seed.publish(self.peerID, ans)
                    })
                    break;
                case "call":

                    self.leacher.wssession.call(req.procedure, [req.data]).then(
                        function(answer) {
                            
                            console.log("answer for request",{
                                "action": "answer",
                                "id": req.id,
                                "data": answer
                            },"on",self.peerID)
                            self.seed.publish(self.peerID, {
                                "action": "answer",
                                "id": req.id,
                                "data": answer
                            })

                        },
                        function(err){
                            console.log(err)
                        })
                    break;
            }
        })

    } else if (leacher instanceof Channel) {
        console.log("Start proxying with proxyID:", this.peerID, " from:", self.leacher.peerID, " to:", self.seed.peerID)
        this.seed.subscribe(self.peerID, function(rdata) {
            console.log("proxyID:", self.peerID, " from:", self.seed.peerID, " to:", self.leacher.peerID, rdata)

            self.leacher.publish(self.peerID, rdata)
        })
        this.leacher.subscribe(self.peerID, function(req) {
            console.log("proxyID:", self.peerID, " from:", self.leacher.peerID, " to:", self.seed.peerID, req)
                // self.seeds[to].publish(sessionID)
                // console.log("forward:", req)
            self.seed.publish(self.peerID, req)

        })
    } else if (!leacher) {

        console.log("New proxy proxyID:", this.peerID, " from:ME to:", self.seed.peerID)
        this.send = function(data) {
            console.log("Send proxy with proxyID:", self.peerID, " from:ME to:", self.seed.peerID, data)
            seed.publish(self.peerID, JSON.parse(data))
        }
        seed.subscribe(self.peerID, function(data) {
            console.log("Received data on proxy with proxyID:", self.peerID, " from:", self.seed.peerID, data)
            self.onmessage({
                "data": JSON.stringify(data)
            })
        })
    }

}
Session.prototype = {
    _init: function(route) {
        // session="s"
        // route=[1,2,3,exit]
        // 1.call(proxy,{"s",2}).then(
        // function(){
        // 1.publish("s",{"call","map",reqid})
        // 1.subscribe(reqid,)
        // })
    },
    send: function() {},
    onmessage: function() {},
    onclose: function() {},

}
