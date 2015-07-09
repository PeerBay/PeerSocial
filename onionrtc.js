function onionProxy(config, callback) {
	// if(server==rtcpeer)
	if (typeof config == "function") {
		callback = config
		server = "ws://" + location.host + ":8080"
		keys = nacl.box.keyPair()
	} else {
		server = config.server || "ws://" + location.host + ":8080"
		keys = config.keys || nacl.box.keyPair()

	}
	console.log(server, keys)
	var self = this;


	this.ws = new ReconnectingWebSocket(url);
	this.ws.debug = true;
	this.ws.timeoutInterval = 5400;
	this.knownPeers = []
	this.ws.onopen = function(e) {
		this.server = true
		console.log("Websocket opened");

		self.localID = keyToString(keys.publicKey)
		if (callback) {
			callback()
		}
		self.secretKey = keyToString(keys.secretKey)
		self.dht = new DHT()
		self.dht.newRoutingTable(self.localID)
		message = {
			action: "newPeer",
			data: self.localID
		}
		this.send(JSON.stringify(message))
		message = {
			action: "allPeers"
		}
		this.send(JSON.stringify(message))

	}
	this.ws.onclose = function(e) {
		console.log("Websocket closed");
	}
	this.onAction=function(action,data){

	}
	this.ws.onmessage = function(e) {
		// console.log("Websocket message received: " + e.data);

		json = JSON.parse(e.data)
		console.log("ws message", json)
		switch (json.data.type) {
			case "offer":
				if (json.video) {
					self.acceptMediaConnection(json.from, json.data)
				} else {
					self.acceptConnection(json.from, json.data)

				}
				break;
			case "answer":
				self.establishConnection(json.from, json.data)
				break;
		}
		if (json.data.candidate) {

			self.peers[json.from].addIceCandidate(new RTCIceCandidate(json.data));
		}



		if (json.action) {
			switch (json.action) {
				case "newPeer":
					if (!(json.data in self.knownPeers) && (self.localID !== json.data)) {
						self.knownPeers.push(json.data)
						console.log(self.knownPeers)
						self.dht.update(json.data)
					}
					break;
				case "allPeers":
					self.knownPeers = json.data
					self.dht.update(self.knownPeers)
					console.log(self.knownPeers)
					break;
				default:
					self.onAction(json.action,json.data)	
			}
		}
	}
	this.ws.onerror = function(e) {
		console.log("Websocket error");
	}

}























