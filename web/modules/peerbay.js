// subscribe and call functions available
var onion = new Onion()

function Feed(boxKeys, signKeys) {
    var self = this
    this.signKey = peerFeed.crypto.getpeerFeedID(signKeys.publicKey)
    this.signKeys = signKeys
    this.boxKeys = boxKeys
    this.boxKey = peerFeed.crypto.getpeerFeedID(boxKeys.publicKey)
    this.boxSignKeys = nacl.sign.keyPair.fromSeed(nacl.scalarMult(boxKeys.secretKey, signKeys.secretKey.subarray(0, 32)))
    this.boxSignKey = peerFeed.crypto.getpeerFeedID(this.boxSignKeys.publicKey)
    this.settings = {}
    this.mySettings = {}
        // this.fileClient = new WebTorrent()
    return new Promise(function(resolve, reject) {
        if (onion) {
            self.onion = onion
            if (!onion.waiting) {
                resolve(self)
            } else {
                self.onion.onready = function() {
                    resolve(self)
                }
            }
        } else {
            self.onion = new Onion()
            self.onion.onready = function() {
                resolve(self)
            }
        }


    })



}

Feed.prototype = {
    storeFiles: function(lfFiles) {
        var self = this;
        return new Promise(function(resolve, reject) {
            var files = {}
            var idx = 0
            for (i in lfFiles) {
                lfFiles[i].lfFile.hash = nacl.util.encodeBase64(nacl.hash(nacl.util.decodeUTF8(lfFiles[i].lfDataUrl)))
                self.storeFile(lfFiles[i].lfFile).then(function(infohash) {
                    console.log(i)
                    type = typeof files[lfFiles[i].lfProperty]
                    switch (type) {
                        case "undefined":
                            files[lfFiles[i].lfProperty] = infohash
                            break;
                        case "string":
                            files[lfFiles[i].lfProperty] = [files[lfFiles[i].lfProperty], infohash]
                        case "object":
                            files[lfFiles[i].lfProperty].push(infohash)
                    }
                    idx++;
                    if (idx == lfFiles.length) {
                        resolve(files)
                    }
                })
            }
        })
    },
    getFile: function(infohash) {
        var self = this;

        return new Promise(function(resolve, reject) {


            var chunkSize = 15384;
            self.onion.call("getFileSize", [infohash]).then(function(size) {
                if (!size) resolve(null)
                console.log(size)
                var file = ""
                var appendFile = function(offset) {
                    // if (size < offset){offset=size}

                    if (offset >= size) {
                        resolve("data:image/png;base64,"+btoa(file))
                        return;
                    }

                    if ((offset + chunkSize) > size) chunkSize = size - offset
                    console.log(offset, chunkSize, size)
                    self.onion.call("getFile", [infohash, offset, chunkSize]).then(function(chunk) {
                        file += chunk
                        console.log("file size ",file.length,size)
                        if (file.length==size) {
                            resolve("data:image/png;base64,"+btoa(file))
                            return;
                        }
                        appendFile(offset + chunkSize)
                    })
                }
                appendFile(0)

            })


        })

    },
    storeFile: function(file) {
        var self = this;
        console.log(file.size)
        return new Promise(function(resolve, reject) {




            var infohash = file.hash

            var chunkSize = 15384;
            self.onion.call("storeFile", [{
                infohash: infohash,
                size: file.size,
                name: file.name
            }]).then(function(ans) {
                console.log(ans)
                var sliceFile = function(offset) {
                    console.log(offset)
                    var reader = new window.FileReader();
                    reader.onload = (function() {
                        return function(e) {

                            self.onion.call("storeFile", [{
                                infohash: infohash,
                                slice: e.target.result,
                                offset: offset
                            }]).then(function(answer) {
                                if (file.size > offset + e.target.result.length) {
                                    window.setTimeout(sliceFile, 0, offset + chunkSize);
                                }
                                console.log(offset + e.target.result.length);
                                if (answer.seed) {
                                    resolve(answer.seed)
                                }
                            })
                        };
                    })(file);
                    var slice = file.slice(offset, offset + chunkSize);
                    reader.readAsBinaryString(slice);
                };
                sliceFile(0);
            })
        })





        // send pieces to server with onion call(file,[infohash,piece,index])
        // server seeds the file and asks for 2 or more 
        // online users to seed based on popularity and size
        // files can be unsigned, signed or 
        // encrypted(for groups)
        function sendPiece(piece, index) {
            // onion call(file,[infohash,piece,index]).then(function(){
            // piece=file.slice(index,PIECE_SIZE)
            // check file size to determine 
            // sendPiece(piece,index+1)
            // when finished server should return verification
            // })
        }
    },
    sendRequest: function() {},
    createPublicGroup: function(groupData) {
        // group encryption is public key signing
        // group data are signed only and public
        // group post are public key signed
        // other then that group rules applied
    },
    createPrivateChat: function(feedIDs) {
        // one to (one | many) chat rooms
        // private group rules applied 
    },
    createPrivateGroup: function(groupData) {
        if (groupData.admins) {
            groupData.admins.push(self.signKey)
        } else {
            groupData.admins = [self.signKey]
        }
        if (groupData.users) {
            groupData.users.push(self.signKey)
        } else {
            groupData.users = [self.signKey]
        }
        groupKeys = nacl.sign.keyPair()
        groupKey = peerFeed.crypto.getpeerFeedID(groupKeys.publicKey)

        groupSecret = groupKeys.secretKey.subarray(0, 32)
        groupData = JSON.stringify(groupData)
        groupData = nacl.util.decodeUTF8(groupData)
        nonce = peerFeed.crypto.getNonce()
        groupData = nacl.secretbox(groupData, nonce, groupSecret)
        data = {
            _id: groupKey
        }
        data[nacl.util.encodeBase64(nonce)] = nacl.util.encodeBase64(groupData)

        // signature = nacl.sign.detached(nacl.util.decodeUTF8(JSON.stringify(doc)), groupKeys.secretKey)
        // signature = nacl.util.encodeBase64(signature)
        // doc = {
        //     "key": groupKey,
        //     "doc": groupData,
        //     "signature": signature
        // }
        self.onion.call("putwithid", [self.signDoc(data, groupKeys)]).then(function(ans) {
            console.log(ans)
        })
        this.addSettingValue("groups", groupSecret).then(function(a) {
            console.log(a)
        })
    },

    createProfile: function(profile) {
        // create two docs
        // public profile signid (stores public signed info about user)
        // private settings boxid (stores private encrypted settings of the user)
        var self = this
        return new Promise(function(resolve, reject) {
            if (!profile._id) {
                profile._id = self.signKey
            }
            if (!profile.boxKey) {
                profile.boxKey = self.boxKey
            }
            if (profile.files) {

                for (i in profile.files) {
                    self.storeFiles(profile.files).then(function(files) {
                        for (key in files) profile[key] = files[key]
                        delete profile.files
                        self.onion.call("putwithid", [self.signDoc(profile)]).then(function(answer) {
                            resolve(answer)
                        })
                    })
                }
            } else {


                self.onion.call("putwithid", [self.signDoc(profile)]).then(function(answer) {
                    resolve(answer)
                })
            }
        })
    },
    signDoc: function(doc, signKeys) {
        if (signKeys) {
            signKey = peerFeed.crypto.getpeerFeedID(signKeys.publicKey)
        } else {
            signKeys = this.signKeys
            signKey = this.signKey
        }
        doc = JSON.stringify(doc)
        signature = nacl.sign.detached(nacl.util.decodeUTF8(doc), signKeys.secretKey)
        signature = nacl.util.encodeBase64(signature)
        return {
            signature: signature,
            doc: doc,
            key: signKey
        }


    },
    getSettings: function() {
        var self = this
        return new Promise(function(resolve, reject) {
            self.get([self.boxSignKey]).then(function(settings) {
                console.log("settings:", settings)
                if (settings.length == 0) {
                    settings = {
                        _id: self.boxSignKey,
                        data: {
                            creationDate: Date.now()
                        }
                    }
                    var doc = {
                        signedDoc: nacl.util.encodeBase64(
                            nacl.sign(
                                nacl.util.decodeUTF8(
                                    JSON.stringify(self.encryptDoc(settings))
                                ),
                                self.boxSignKeys.secretKey)
                        ),
                        key: self.boxSignKey
                    }

                    self.onion.call("putwithid", [doc]).then(function(ans) {
                        self.settings = settings
                        self.settings._id = ans.id
                        self.settings._rev = ans.rev
                        resolve({})
                    })
                } else {
                    self.settings = self.decryptDoc(settings[0])
                    console.log(self.settings)
                    var setDocs = []
                    var docidx = {}


                    for (set in self.settings.data) {
                        if (set != "creationDate") {
                            self.mySettings[set] = {}
                            setDocs.push(self.settings.data[set])
                            docidx[self.settings.data[set]] = set
                        }
                    }
                    if (setDocs.length != 0) {
                        self.get(setDocs).then(function(ans) {
                            console.log(ans)
                            ans.forEach(function(setDoc) {
                                self.mySettings[docidx[setDoc._id]] = self.decryptDoc(setDoc)
                            })
                            console.log(self.mySettings)
                            resolve(self.mySettings)
                        })
                    } else {
                        resolve({})
                    }

                }
            })

        })
    },

    getFeed: function(feedID, before) {
        var self = this
        console.log("getting", feedID, before)

        return new Promise(function(resolve, reject) {
            self.onion.call("getFeed", [feedID, before]).then(function(docs) {
                console.log(docs)
                docs.forEach(function(doc, i, theDocs) {

                    doc.date = doc._id.substring(46)
                    doc.feedID = doc._id.substring(0, 46)
                    theDocs[i] = doc;
                })

                resolve(docs)
            })

        })
    },
    getFeedDocIds: function(feedID, before) {
        var self = this
        console.log("getting", feedID, before)

        return new Promise(function(resolve, reject) {
            self.onion.call("getFeedDocIds", [feedID, before]).then(function(docs) {
                // console.log(docs)
                idx = docs.indexOf(feedID)
                docs.splice(idx, idx)
                docs.forEach(function(docid, i, theDocs) {
                    doc = {}
                    doc.date = docid.substring(46)
                    doc.feedID = docid.substring(0, 46)
                    theDocs[i] = doc;
                })

                resolve(docs)
            })

        })
    },

    addSettingValue: function(setting, value) {
        var self = this;
        return new Promise(function(resolve, reject) {
            if (!self.mySettings[setting]) {
                var sets = {
                    data: [value]
                }
                self.publicPost(self.encryptDoc(sets), self.boxSignKeys).then(function(ans) {
                    self.settings.data[setting] = ans.id
                    self.mySettings[setting] = sets
                    self.mySettings[setting]._id = ans.id
                    self.mySettings[setting]._rev = ans.rev



                    self.onion.call("putwithid", [self.signDoc(self.encryptDoc(self.settings), self.boxSignKeys)]).then(function(ans) {
                        self.settings._rev = ans.rev
                        resolve(self.mySettings[setting])

                    })
                })
            } else {
                self.mySettings[setting].data.push(value)


                self.onion.call("putwithid", [self.signDoc(self.encryptDoc(self.mySettings[setting]), self.boxSignKeys)]).then(function(ans) {
                    self.mySettings[setting]._rev = ans.rev
                    resolve(self.mySettings[setting])
                })
            }
        })
    },
    removeSettingValue: function(setting, value) {

    },

    getProfile: function(feedID) {
        if (feedID) {
            return this.get([feedID])
        }
        return this.get([this.signKey])
    },
    get: function(docIds) {

        var self = this
            // console.log("getting", docIds)
        return new Promise(function(resolve, reject) {
            if (docIds[0]) {
                self.onion.call("get", docIds).then(function(docs) {
                    resolve(docs)
                })
            } else {
                resolve([])
            }


        })

    },
    publicPost: function(post, keys) {
        var self = this
        return new Promise(function(resolve, reject) {
            self.onion.call("put", [self.signDoc(post, keys)]).then(function(answer) {
                resolve(answer)
            })

        })
    },
    search: function(query) {
        var self = this
        if (query.startsWith("@")) {
            return new Promise(function(resolve, reject) {
                self.onion.call("handles", [query.slice(1)]).then(function(results) {
                    results.forEach(function(doc, idx, theDocs) {
                        theDocs[idx] = doc.value[0]
                        theDocs[idx]["handle"] = doc.key
                    })
                    resolve(results)
                })
            })

        } else if (query.startsWith("#")) {
            return new Promise(function(resolve, reject) {
                // self.onion.call("handles", query.slice(1)).then(function(results) {
                //     resolve(results)
                // })
                resolve([])
                console.log("hashtag search")
            })
        }
    },
    myWall: function() {
        // return a stream with onchange callback
    },
    follow: function(feedID, callback) {
        // return a stream with last ten posts with onchange callback and load previous ten posts function
        this.onion.subscribe(feedID, function(docid) {
            doc = {}
            doc.date = docid[0].substring(46)
            doc.feedID = docid[0].substring(0, 46)
            callback(doc)
        })
    },

    encryptDoc: function(doc) {
        var header = {}

        mypeerFeedID = this.boxKey
        header._id = doc._id
        header._rev = doc._rev
            //console.log(doc)
        if (doc.data.share) {
            // share to peerfeedids
            if (doc.data.share.indexOf(mypeerFeedID) == -1) {
                doc.data.share.push(mypeerFeedID)
            }
            doc = {
                to: doc.data.share,
                from: mypeerFeedID,
                mySecretKey: nacl.util.encodeBase64(this.boxKeys.secretKey),
                message: doc.data
            }
        } else {
            // readable only by user
            doc = {
                    to: [mypeerFeedID],
                    from: mypeerFeedID,
                    mySecretKey: nacl.util.encodeBase64(this.boxKeys.secretKey),
                    message: doc.data
                }
                //console.log(doc)
        }
        header.decryptInfo = {}
            //console.log(doc.to)
        var peerFeedIDs = doc.to
        var mypeerFeedID = doc.from
        var mySecretKey = nacl.util.decodeBase64(doc.mySecretKey)
        var message = nacl.util.decodeUTF8(JSON.stringify(doc.message))
        var messageKeypair = nacl.box.keyPair()
        var messageNonce = peerFeed.crypto.getNonce()
        var messageKey = nacl.util.encodeBase64(messageKeypair.secretKey)
        var messageHash = nacl.util.encodeBase64(nacl.hash(message))
        header.ephemeral = nacl.util.encodeBase64(messageKeypair.publicKey)
        header.cipher = nacl.util.encodeBase64(nacl.secretbox(message, messageNonce, messageKeypair.secretKey))
        var decryptInfoNonces = []
            //console.log(peerFeedIDs)
        for (var u = 0; u < peerFeedIDs.length; u++) {
            decryptInfoNonces.push(peerFeed.crypto.getNonce())
        }
        header.challenge = []
        for (var i = 0; i < peerFeedIDs.length; i++) {
            var decryptInfo = {
                senderID: mypeerFeedID,
                recipientID: peerFeedIDs[i],
                messageInfo: {
                    messageKey: messageKey,
                    messageNonce: nacl.util.encodeBase64(messageNonce),
                    messageHash: messageHash
                }
            }

            decryptInfo.messageInfo = nacl.util.encodeBase64(
                nacl.box(nacl.util.decodeUTF8(
                        JSON.stringify(decryptInfo.messageInfo)
                    ),
                    decryptInfoNonces[i],
                    Base58.decode(peerFeedIDs[i]).subarray(0, 32),
                    mySecretKey))

            decryptInfo = nacl.util.encodeBase64(nacl.box(nacl.util.decodeUTF8(JSON.stringify(decryptInfo)), decryptInfoNonces[i], Base58.decode(peerFeedIDs[i]).subarray(0, 32), messageKeypair.secretKey))
            header.decryptInfo[nacl.util.encodeBase64(decryptInfoNonces[i])] = decryptInfo
        }

        return header
    },
    decryptDoc: function(header, keys) {
        console.log("decrypt " + header._id)

        if (keys) {
            // console.log(keys)
            var mySecretKey = keys.secretKey
            var mypeerFeedID = peerFeed.crypto.getpeerFeedID(keys.publicKey)
        } else {
            var mySecretKey = this.boxKeys.secretKey
            var mypeerFeedID = this.boxKey
        }
        // do something to the document before storage
        // decrypt cipher to doc
        if (!header.hasOwnProperty('ephemeral') || !peerFeed.util.validateEphemeral(header.ephemeral)) {
            throw new Error('peerFeed: Decryption failed - could not parse header')
            return {
                "error": "Decryption failed - could not parse header"
            }
        }
        // Attempt decryptInfo decryptions until one succeeds
        var actualDecryptInfo = null
        var actualDecryptInfoNonce = null
        var actualMessageInfo = null

        for (var i in header.decryptInfo) {
            if (
                ({}).hasOwnProperty.call(header.decryptInfo, i) && peerFeed.util.validateNonce(i, 24)) {
                actualDecryptInfo = nacl.box.open(nacl.util.decodeBase64(header.decryptInfo[i]), nacl.util.decodeBase64(i), nacl.util.decodeBase64(header.ephemeral), mySecretKey)
                if (actualDecryptInfo) {
                    actualDecryptInfo = JSON.parse(nacl.util.encodeUTF8(actualDecryptInfo))
                    actualDecryptInfoNonce = nacl.util.decodeBase64(i)
                    break
                }
            }
        }
        if (!actualDecryptInfo || !({}).hasOwnProperty.call(actualDecryptInfo, 'recipientID') || actualDecryptInfo.recipientID !== mypeerFeedID) {
            throw new Error('peerFeed: Decryption failed - File is not encrypted for this recipient')
            return {
                "error": "Decryption failed - File is not encrypted for this recipient'"
            }
        }
        if (!({}).hasOwnProperty.call(actualDecryptInfo, 'messageInfo') || !({}).hasOwnProperty.call(actualDecryptInfo, 'senderID') || !peerFeed.util.validateID(actualDecryptInfo.senderID)) {
            throw new Error('peerFeed: Decryption failed - could not validate sender ID')
            return {
                "error": "Decryption failed - could not validate sender ID"
            }
        }
        try {
            actualMessageInfo = nacl.box.open(nacl.util.decodeBase64(actualDecryptInfo.messageInfo), actualDecryptInfoNonce, Base58.decode(actualDecryptInfo.senderID).subarray(0, 32), mySecretKey)
            actualMessageInfo = JSON.parse(nacl.util.encodeUTF8(actualMessageInfo))
        } catch (err) {
            throw new Error('peerFeed: Decryption failed - could not parse header')
                //~ return {"error":"Decryption failed - could not parse header"}
        }
        var data = nacl.secretbox.open(nacl.util.decodeBase64(header.cipher), nacl.util.decodeBase64(actualMessageInfo.messageNonce), nacl.util.decodeBase64(actualMessageInfo.messageKey))
        data = JSON.parse(nacl.util.encodeUTF8(data));
        if (data.messageKeypair) {
            data.messageKeypair = {
                publicKey: header.ephemeral,
                secretKey: actualMessageInfo.messageKey
            }
            data.messageNonce = actualMessageInfo.messageNonce
        }
        //console.log(doc,header)
        var doc = {
            _id: header._id,
            _rev: header._rev,
            data: data
        }


        return doc
    }


}




function getSettings() {

}

function addToFollowing(feedID) {

}

function visitPeerID(feedID) {

}



function createGroup(name, data) {

}

function inviteToGroup(userID) {

}

function acceptGroupInvite(key) {

}

function publicPost() {

}

function groupPost(key) {

}
