//~ First user login. We inform the user that he/she is the administrator of
//~ this node. 
peerFeed.admin = {}

peerFeed.requestAccount = function() {
	mypeerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)

	Base58.decode(peerFeedIDs[i]).subarray(0, 32)
	var doc = {
		"_id": mypeerFeedID,
		"cipher": cipherWord,
		"nonce": adminNonce
	};
	$.couch.db("requests").saveDoc(doc, {
		success: function(data) {
			console.log(data);
		},
		error: function(status) {
			console.log(status);
		}
	});

}

peerFeed.admin.createUser = function(data) {
	peerFeedID = data[0];
	username = data[1]
	callback = data[2]
	userPublicKey = Base58.decode(peerFeedID).subarray(0, 32)
	credentials = peerFeed.util.getRandomCredentials()
	$.couch.db("s-" + peerFeedID.toLowerCase()).create({
		success: function(data) {
			console.log(data);
		}
	});
	$.couch.db("p-" + peerFeedID.toLowerCase()).create({
		success: function(data) {
			console.log(data);
		}
	});
	if (username) {
		doc = {
			_id: username,
			peerNode: peerFeed.peerNode,
			peerFeedID: peerFeedID
		}
		console.log(doc)
		$.couch.db("nodeusers").saveDoc(doc, {
			success: function(data) {
				console.log(data);
			},
			error: function(status) {
				console.log(status);
			}
		});

	}
	nonce = peerFeed.crypto.getNonce()
	cipherWord = nacl.box(nacl.util.decodeUTF8(credentials), nonce, userPublicKey, peerFeed.admin.adminKeyPair.secretKey)
	cipherWord = nacl.util.encodeBase64(cipherWord)
	nonce = nacl.util.encodeBase64(nonce)
	var doc = {
		_id: numit(peerFeedID),
		peerFeedID: peerFeedID
	}

	$.couch.db("nodeusers").saveDoc(doc)
	var doc = {
		"_id": peerFeedID,
		"cipher": cipherWord,
		"nonce": nonce
	};
	$.couch.db("credentials").saveDoc(doc, {
		success: function(data) {
			console.log(data);
			couchName = credentials.substring(0, credentials.length / 2)
			couchPassword = credentials.substring(credentials.length / 2)
			peerFeed.admin.secureDBandSignUp(couchName, couchPassword, peerFeedID, callback);
		},
		error: function(status) {
			console.log(status);
		}
	});
}

peerFeed.admin.login = function(callback) {

	adminpeerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)

	adminSeed = peerFeed.admin.seed
	peerFeed.admin.adminKeyPair = nacl.box.keyPair.fromSecretKey(adminSeed)
	$.couch.db("credentials").openDoc("admin", {
		success: function(data) {

			cipher = nacl.util.decodeBase64(data.cipher)
			nonce = nacl.util.decodeBase64(data.nonce)
			console.log(data);
			credentials = nacl.box.open(cipher, nonce, peerFeed.admin.adminKeyPair.publicKey, peerFeed.admin.adminKeyPair.secretKey)
			credentials = nacl.util.encodeUTF8(credentials)
			console.log(credentials)
			adminName = credentials.substring(0, credentials.length / 2)
			adminPassword = credentials.substring(credentials.length / 2)
			$.couch.login({
				name: adminName,
				password: adminPassword,
				success: function(data) {
					console.log(data);
					callback.func(callback.data)
				},
				error: function(status) {
					console.log(status);
				}
			});

		},
		error: function(status) {
			console.log(status);
		}
	});

}
peerFeed.admin.addInvitations = function(data) {
	codes = data[0]
	callback = data[1].func
	docs = []
	for (i in codes) {
		docs.push({
			_id: codes[i]
		})
	}
	$.couch.db("invitations").bulkSave({
		"docs": docs
	}, {
		success: function(data) {
			console.log(data);
		},
		error: function(status) {
			console.log(status);
		}
	});
}

peerFeed.admin.logout = function(data) {
	$.couch.logout({
		success: function(data) {
			console.log(data);
			peerFeed.session.login()
		}
	});

}