function rtcProxy(config, callback) {
	// if(server==rtcpeer)
	if (typeof config == "function") {
		callback = config
		server = "ws://" + location.host + ":8080"
		keys = nacl.box.keyPair()
	} else {
		server = config.server || "ws://" + location.host + ":8080"
		keys = config.keys || nacl.box.keyPair()

	}
	console.log(server, keys)
	var self = this;
	this.ws = new WebSocket(server);
	this.knownPeers = []
	this.ws.onopen = function(e) {
		this.server = true
		console.log("Websocket opened");

		self.localID = keyToString(keys.publicKey)
		if (callback) {
			callback()
		}
		self.secretKey = keyToString(keys.secretKey)
		self.dht = new DHT()
		self.dht.newRoutingTable(self.localID)
		message = {
			action: "newPeer",
			data: self.localID
		}
		this.send(JSON.stringify(message))
		message = {
			action: "allPeers"
		}
		this.send(JSON.stringify(message))

	}
	this.ws.onclose = function(e) {
		console.log("Websocket closed");
	}
	this.onAction=function(action,data){

	}
	this.ws.onmessage = function(e) {
		// console.log("Websocket message received: " + e.data);

		json = JSON.parse(e.data)
		console.log("ws message", json)
		switch (json.data.type) {
			case "offer":
				if (json.video) {
					self.acceptMediaConnection(json.from, json.data)
				} else {
					self.acceptConnection(json.from, json.data)

				}
				break;
			case "answer":
				self.establishConnection(json.from, json.data)
				break;
		}
		if (json.data.candidate) {

			self.peers[json.from].addIceCandidate(new RTCIceCandidate(json.data));
		}
		if (json.action) {
			switch (json.action) {
				case "newPeer":
					if (!(json.data in self.knownPeers) && (self.localID !== json.data)) {
						self.knownPeers.push(json.data)
						console.log(self.knownPeers)
						self.dht.update(json.data)
					}
					break;
				case "allPeers":
					self.knownPeers = json.data
					self.dht.update(self.knownPeers)
					console.log(self.knownPeers)
					break;
				default:
					self.onAction(json.action,json.data)	
			}
		}
	}
	this.ws.onerror = function(e) {
		console.log("Websocket error");
	}
	this.peers = {};
	this.channels = {};

	var config = {
		"iceServers": [{
			"url": "stun:stun.l.google.com:19302"
		}]
	};
	var connection = {
		'optional': [{
			'DtlsSrtpKeyAgreement': true
		}, {
			'RtpDataChannels': true
		}]
	};
	var sdpConstraints = {
		'mandatory': {
			'OfferToReceiveAudio': true,
			'OfferToReceiveVideo': true
		}
	}
	this.connect = function(to, through, callback, stream) {
		console.log(to, through, callback)
		if (typeof(to) == "function") {
			callback = to;
			to = this.randomPeer()
			peerID = to
			through = []
			type = "random"

		} else if (typeof(to) == "string" && typeof(through) == "function") {
			callback = through;
			peerID = to
			through = []
			type = "direct"

		} else if (typeof(to) == "object" && typeof(through) == "function") {
			callback = through
			to = this.randomPeer()
			through = this.randomPeers(3, [to]);
			peerID = through[0]
			type = "onion"

		} else if (typeof(to) == "string" && typeof(callback) == "function") {
			if (typeof(through) == "object") {
				type = "onionTo"
				peerID = through[0]

			} else if (through == true) {
				type = "randomOnionTo"
				through = this.randomPeers(3, [to])
				peerID = through[0]
			} else {
				type = "direct"
				peerID = to
				through = []
			}

		} else {
			throw "connect(string, array || boolean,function == [to,through,callback])"
		}
		if (["onion", "onionTo", "randomOnionTo"].indexOf(type) != -1) {
			prepare = function(channel) {
				//prepare the onion connection
				console.log(through, to)
				channel.type = type
				channel.to = to;
				channel.through = through.slice(0)
				console.log(channel.through)
				keys = nacl.box.keyPair()
				pkey = keyToString(keys.publicKey)
				skey = keyToString(keys.secretKey)

				through.splice(0, 1)
				through[through.length] = to
				console.log(channel.through)

				for (i in through) {
					cipher = {
						"key": pkey,
						"action": "bridge",
						"data": through[i],
					}
					cipher = encryptMessage(cipher, channel.through[i], skey)
					channel.send(cipher)
				}
				key = nacl.randomBytes(32)
				channel.key = nacl.util.encodeBase64(key)
				message = {
					"key": pkey,
					"action": "direct",
					"data": channel.key
				}
				message = encryptMessage(message, to, skey)
				channel.send(message)

				channel.onreceive = function(m) {
					console.log(m)
				}
				channel.onmessage = function(e) {
					message = decryptMessage(e.data, channel.key)
					channel.onreceive(message)
					// self.trigger(message.action, message.data)
				}

				channel.transmit = function(data) {
					message = encryptMessage(data, channel.key)
					channel.send(message)
				}
				callback(channel)

			}
		} else {
			prepare = function(channel) {
				channel.to = to
				channel.type = type
				channel.key = nacl.util.encodeBase64(nacl.randomBytes(32))
				message = {
					"action": "direct",
					"data": channel.key
				}
				message = encryptMessage(message, channel.peerID, self.secretKey)
				channel.send(message)
				channel.onreceive = function(m) {
					console.log(m)
				}
				channel.onmessage = function(e) {
					message = decryptMessage(e.data, channel.key)
					channel.onreceive(message)

					// self.trigger(message.action, message.data)
				}

				channel.transmit = function(data) {
					message = encryptMessage(data, channel.key)
					channel.send(message)
				}
				console.log("established")
				// channel.transmit({action:"message",data:"hello friend"})
				callback(channel)
			}
		}
		console.log(peerID, type, through)

		this.createConnection(peerID, prepare, stream)
	}
	this.mediaPeers = {}
	this.createMediaConnection = function(peerID, stream, callback) {
		if (peerID in this.mediaPeers) {
			this.mediaPeers[peerID].addStream(stream)

		} else {
			this.mediaPeers[peerID] = new webkitRTCPeerConnection(config, connection);
			this.mediaPeers[peerID].peerID = peerID

			this.mediaPeers[peerID].onicecandidate = function(event) {
				console.log("onicecandidate")
				if (event.candidate) {
					var json = {
						from: self.localID,
						to: this.peerID,
						data: event.candidate
					};
					self.ws.send(JSON.stringify(json))
				}
			}
			this.mediaPeers[peerID].onaddstream = function(evt) {
				console.log("received stream", evt)
				evt.stream.peerID = peerID
				self.onMediaStream(evt.stream)
			}
			if (typeof stream == "object") {
				console.log("RTC with video", stream)
				this.mediaPeers[peerID].addStream(stream)
			}
			this.mediaPeers[peerID].createOffer(function(desc) {
				console.log("createOffer")
				self.mediaPeers[peerID].setLocalDescription(desc);
				var json = {
					from: self.localID,
					to: peerID,
					data: desc,
					video: true
				};
				self.ws.send(JSON.stringify(json))
				console.log("send offer")
			}, function(e) {
				console.log(e)
			}, sdpConstraints);

		}
	}
	this.createConnection = function(peerID, callback, stream) {
		console.log("createConnection", peerID, prepare)
		if (peerID in this.peers) {
			this.peers[peerID].close()
		}
		this.peers[peerID] = new webkitRTCPeerConnection(config, connection);
		this.peers[peerID].peerID = peerID

		var channel = this.channels[peerID] = this.peers[peerID].createDataChannel("dataChannel", {
			reliable: true
		});
		channel.peerID = peerID
		this.peers[peerID].onicecandidate = function(event) {
			console.log("onicecandidate")
			if (event.candidate) {
				var json = {
					from: self.localID,
					to: this.peerID,
					data: event.candidate
				};
				self.ws.send(JSON.stringify(json))
			}
		}
		channel.onopen = function(e) {
			console.log("datachannel opened")
			callback(this)
		}
		channel.onclose = function(e) {
			console.log("datachannel closed")
		}

		this.peers[peerID].createOffer(function(desc) {
			console.log("createOffer")
			self.peers[peerID].setLocalDescription(desc);
			var json = {
				from: self.localID,
				to: peerID,
				data: desc
			};
			self.ws.send(JSON.stringify(json))
			console.log("send offer")
		}, function(e) {
			console.log(e)
		}, sdpConstraints);

	}

	this.acceptConnection = function(peerID, offer, video) {
		console.log("acceptConnection", peerID, offer)
		this.peers[peerID] = new webkitRTCPeerConnection(config, connection);
		this.peers[peerID].peerID = peerID
		this.peers[peerID].onicecandidate = function(event) {
			console.log("onicecandidate")
			if (event.candidate) {
				var json = {
					from: self.localID,
					to: this.peerID,
					data: event.candidate
				};
				self.ws.send(JSON.stringify(json))
			}
		}
		this.peers[peerID].ondatachannel = function(event) {
			console.log("ondatachannel")
			self.channels[this.peerID] = event.channel;
			self.channels[this.peerID].peerID = this.peerID
			self.channels[this.peerID].onopen = function(e) {
				console.log("datachannel opened")

				self.newChannel(this)
			}
			self.channels[this.peerID].onclose = function(e) {
				console.log("datachannel closed")
			}
		}

		this.peers[peerID].setRemoteDescription(new RTCSessionDescription(offer), function(e) {
			console.log(e)
		}, function(e) {
			console.log(e)
		})

		this.peers[peerID].createAnswer(function(desc) {
			console.log("createAnswer")
			self.peers[peerID].setLocalDescription(desc, function(e) {
				console.log(e)
			}, function(e) {
				console.log(e)
			});
			var json = {
				from: self.localID,
				to: peerID,
				data: desc
			};
			self.ws.send(JSON.stringify(json))
			console.log("sendAnswer")
		}, function(e) {
			console.log(e)
		}, sdpConstraints)

	}
	this.acceptMediaConnection = function(peerID, offer) {
		console.log("acceptConnection", peerID, offer)
		this.mediaPeers[peerID] = new webkitRTCPeerConnection(config, connection);
		this.mediaPeers[peerID].peerID = peerID

		navigator.webkitGetUserMedia({
			"audio": true,
			"video": true
		}, function(stream) {
			console.log("camera writing")
			self.mediaPeers[peerID].addStream(stream)
			self.mediaPeers[peerID].onicecandidate = function(event) {
				console.log("onicecandidate")
				if (event.candidate) {
					var json = {
						from: self.localID,
						to: this.peerID,
						data: event.candidate
					};
					self.ws.send(JSON.stringify(json))
				}
			}

			self.mediaPeers[peerID].onaddstream = function(evt) {
				console.log("received stream", evt)
				evt.stream.peerID = peerID
				self.onMediaStream(evt.stream)

			}

			self.mediaPeers[peerID].setRemoteDescription(new RTCSessionDescription(offer),
				function() {
					consol.log("sdp success")

				},
				function(e) {
					console.log(e)
				})
			self.mediaPeers[peerID].createAnswer(function(desc) {
				console.log("createAnswer")
				self.mediaPeers[peerID].setLocalDescription(desc,
					function(e) {
						console.log(e)
					}, function(e) {
						console.log(e)
					});
				var json = {
					from: self.localID,
					to: peerID,
					data: desc
				};
				self.ws.send(JSON.stringify(json))
				console.log("sendAnswer")
			}, function(e) {
				console.log(e)
			}, sdpConstraints)

		}, function(err) {
			console.log(err)
		})

	}
	this.establishConnection = function(peerID, answer) {
		console.log("answerArrived", peerID, answer)
		this.peers[peerID].setRemoteDescription(new RTCSessionDescription(answer));
	}
	this.onNewChannel = function() {

	}
	this.newChannel = function(channel) {
		console.log("new channel made", channel)

		channel.addStream = function(stream) {
			this.peers[channel.peerID].addStream(stream)
		}
		channel.onmessage = function(e) {
			console.log("first Message", e.data)
			if (channel.type == "bridge") {
				channel.stack.push(e.data)
				return;
			}
			message = decryptMessage(e.data, channel.peerID, self.secretKey)
			console.log(message)
			switch (message.action) {
				case "direct":
					if ("key" in message) {
						channel.anonymous = true;
					}
					channel.key = message.data
					channel.type = "direct"
					console.log("new direct channel")
					channel.onreceive = function(m) {
						console.log(m)

					}
					channel.onmessage = function(e) {
						message = decryptMessage(e.data, this.key)
						this.onreceive(message)
						// self.trigger(message.action, message.data)
					}

					channel.transmit = function(data) {
						channel.send(encryptMessage(data, channel.key))
					}
					// channel.transmit({
					// 	action: "message",
					// 	data: "hello to you"
					// })
					self.onNewChannel(channel)
					// rtcProxy.onincoming(self)
					break;
				case "bridge":
					channel.type = "bridge"
					channel.stack = []
					self.createConnection(message.data, function(bridge) {
						for (i in channel.stack) {
							bridge.send(channel.stack[i])
						}
						bridge.onmessage = function(e) {
							channel.send(e.data)
						}
						channel.onmessage = function(e) {
							bridge.send(e.data)
						}
					})

					break;
				case "wsexit":
					break;
			}
		}
	}

	this.randomPeer = function() {
		// console.log(this.knownPeers)
		return this.knownPeers[Math.floor(Math.random() * this.knownPeers.length)]
	}
	this.randomPeers = function(len, except) {
		randompeers = [];
		if (!except) {
			except = [];
		}
		for (i = 0; i <= len; i++) {
			p = this.randomPeer()
			if ((randompeers.indexOf(p) == -1) && (except.indexOf(p) == -1)) {
				randompeers.push(p)
			} else {
				i--;
			}
		}
		return randompeers;
	}
}

