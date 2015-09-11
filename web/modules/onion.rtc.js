// here we create onion connections to the server or to other users 
// using pub sub



var Onion = function() {
    self = this
    new Exit().then(
        function(exit) {
            exit.onclose = function() {

            }
            self.exit = exit
            self.waiting = true;
            self.rtcKey = exit.rtcKey
            self.peers = {}
            exit.ondisconnect = function(peerID, type) {
                
                if (peerID in self.peers) {
                    console.log(peerID, 'in self.peers', self.peers)
                    for (i in self.peers[peerID]) {
                        console.log(self.peers[peerID][i],self.proxies,self.proxying)
                        if (self.peers[peerID][i] in self.proxies) {
                            console.log("stop proxy ", self.peers[peerID][i])
                            self.proxies[self.peers[peerID][i]].close()
                            delete self.sessions[self.peers[peerID][i]]
                            delete self.proxies[self.peers[peerID][i]]
                            self.runOnion(1)
                        } else if (self.peers[peerID][i] in self.proxying) {
                            console.log("stop proxying ", self.peers[peerID][i])
                            self.proxying[self.peers[peerID][i]].close()
                            delete self.proxying[self.peers[peerID][i]]
                        }
                    }
                }
                delete self[type][peerID]
            }
            exit.onleacher = function(channel) {
                if (Object.keys(self.leachers).length >= 6) {
                    exit.wssession.call("disallowLeachers", [exit.rtcKey])
                }
                self.peers[channel.peerID] = []

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

                // self.leachers[channel.peerID].register("stopsession", function(data) {
                //     sessionID = data.sessionID
                // })
                self.leachers[channel.peerID].register("session", function(data) {

                    sessionID = data.sessionID
                    switch (data.type) {
                        case "direct":
                            console.log("direct session was asked from ", channel.peerID)
                            ses = new Session()
                            ses.peerID = sessionID
                            ses.type = "direct"
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
                                self.peers[to].push(sessionID)
                                self.peers[channel.peerID].push(sessionID)

                                self.seeds[to].call("session", data[data.to]).then(function(d) {
                                    console.log("proxy from:", channel.peerID, " to ", data.to, " established with sesid", sessionID)
                                    self.proxying[data.sessionID] = new Session(data.sessionID, self.seeds[data.to], self.leachers[channel.peerID])
                                    self.proxying[data.sessionID].type = "proxy"
                                    self.proxying[data.sessionID].close = function() {

                                    }
                                })
                                return self.seedMap[to]
                            } else {
                                return false
                            }

                            break;
                        case "exit":
                            self.peers[channel.peerID].push(sessionID)
                            self.proxying[data.sessionID] = new Session(data.sessionID, self.leachers[channel.peerID], exit)
                            self.proxying[data.sessionID].type = "exit"
                            return {
                                "exit": true
                            }
                            break;
                    }


                })

            }

            self.runOnion(3)

        })


}
Onion.prototype = {
        runOnion: function(num) {
            var self = this
            this.exit.getRandomPeers(num).then(function(seeds) {
                console.log(seeds)
                if (seeds.length == 0) {
                    self.exit.type = "exitonly"
                    self.proxies["exit"] = self.exit.wssession
                    self.onready()
                    self.waiting = false
                }
                for (i in seeds) {
                    console.log(self)
                    self.exit.createConnection(seeds[i]).then(function(channel) {
                        self.waiting = false
                        console.log("stopped waiting")
                        if (channel.peerID in self.seeds) {
                            console.warn(channel.peerID, "in seeds")
                            return null
                        }
                        console.log("seed :", channel.peerID)
                        self.peers[channel.peerID] = []
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
        },

        seeds: {},
        leachers: {},
        seedMap: {},
        sessions: {},
        routes: [],
        proxies: {},
        proxying: {},
        subscriptions: {},
        seedSessions: {},
        publish: function(topic, data) {
            var keys = Object.keys(this.proxies)

            this.proxies[keys[keys.length * Math.random() << 0]].publish(topic, data, true);
        },
        subscribe: function(topic, func) {
            var keys = Object.keys(this.proxies)
            key = keys[keys.length * Math.random() << 0]
            if (key != "exit") {
                this.subscriptions[key][topic] = func

            }
            try {
                this.proxies[key].subscribe(topic, func)
            } catch (e) {
                console.log(e)
                delete this.proxies[key]
                this.runOnion(2)

                for (t in this.subscriptions[key]) {
                    this.subscribe(t, this.subscriptions[key][t])
                }
            }

        },
        call: function(procedure, data) {
            var self = this
            var keys = Object.keys(this.proxies)
            var key = keys[keys.length * Math.random() << 0]

            return new Promise(function(resolve, reject) {

                try {
                    self.proxies[key].call(procedure, data).then(function(ans) {
                        if(ans=="error"){
                            delete self.proxies[key]
                            self.call(procedure,data)
                        }else{
                        resolve(ans)
                            
                        }
                    })
                } catch (e) {
                    console.log(e)
                    delete self.proxies[key]
                    self.runOnion(1)

                    // for (t in self.subscriptions[key]) {
                    //     self.subscribe(t, this.subscriptions[key][t])
                    // }
                    // try {
                    //     self.call(procedure, data).then(function(ans) {
                    //         resolve(ans)
                    //     })
                    // } catch (e) {
                    //     console.log(e)
                    // }
                }

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
            if (!(route[0] in self.seedSessions)) {
                self.seedSessions[route[0]] = []

            }
            self.seedSessions[route[0]].push(sessionKey)
            self.subscriptions[sessionKey] = {}
            if (route.length == 1) {
                if (direct) {

                } else {
                    // console.log("try new onion exit: ", route)
                    var req = {
                        "sessionID": sessionKey,
                        "type": "exit"
                    }
                    self.seeds[route[0]].call("session", req).then(function(exitKey) {
                        self.peers[route[0]].push(sessionKey)
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
                    self.proxies[sessionKey].onclose = function() {
                        delete self.sessions[sessionKey]
                        delete self.proxies[sessionKey]
                    }
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
    this.subscriptions = []
    if (leacher instanceof Exit) {
        console.log("proxy exit for:", seed.peerID, " and sessionID:", this.peerID)
        this.seed.subscribe(this.peerID, function(req) {
            console.log("exiting request:", req, "for sessionID", self.peerID)
            switch (req.action) {
                case "publish":
                    self.leacher.wssession.publish(req.topic, req.data)
                    break;
                case "subscribe":

                    var sub = self.leacher.wssession.subscribe(req.topic, function(data) {
                        ans = {
                            topic: req.topic,
                            data: data,
                            action: "publish"
                        }
                        self.seed.publish(self.peerID, ans)
                    })
                    self.subscriptions.push(sub)
                    break;
                case "call":

                    self.leacher.wssession.call(req.procedure, req.data).then(
                        function(answer) {

                            console.log("answer for request", {
                                "action": "answer",
                                "id": req.id,
                                "data": answer
                            }, "on", self.peerID)
                            self.seed.publish(self.peerID, {
                                "action": "answer",
                                "id": req.id,
                                "data": answer
                            })

                        },
                        function(err) {
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
            console.log("Send proxy with proxyID:", self.peerID, " from:ME to:", self.seed.peerID)
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
    close: function() {},

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
