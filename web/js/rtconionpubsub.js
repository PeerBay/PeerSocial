var exit = function() {}
exit.prototype = {

    start: function(address, callback) {
        this.rtcKeys = nacl.box.keyPair()
        this.rtcKey = nacl.util.encodeBase64(this.rtcKeys.publicKey)
        console.log(this.rtcKey)
        if (true) {
            // authenticate using authid "joe"
            var user = this.rtcKey;
            var key = "secret2";
        }


        // this callback is fired during WAMP-CRA authentication
        //
        function onchallenge(session, method, extra) {

            console.log("onchallenge", method, extra);

            if (method === "wampcra") {

                console.log("authenticating via '" + method + "' and challenge '" + extra.challenge + "'");

                return autobahn.auth_cra.sign(key, extra.challenge);

            } else {
                throw "don't know how to authenticate using '" + method + "'";
            }
        }

        exit.connection = new autobahn.Connection({
            url: 'ws://127.0.0.1:8080/ws',
            realm: 'realm1',
            authmethods: ["wampcra"],
            authid: user,
            onchallenge: onchallenge
        });
        var self = this
        exit.connection.onopen = function(ses, details) {
            console.log("exit connected")
            ses.rtcKey = self.rtcKey
            callback(ses)
        }
        exit.connection.open()


    },
    meshes: [],


}
var mesh = function() {}
mesh.prototype = {
    rtcconnection: {
        'optional': [{
            'DtlsSrtpKeyAgreement': true
        }, {
            'RtpDataChannels': true
        }]
    },
    config: {
        "iceServers": [{
            "url": "stun:stun.l.google.com:19302"
        }]
    },
    sdpConstraints: {
        'mandatory': {
            'OfferToReceiveAudio': true,
            'OfferToReceiveVideo': true
        }
    },
    start: function(ses) {





        var self = this
        this.exit = ses
        this.exit.event = function(type, id) {
            console.log("event:", type)
        }
        console.log(this.exit.rtcKey)
        this.peers = {}
        this.exit.subscribe(self.exit.rtcKey, function(json) {
            json = json[0]
            switch (json.data.type) {
                case "offer":
                    console.log("leacher request ", json.from)
                    self.acceptConnection(json.from, json.data)
                    break;
                case "answer":
                    console.log("seed answered ", json.from)
                    self.establishConnection(json.from, json.data)
                    break;
            }
            if (json.data.candidate) {
                if (self.leachers[json.from]) {
                    console.log("candidate from leacher ", json.from)

                    self.leachers[json.from].addIceCandidate(new RTCIceCandidate(json.data));
                } else if (self.seeds[json.from]) {
                    console.log("candidate from seed ", json.from)
                    self.seeds[json.from].addIceCandidate(new RTCIceCandidate(json.data));

                }
            }

        })

        this.exit.call("nearPeers", [this.exit.rtcKey]).then(function(res, err) {
            console.log("nearPeers", res, err)
            for (i in res) {
                self.createConnection(res[i])
            }
        })
        this.routes = []


    },

    establishConnection: function(peerID, answer) {
        console.log("answerArrived", peerID, answer)

        if (this.leachers[peerID]) {
            console.log("leacher established", peerID)

            this.leachers[peerID].setRemoteDescription(new RTCSessionDescription(answer));
        } else if (this.seeds[peerID]) {
            console.log("seed established", peerID)
            this.seeds[peerID].setRemoteDescription(new RTCSessionDescription(answer));

        }
        this.peers[peerID]

    },
    leachers: {},


    acceptConnection: function(peerID, offer) {

        var self = this


        self.leachers[peerID] = new webkitRTCPeerConnection(self.config, self.rtcconnection);
        console.log("new leacher", self.leachers[peerID])

        this.leachers[peerID].onicecandidate = function(event) {

            if (event.candidate) {
                var json = {
                    from: self.exit.rtcKey,
                    data: event.candidate
                };
                self.exit.publish(peerID, [json])
            }
        }
        this.leachers[peerID].ondatachannel = function(event) {
            console.log("ondatachannel", self.leachers[peerID])
            self.leachers[peerID].channel = event.channel;
            self.leachers[peerID].channel.onopen = function(e) {
                self.exit.event("leachers", peerID)
                console.log("leacher channel ", peerID, "opened")

                // self.leachers[peerID].channel.send(JSON.stringify(req))
            }
            self.leachers[peerID].channel.onmessage = function(m) {

                message = JSON.parse(m.data)
                data = message.data
                if (message.session in self.sessions) {
                    console.log(message)
                    console.log("session exists")

                        // self.sessions[message.session](message)
                } else if (message.session) {
                    console.log(message)
                    self.sessions[message.session] = {}
                    if (message.route) {
                        self.sessions[message.session].send = function(message) {
                            self.seeds[message.route].send(message)
                        }
                        self.sessions[message.session].onmessage = function(message) {
                            self.leachers[peerID].send(message)
                        }
                    } else if (message.subscribe) {
                        self.exit.subscribe(message.query, function(docs) {
                            self.leachers[peerID].send(JSON.stringify(docs))
                        })
                    }
                }
                switch (message.action) {
                    case "map":
                        ans = {
                            "id": message.id,
                            "answer": Object.keys(self.seeds)
                        }
                        self.leachers[peerID].channel.send(JSON.stringify(ans))

                }

            }
            self.leachers[peerID].channel.onclose = function(e) {
                console.log("leacher closed", peerID)
            }
        }


        this.leachers[peerID].setRemoteDescription(
            new RTCSessionDescription(offer),
            function(e) {
                console.log(e)
            },
            function(e) {
                console.log(e)
            })

        this.leachers[peerID].createAnswer(function(desc) {
            console.log("createAnswer")
            self.leachers[peerID].setLocalDescription(desc, function(e) {
                console.log(e)
            }, function(e) {
                console.log(e)
            });
            var json = {
                from: self.exit.rtcKey,
                data: desc
            };
            self.exit.publish(peerID, [json])
            console.log("sendAnswer")
        }, function(e) {
            console.log(e)
        }, self.sdpConstraints)

    },
    seeds: {},
    requests: {},
    sessions: {},
    createConnection: function(peerID) {
        var self = this
        console.log("connect to seed", peerID)
        self.seeds[peerID] = new webkitRTCPeerConnection(self.config, self.rtcconnection);

        self.seeds[peerID].channel = self.seeds[peerID].createDataChannel("dataChannel", {
            reliable: true
        });
        self.seeds[peerID].onicecandidate = function(event) {
            if (event.candidate) {
                var json = {
                    from: self.exit.rtcKey,
                    data: event.candidate
                };

                console.log("send candidate to ", peerID)
                self.exit.publish(peerID, [json])
            }
        }
        self.seeds[peerID].channel.onopen = function(e) {
            self.exit.event("seeds", peerID)
            console.log("seed channel ", peerID, "opened")
            var uid = guid()
            req = {
                "id": uid,
                "action": "map"

            }
            self.seeds[peerID].channel.subscribe = {}
            self.seeds[peerID].channel.send(JSON.stringify(req))
            s = new session([peerID], self.seeds[peerID].channel)

            self.sessions[s.sessionKey] = s
            self.exit.event("sessions", [peerID])
            self.requests[uid] = function(answer) {
                for (i in answer) {
                    s = new session([peerID, answer[i]], self.seeds[peerID].channel)
                    self.sessions[s.sessionKey] = s
                    self.exit.event("sessions", [peerID, answer[i]])

                }

                console.log(self.sessions)
            }
        }
        self.seeds[peerID].channel.onclose = function(e) {
            console.log("datachannel closed")
        }
        self.seeds[peerID].channel.onmessage = function(m) {
            message = JSON.parse(m.data)
            console.log(self.requests, message)
            if (message.session) {
                self.seeds[peerID].channel.subscribe[message.session](message)
            }
            if (self.requests[message.id]) {
                self.requests[message.id](message.answer)
            }
        }

        self.seeds[peerID].createOffer(function(desc) {
            console.log("createOffer")
            self.seeds[peerID].setLocalDescription(desc);
            var json = {
                from: self.exit.rtcKey,
                data: desc
            };

            self.exit.publish(peerID, [json])

            console.log("send offer")
        }, function(e) {
            console.log(e)
        }, self.sdpConstraints);

    }

};



var session = function(config,route, channel, type) {
    
    if (config.type == "master") {

        this.sessionKeys = nacl.box.keyPair()
        this.sessionKey = nacl.util.encodeBase64(this.sessionKeys.publicKey)
        var req = {
            "session": this.sessionKey,
            "route": config.route[1]
        }

        this.route = config.route
        this.send = channel.send
        this.put=function(){}
        this.onmessage = function(message) {
            console.log(message)
        }
        config.channel.send(JSON.stringify(req))
        test = {
            "session": this.sessionKey,
            "testroute": config.route,

        }
        config.channel.send(JSON.stringify(test))
        config.channel.subscribe[this.sessionKey] = function(m) {
            console.log(m)
        }
        this.__init__()
    }else if(config.type=="slave"){

    }
}
session.prototype = {
    __init__: function() {

        console.log("start session:", this.sessionKey, " through ", this.route)
    },
    subscribe: function() {}
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