function keyToString(key) {
	if (key.length !== 32) {
		throw new Error('keyToString: invalid public key size')
		return false
	}
	var id = new Uint8Array(33)
	for (var i = 0; i < key.length; i++) {
		id[i] = key[i]
	}
	var hash = new BLAKE2s(1)
	hash.update(key)
	id[32] = hash.digest()[0]
	return Base58.encode(id)
}

function keyToUint(key) {
	return Base58.decode(key).subarray(0, 32)
}

function encryptMessage(message, oPKey, mSKey) {
	// message :JSON object
	data = {}
	if ("key" in message) {
		key = message.key
		data.key = key
		delete message.key
	}
	// console.log(message)
	message = JSON.stringify(message)
	console.log(nacl.util.decodeUTF8(message).length)
	// message = LZString.compress(message)
	message = nacl.util.decodeUTF8(message)

	nonce = nacl.randomBytes(24)

	oPKey = keyToUint(oPKey)
	if (!mSKey) {
		cipher = nacl.secretbox(message, nonce, oPKey)
		data[nacl.util.encodeBase64(nonce)] = nacl.util.encodeBase64(cipher)
	} else {
		mSKey = keyToUint(mSKey)
		cipher = nacl.box(message, nonce, oPKey, mSKey)
		data[nacl.util.encodeBase64(nonce)] = nacl.util.encodeBase64(cipher)
	}

	return JSON.stringify(data)
}

function decryptMessage(box, oPKey, mSKey) {
	console.log(box, oPKey, mSKey)

	message = JSON.parse(box)
	if ("key" in message) {
		oPKey = message.key
		delete message.key
		// message = JSON.parse(message)
	}
	// console.log(typeof message)
	oPKey = keyToUint(oPKey)
	// console.log(box, oPKey, mSKey)

	for (i in message) {
		console.log(i)
		if (i.length == 32) {
			var nonce = i;
			box = message[i]
		}
	}
	// console.log(box, oPKey, mSKey)
	box = nacl.util.decodeBase64(box)
	nonce = nacl.util.decodeBase64(nonce)
	// console.log(box, nonce, oPKey, mSKey)
	if (!mSKey) {
		// secretbox (established connection)
		box = nacl.secretbox.open(box, nonce, oPKey)
	} else {
		mSKey = keyToUint(mSKey)
		box = nacl.box.open(box, nonce, oPKey, mSKey)
	}
	// console.log(box, mSKey)
	box = nacl.util.encodeUTF8(box)

	// box = LZString.decompress(box)

	// console.log(box)
	return JSON.parse(box)

}

// proxy=new rtcProxy(function(){
// 	document.querySelector("#publicid").textContent=proxy.localID

// })