peerFeed.admin.bootstrapNode = function(data) {
	adminUser = data[0]
	callback = data[1]
	//create requests db and credential db 
	no_update = {
		"_id": "_design/no_update",
		"language": "javascript",
		"validate_doc_update": "function(newDoc, oldDoc, userCtx) {   if(newDoc._deleted && userCtx.roles.indexOf('_admin')==-1){throw({forbidden : 'you are not allowed !' });}}",
		"filters": {
			"new": "function(doc, req) { if(!doc.deleted) { return true; }else { return false; }}"
		}
	}
	security = {
		"_id": "_security",
		"admins": {
			"names": [],
			"roles": []
		},
		"readers": {
			"names": [],
			"roles": []
		}
	}
	securityadmin = {
		"_id": "_security",
		"admins": {
			"names": [],
			"roles": ["admins"]
		},
		"readers": {
			"names": [],
			"roles": ["admins"]
		}
	}
	$.couch.db("invitations").saveDoc(securityadmin, {
		success: function(data) {
			console.log(data);

		}
	})
	$.couch.db("accountrequests").saveDoc(no_update, {
		success: function(data) {
			console.log(data);
			security.admins.names.push(adminUser)
			$.couch.db("nodeusers").saveDoc(security, {
				success: function(data) {
					console.log(data);
					callback.func(callback.data)
				}
			})
		}
	})

}
//~ public db no update validate function
peerFeed.admin.secureDBandSignUp = function(couchUser, couchPassword, peerFeedID, callback) {
	var userDoc = {
		_id: "org.couchdb.user:" + couchUser,
		name: couchUser,
		roles: [],
		peerFeedID: peerFeedID
	};
	var no_update = {
		"_id": "_design/no_update",
		"language": "javascript",
		"validate_doc_update": "function(newDoc, oldDoc, userCtx,secObj) { if(newDoc._deleted && secObj.admins.names.indexOf(userCtx.name)==-1 ){throw({forbidden : 'you are not allowed !',user:userCtx,sec:secObj });}}"
	}
	var filter = {
		"_id": "_design/replica",
		"filters": {
			"repfilter": "function(doc,req){if(doc.share && (doc.share.indexOf(req.query.repid)!=-1 || doc.share.indexOf('*')!=-1 )){return true}else{return false}}"

		}
	}
	var securityp = {
		"_id": "_security",
		"admins": {
			"names": [couchUser],
			"roles": []
		},
		"readers": {
			"names": [],
			"roles": []
		}
	}
	var securitys = {
		"_id": "_security",
		"admins": {
			"names": [couchUser],
			"roles": []
		},
		"readers": {
			"names": [couchUser],
			"roles": []
		}
	}

	$.couch.db("p-" + peerFeedID.toLowerCase()).saveDoc(no_update, {
		success: function(data) {
			console.log(data);
			$.couch.db("p-" + peerFeedID.toLowerCase()).saveDoc(securityp, {
				success: function(data) {
					console.log(data);
					$.couch.db("s-" + peerFeedID.toLowerCase()).saveDoc(securitys, {
						success: function(data) {
							console.log(data);
							$.couch.db("s-" + peerFeedID.toLowerCase()).saveDoc(filter, {
								success: function(data) {
									console.log(data);
									$.couch.signup(userDoc, couchPassword, {
										success: function(data) {
											console.log(data);
											callback.func(callback.data)
										},
										error: function(status) {
											console.log(status);
										}
									});
								}
							})
						}
					})
				}
			})
		}
	})

}

peerFeed.login = function(user) {
	peerFeed.crypto.getKeyPair(user.password, user.name, function(keyPair) {
		peerFeed.session.keys = keyPair
		peerFeed.session.keyPairReady = true
		peerFeed.domain = $scope.user.domain
		// Keep polling until we have a key pair
		var keyReadyInterval = setInterval(function() {
			if (peerFeed.session.keyPairReady) {
				clearInterval(keyReadyInterval)
				var mypeerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
				var simpleID = mypeerFeedID.toLowerCase()
				console.log(simpleID)
				$.couch.urlPrefix = user.domain;
				peerFeed.session.connected = false
				$.couch.db("p-" + simpleID).info({
					success: function(data) {
						console.log(data);
						peerFeed.session.login()
						var dbReadyInterval = setInterval(function() {
							if (peerFeed.session.connected == "ready") {
								clearInterval(dbReadyInterval);
								console.log("connected")
							} else if (peerFeed.session.connected == "noprofile") {
								console.log("connected")
								clearInterval(dbReadyInterval);
							}
						}, 500)

					},
					error: function(data) {
						console.log(data)
						console.log('Email or Password not right');
					}
				});
			}
		}, 200)
	})
}

function numit(str) {
	var str
	var char
	var hash = 0;
	if (str.length == 0) return hash;
	for (var j = 0; j < str.length; j++) {
		char = str.charCodeAt(j);
		
		hash = hash + char;
		
	}
	return hash.toString();
}