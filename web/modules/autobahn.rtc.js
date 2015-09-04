var Channel = function(channel, proxy) {
    var self = this
        // console.log(this)
    this.channel = channel
    this.eventHandler = window.document.createElement("channel")
    this.inEventHandler = window.document.createElement("channel")
    this.outEventHandler = window.document.createElement("channel")
    this.subscriptions = []
    this.peerID = self.channel.peerID
    this.multipart={}
        // if (proxy) {
        //     this.proxy
        // }
    this.channel.onclose = function() {
            console.log("channel ", self.channel.peerID, " closed")
        }
        // this.register("test",function(test){
        //     // console.log("test:",test)
        //     return {"tested":self.channel.peerID}
        // })
    this.channel.normalsend = this.channel.send
    this.channel.send = function(data) {
        if (data.length > 15000) {
            multipartID = self._reqID()
            for (i = 0; i <= data.length; i += 15000) {
                self.channel.normalsend(JSON.stringify({
                    "multipart": multipartID,
                    "length": data.length,
                    "data": data.substr(i, 15000)
                }))

            }
        }else{
            self.channel.normalsend(data)
        }
    }
    this.channel.onmessage = function(e) {
        // console.log(this.peerID,e.data)
        var request = JSON.parse(e.data)
        if (request.multipart) {
            if (request.multipart in self.multipart) {
                self.multipart[request.multipart].data += request.data
                if (self.multipart[request.multipart].data.length == self.multipart[request.multipart].length) {
                    request = JSON.parse(self.multipart[request.multipart].data)
                    delete self.multipart[request.multipart]
                } else {
                    return
                }
            } else {
                self.multipart[request.multipart] = {
                    length: request.length,
                    data: request.data
                }
                return
            }
        }
        switch (request.action) {

            case "publish":
                console.log("in", request)

                var event = new CustomEvent(request.topic, {
                    detail: request.data
                });
                self.inEventHandler.dispatchEvent(event)
                break;
            case "subscribe":
                // console.log("subscribe request for ", request["topic"])
                var topic = request["topic"]
                var data = request["data"]

                self.outEventHandler.addEventListener(topic, function(data) {
                    console.log("out", {
                        "action": "publish",
                        "topic": topic,
                        "data": data.detail
                    })

                    self.channel.send(JSON.stringify({
                        "action": "publish",
                        "topic": topic,
                        "data": data.detail
                    }))
                }, false)
                break;
            case "call":
                reqid = request.id
                data = request.data
                    // console.log("received call for procedure ", request.procedure)

                function answer(data) {
                    self.channel.send(JSON.stringify(data.detail))
                    console.log("answering request ", data.detail.id)
                    self.eventHandler.removeEventListener(data.detail.id, answer, false)
                }
                self.eventHandler.addEventListener(reqid, answer, false)
                    // console.log("waiting procedure call ", reqid)
                var event = new CustomEvent("proc-" + request.procedure, {
                    detail: request
                });
                self.eventHandler.dispatchEvent(event)
                break;
            case "answer":

                reqid = request.id
                data = request.data
                var event = new CustomEvent(reqid, {
                    detail: data
                });
                self.eventHandler.dispatchEvent(event)
                break;

        }
    }

}
Channel.prototype = {

    _sendRequest: function(request, topic) {
        this.channel.send(JSON.stringify({
            "action": request,
            "topic": topic,
            "peer": myPeerID
        }))

    },
    publish: function(topic, data) {
        // console.log('publishing ', topic)
        // console.log("me publishing:",topic," to channel:",this.channel.peerID)
        data.peer = myPeerID
        var event = new CustomEvent(topic, {
            detail: data
        });

        this.outEventHandler.dispatchEvent(event)
    },
    subscriptions: {},

    subscribe: function(topic, func) {
        // console.log(this.channel.peerID," subscribed to:",this.subscriptions)
        if (this.subscriptions.indexOf(topic) == -1) {
            // console.log("me subscribe to:",topic," in channel:",this.channel.peerID)
            this.subscriptions.push(topic)
            this._sendRequest("subscribe", topic)
            wrapfunc = function(data) {
                // console.log(data,func)

                func(data.detail)
            }
            this.inEventHandler.addEventListener(topic, wrapfunc, false)

        } else {

            console.log("subscription ", topic, " exists in ", this.channel.peerID)
            var err = new Error()
            console.log(err.stack);
        }
        // console.log('subscribing ', topic)
    },
    call: function(procedure, data) {
        reqid = this._reqID()
        var self = this
        data.peer = myPeerID
        this.channel.send(JSON.stringify({
            "action": "call",
            "procedure": procedure,
            "data": data,
            "id": reqid

        }))


        return new Promise(function(resolve, reject) {
            function answerCall(data) {
                // console.log(data)
                if (data.detail.rejected) {
                    reject(data.detail)
                } else {
                    resolve(data.detail)
                }
                self.eventHandler.removeEventListener(reqid, answerCall, false)
            }
            self.eventHandler.addEventListener(reqid, answerCall)
        })
    },
    register: function(procedure, func) {
        // console.log("registered procedure ", procedure)
        var self = this;
        this.eventHandler.addEventListener("proc-" + procedure, function(data) {
            // console.log("procedure ", procedure, " called with data: ", data.detail)
            var event = new CustomEvent(data.detail.id, {
                detail: {
                    "id": data.detail.id,
                    "action": "answer",
                    "data": func(data.detail.data),
                    "peer": myPeerID
                }
            });

            self.eventHandler.dispatchEvent(event)

        })
    },
    forward: function(data) {
        // console.log(data)

        this.channel.send(JSON.stringify(data))
    },
    check: function() {},
    _reqID: function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + s4() + s4() +
            s4() + s4() + s4() + s4();
    }

}
