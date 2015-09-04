// here we provide an exit object that handles direct communications with the server
// and starts rtc p2p connections returning channels onopen
var AUTOBAHN_DEBUG = true;
var myPeerID
var Exit = function(address) {
    var self = this
    return new Promise(function(resolve, reject) {

        self.rtcKeys = nacl.box.keyPair()
        self.rtcKey = nacl.util.encodeBase64(self.rtcKeys.publicKey)
        myPeerID=self.rtcKey
        console.log(self.rtcKey)
        if (true) {
            // authenticate using authid "joe"
            var user = self.rtcKey;
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

        self.connection = new autobahn.Connection({
            url: 'ws://'+window.location.hostname+':8080/ws',
            realm: 'realm1',
            authmethods: ["wampcra"],
            authid: user,
            onchallenge: onchallenge
        });

        self.connection.onclose=function(){
            self.onclose()
        }
        self.connection.onopen = function(ses, details) {
            console.log("exit connected", ses)
            ses.rtcKey = self.rtcKey
            self.wssession = ses
            self.wssession.subscribe(self.rtcKey, function(json) {
                json = json[0]
                switch (json.data.type) {
                    case "offer":
                        // console.log("leacher request ", json.from)
                        self.acceptConnection(json.from, json.data)
                        break;
                    case "answer":
                        // console.log("seed answered ", json.from)
                        self.establishConnection(json.from, json.data)
                        break;
                }
                if (json.data.candidate) {
                    if (self.leachers[json.from]) {
                        // console.log("candidate from leacher ", json.from)

                        self.leachers[json.from].addIceCandidate(new RTCIceCandidate(json.data));
                    } else if (self.seeds[json.from]) {
                        // console.log("candidate from seed ", json.from)
                        self.seeds[json.from].addIceCandidate(new RTCIceCandidate(json.data));

                    }
                }


            })
            self.onconnection(self)
            resolve(self)
        }
        self.connection.open()

    })

}
Exit.prototype = {
    seeds: {},
    leachers: {},
    rtcconnection: {
        'optional': [{
            'DtlsSrtpKeyAgreement': true
        }]
    },
    config: {
        "iceServers": [{
            "url": "stun:stun.l.google.com:19302"
        }]
    },
    sdpConstraints: {
        'mandatory': {
            'OfferToReceiveAudio': false,
            'OfferToReceiveVideo': false
        }
    },
    onclose:function(){},
    onconnection: function() {


    },
    getRandomPeers: function(length) {
        var self = this
        return new Promise(function(resolve, reject) {
            self.wssession.call("randomPeers", [length]).then(function(res, err) {
                var seen = {};
                var out = [];
                var len = res.length;
                var j = 0;
                for (var i = 0; i < len; i++) {
                    var item = res[i];
                    if (seen[item] !== 1 && (item != self.rtcKey)) {
                        seen[item] = 1;
                        out[j++] = item;
                    }
                }

                console.log("randomPeers", out)

                resolve(out);
            })
        })


    },
    ondisconnect: function(peer, type) {

    },
    createConnection: function(peerID) {
        var self = this
        console.log("connect to seed", peerID)
        if((peerID in self.seeds) || (peerID in self.leachers) ){
            return false
        }
        return new Promise(function(resolve, reject) {
            self.seeds[peerID] = new webkitRTCPeerConnection(self.config, self.rtcconnection);
            var channel = self.seeds[peerID].createDataChannel("dataChannel", {
                reliable: true
            });
            channel.binaryType='arraybuffer'
            self.seeds[peerID].onclose = function() {
                console.log("RTCPeer with id ", peerID, " closed connection")
            }
            self.seeds[peerID].onicecandidate = function(event) {
                if (event.candidate) {
                    var json = {
                        from: self.rtcKey,
                        data: event.candidate
                    };

                    console.log("send candidate to ", peerID)
                    self.wssession.publish(peerID, [json])
                }
            }
            self.seeds[peerID].oniceconnectionstatechange = function() {
                if (this.iceConnectionState == "disconnected") {
                    channel.onclose()
                    console.log("seeds", ":", peerID, " disconnected")
                    self.seeds[peerID].close()
                    delete self.seeds[peerID]
                    self.ondisconnect(peerID, "seeds")
                }
            }
            channel.onclose = function() {}
            channel.onmessage = function(m) {

                console.log(m)
            }
            channel.onopen = function(e) {
                console.log("channel.created")
                channel.peerID = peerID
                resolve(channel)
            }

            self.seeds[peerID].createOffer(function(desc) {
                // console.log("createOffer")
                self.seeds[peerID].setLocalDescription(desc);
                var json = {
                    from: self.rtcKey,
                    data: desc
                };

                self.wssession.publish(peerID, [json])

                // console.log("send offer")
            }, function(e) {
                // console.log(e)
            }, self.sdpConstraints);


        })
    },
    establishConnection: function(peerID, answer) {
        // console.log("answerArrived", peerID, answer)

        if (this.leachers[peerID]) {
            // console.log("leacher established", peerID)

            this.leachers[peerID].setRemoteDescription(new RTCSessionDescription(answer));
        } else if (this.seeds[peerID]) {
            // console.log("seed established", peerID)
            this.seeds[peerID].setRemoteDescription(new RTCSessionDescription(answer));

        }


    },
    onleacher: function(channel) {
        console.log("new leacher channel with peerID", channel.peerID)
    },
    acceptConnection: function(peerID, offer) {
        var self = this
        if((peerID in self.seeds) || (peerID in self.leachers) ){
            return false
        }
        this.leachers[peerID] = new webkitRTCPeerConnection(self.config, self.rtcconnection);
        this.leachers[peerID].onicecandidate = function(event) {
            if (event.candidate) {
                var json = {
                    from: self.rtcKey,
                    data: event.candidate
                };
                self.wssession.publish(peerID, [json])
            }
        }

        this.leachers[peerID].ondatachannel = function(event) {
            self.leachers[peerID].oniceconnectionstatechange = function() {
                if (this.iceConnectionState == "disconnected") {
                    event.channel.onclose()
                    console.log("leachers", ":", peerID, " disconnected")
                    self.leachers[peerID].close()
                    delete self.leachers[peerID]
                    self.ondisconnect(peerID, "leachers")
                }
            }
            event.channel.onmessage = function(m) {

            }
            event.channel.onclose = function(e) {
                console.log("leacher closed", peerID)
            }
            event.channel.onopen = function(e) {
                console.log(self.leachers[peerID])
                event.channel.peerID = peerID
                self.onleacher(event.channel)
            }
        }


        this.leachers[peerID].setRemoteDescription(
            new RTCSessionDescription(offer),
            function(e) {
                // console.log(e)
            },
            function(e) {
                console.log(e)
            })

        this.leachers[peerID].createAnswer(function(desc) {
            self.leachers[peerID].setLocalDescription(desc, function(e) {
                // console.log(e)
            }, function(e) {
                console.log(e)
            });
            var json = {
                from: self.rtcKey,
                data: desc
            };
            self.wssession.publish(peerID, [json])
        }, function(e) {
            console.log(e)
        }, self.sdpConstraints)

    }

}
