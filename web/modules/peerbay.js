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
    this.settings = {
        data: {}
    }
    this.mySettings = {}
        // this.fileClient = new WebTorrent()
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

    function onInitFs(fs) {
        console.log('Opened file system: ' + fs.name);
        self.fs = fs;
        fs.root.getDirectory('Private', {
            create: true
        }, function(dir) {
            self.privDir = dir
        })
        fs.root.getDirectory('Public', {
            create: true
        }, function(dir) {
            self.pubDir = dir
        })

    }

    function errorHandler(e) {
        console.log('Error: ' + e.name);
    }
    // if (navigator.webkitTemporaryStorage) {
    //     navigator.webkitTemporaryStorage.requestQuota(2048 * 1024, function(grantedBytes) {
    //         console.log(grantedBytes)
    window.requestFileSystem(window.TEMPORARY, 100 * 2048 * 1024, onInitFs, errorHandler);
    // }, function(e) {
    //     console.log('Error', e);
    // });

    // } else {
    //     window.requestFileSystem(PERSISTENT, 2048 * 1024, onInitFs, errorHandler);
    // }
    return new Promise(function(resolve, reject) {
        if (onion) {
            self.onion = onion
            console.log(onion)
            var keyReadyInterval = setInterval(function() {
                if (!onion.waiting) {
                    clearInterval(keyReadyInterval)
                    resolve(self)
                }
            }, 500)
        } else {
            self.onion = new Onion()
             var keyReadyInterval = setInterval(function() {
                if (!onion.waiting) {
                    clearInterval(keyReadyInterval)
                    resolve(self)
                }
            }, 500)
            // self.onion.onready = function() {
            //     console.log("ready2")

            //     resolve(self)
            // }
        }


    })



}

Feed.prototype = {
    onlineUsers: function(callback) {
        this.onion.subscribe("onlineUsers", callback)

    },
    storeFiles: function(lfFiles) {
        var self = this;
        console.log(lfFiles)
        return new Promise(function(resolve, reject) {
            var files = {}
            var idx = 0
            lfFiles.forEach(function(lfFile) {
                lfFile.lfFile.hash = nacl.util.encodeBase64(nacl.hash(nacl.util.decodeUTF8(lfFile.lfDataUrl)))
                lfFile.lfFile.hash = lfFile.lfFile.hash.split("/").join("")
                self.storeFile(lfFile.lfFile).then(function(infohash) {
                    console.log(i)
                    type = typeof files[lfFile.lfProperty]
                    switch (type) {
                        case "undefined":
                            files[lfFile.lfProperty] = infohash
                            break;
                        case "string":
                            if (files[lfFile.lfProperty] != infohash) {
                                files[lfFile.lfProperty] = [files[lfFile.lfProperty], infohash]
                            }
                            break;
                        case "object":
                            if (files[lfFile.lfProperty].indexOf(infohash) == -1) {
                                files[lfFile.lfProperty].push(infohash)
                            }
                            break;
                    }
                    idx++;
                    if (idx == lfFiles.length) {
                        resolve(files)
                    }
                })


            })
        })
    },
    getFile: function(infohash) {
        var self = this;

        return new Promise(function(resolve, reject) {

            self.privDir.getFile(infohash, {
                create: false
            }, function(fileEntry) {
                resolve(fileEntry.toURL())
            }, function(err) {
                console.log(err.name)
                var chunkSize = 10000;

                self.onion.call("getFileSize", [infohash]).then(function(size) {

                    console.log(size)
                        // if (!size) resolve(size)
                    var file = ""
                    var appendFile = function(offset) {
                        // if (size < offset){offset=size}

                        if (offset >= size) {
                            self.saveFileToDisk(infohash, file).then(function(fslink) {
                                resolve(fslink)
                            })
                            return;
                        }

                        if ((offset + chunkSize) > size) chunkSize = size - offset
                        console.log(offset, chunkSize, size)
                        self.onion.call("getFile", [infohash, offset, chunkSize]).then(function(chunk) {
                            if (typeof chunk == "object") {
                                resolve(chunk.error)
                            }
                            file += chunk
                            console.log("file size ", file.length, size)
                            if (file.length == size) {
                                self.saveFileToDisk(infohash, file).then(function(fslink) {
                                    resolve(fslink)
                                })

                                // console.log(file)
                                // return;
                            } else {
                                appendFile(offset + chunkSize)
                            }
                        })
                    }
                    appendFile(0)

                })



            });


        })

    },
    saveFileToDisk: function(infohash, file) {
        var self = this;
        return new Promise(function(resolve, reject) {
            self.privDir.getFile(infohash, {
                create: true
            }, function(fileEntry) {
                // Create a FileWriter object for our FileEntry (log.txt).
                fileEntry.createWriter(function(fileWriter) {

                    fileWriter.onwriteend = function(e) {
                        console.log('Write completed.');
                        resolve(fileEntry.toURL())
                    };
                    fileWriter.onerror = function(e) {
                        console.log('Write failed: ' + e.toString());
                    };
                    blobUtil.binaryStringToBlob(file).then(function(blob) {
                        fileWriter.write(blob);
                    }).catch(function(err) {
                        console.log(err)
                    });




                }, function(e) {
                    console.log(e.name)
                });
            }, function(e) {
                console.log(e.name)
            });
        })
    },
    getArticle: function(link) {
        var self = this;
        return new Promise(function(resolve, reject) {
            self.onion.call("getArticle", [link]).then(function(ans) {
                resolve(ans)
            })
        })
    },
    storeFile: function(file) {
        var self = this;
        console.log(file.size)
        return new Promise(function(resolve, reject) {
            var infohash = file.hash
            self.privDir.getFile(infohash, {
                create: true
            }, function(fileEntry) {
                // Create a FileWriter object for our FileEntry (log.txt).
                fileEntry.createWriter(function(fileWriter) {

                    fileWriter.onwriteend = function(e) {
                        console.log('Write completed.');
                    };
                    fileWriter.onerror = function(e) {
                        console.log('Write failed: ' + e.toString());
                    };

                    fileWriter.write(file);


                }, function(e) {
                    console.log(e.name)
                });
            }, function(e) {
                console.log(e.name)
            });

            var chunkSize = 10000;
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
    getRssFeeds: function(rssLinks) {
        console.log(rssLinks)

        var self = this;
        return new Promise(function(resolve, reject) {
            self.onion.call("getRssFeeds", rssLinks).then(function(articles) {
                resolve(articles)
            })

        })
    },
    getNewRequests: function() {
        var self = this
        console.log("get requests")
        return new Promise(function(resolve, reject) {
            self.onion.call("getNewRequestsIds", [self.signKey]).then(function(newRequestsIds) {
                console.log(newRequestsIds)
                signedIDs = []
                newRequestsIds.forEach(function(reqid) {
                    signedIDs.push(nacl.util.encodeBase64(nacl.sign(nacl.util.decodeUTF8(reqid), self.signKeys.secretKey)))
                })
                getReqDoc = {
                    "key": self.signKey,
                    "docids": signedIDs
                }
                self.onion.call("getRequests", [getReqDoc]).then(function(requests) {
                    var reqDocs = []
                    console.log(requests)
                    requests.forEach(function(req) {
                        doc = self.decryptDoc(req)
                        console.log(doc)
                        if (self.validateDoc(doc.data)) {
                            reqDoc = JSON.parse(doc.data.doc)
                            reqDoc.from = doc.data.key
                            reqDoc._id = doc._id
                            reqDoc._rev = doc._rev
                            reqDocs.push(reqDoc)


                        } else {
                            console.log("unverifiable request")
                        }

                    })

                    resolve(reqDocs)

                })
            })
        })
    },
    validateDoc: function(signedDoc) {
        d = nacl.util.decodeUTF8(signedDoc.doc)
        s = nacl.util.decodeBase64(signedDoc.signature)
        k = Base58.decode(signedDoc.key).subarray(0, 32)
        return nacl.sign.detached.verify(d, s, k)
    },
    sendRequest: function(to, reqData) {
        var self = this;
        this.getBoxKeys([to]).then(function(boxkeys) {

            var req = {
                "key": to,
                "request": self.encryptDoc({
                    share: [boxkeys[0].value],
                    data: self.signDoc({
                        "data": reqData
                    })
                })
            }
            console.log(reqData)
            self.onion.call("addRequest", [req]).then(function(ans) {
                console.log(ans)
            })

        })

    },
    getBoxKeys: function(feedIDs) {
        return new Promise(function(resolve, reject) {
            this.onion.call("getBoxKeys", feedIDs).then(function(ans) {
                resolve(ans)
            })
        })
    },
    createPublicGroup: function(groupData) {
        // group encryption is public key signing
        // group data are signed only and public
        // group post are public key signed
        // other then that group rules applied
        admins = groupData.admins





    },
    createPrivateChat: function(feedIDs) {
        // one to (one | many) chat rooms
        // private group rules applied 



    },
    createPrivateGroup: function(groupData) {
        var self = this;

        return new Promise(function(resolve, reject) {
            var groupAdminKeys = nacl.sign.keyPair()
            var groupAdminSecret = nacl.util.encodeBase64(groupAdminKeys.secretKey)
            var groupID = peerFeed.crypto.getpeerFeedID(groupAdminKeys.publicKey)
            var groupUserKeys = nacl.sign.keyPair()
            var groupSecret = nacl.util.encodeBase64(groupUserKeys.secretKey.subarray(0, 32))
                // _id:groupID,
            if (typeof groupData == "string") {
                groupData = {
                    name: groupData,
                    users: []
                }
            }
            var groupDoc = {
                name: groupData.name,
                info: groupData.info,
                admins: [self.signKey],
                users: [],
                secret: groupSecret
            }
            for (j in groupData.users) {
                groupDoc.users.push(groupData.users[j].id)

            }
            if (groupDoc.users.indexOf(self.signKey) == -1) {
                groupDoc.users.push(self.signKey)
            }

            if (groupData.files) {
                self.storeFiles(groupData.files).then(function(files) {
                    for (key in files) groupDoc[key] = files[key]
                    var doc = {
                        _id: groupID,
                        data: groupDoc
                    }
                    self.onion.call("putwithid", [self.signDoc(self.encryptDoc(doc, groupUserKeys.secretKey.subarray(0, 32)), groupAdminKeys)]).then(function(answer) {
                        resolve(answer)
                    })
                    self.addSettingValue("groups", [groupAdminSecret, groupSecret]).then(function(a) {
                        console.log(a)
                    })
                    groupDoc.users.forEach(function(user) {
                        if (user !== self.signKey) {
                            self.inviteToGroup(user, doc)
                        }

                    })
                })
            } else {
                var doc = {
                    _id: groupID,
                    data: groupDoc
                }
                self.onion.call("putwithid", [self.signDoc(self.encryptDoc(doc, groupUserKeys.secretKey.subarray(0, 32)), groupAdminKeys)]).then(function(answer) {
                    resolve(answer)
                })
                self.addSettingValue("groups", [groupAdminSecret, groupSecret]).then(function(a) {
                    console.log(a)
                })
                groupDoc.users.forEach(function(user) {
                    if (user !== self.signKey) {
                        self.inviteToGroup(user, doc)
                    }

                })
            }
        })
    },
    inviteToGroup: function(peerID, group) {
        if (peerID && group) {
            var self = this;
            console.log("invite ", peerID, group.data.name)
            group.data.users.push(peerID)
            var doc = {
                _id: group._id,
                _rev: group._rev,
                data: group.data
            }
            self.onion.call("putwithid", [self.signDoc(self.encryptDoc(doc, group.secret), group.admin)]).then(function(answer) {
                console.log(answer)
            })
            this.sendRequest(peerID, {
                "type": "groupInvite",
                "name": group.data.name,
                "info": group.data.info,
                "groupID": group._id,
                "secret": group.data.secret
            })

        }
    },
    acceptGroupInvitation: function(group) {
        this.addSettingValue("groups", [group.data.groupID, group.data.secret]).then(function(a) {
            console.log(a)
        })
        this.deleteRequest(group)
    },
    deleteRequest: function(req) {
        console.log("delete", req)
        var self = this;
        this.onion.call("deleteRequest", [{
            key: self.signKey,
            sign: nacl.util.encodeBase64(nacl.sign(nacl.util.decodeUTF8(req._id), self.signKeys.secretKey)),
            rev: req._rev
        }]).then(function(res) {
            console.log(res)
        })
    },

    getGroupsInfo: function(groupKeys) {
        var self = this;
        console.log(groupKeys)
        return new Promise(function(resolve, reject) {
            var groupAdmin = {}
            var groupIDs = []
            var groupSecrets = {}
            var settingValues = {}
            for (i in groupKeys) {
                if (typeof groupKeys[i] == "string") groupKeys[i] = JSON.parse(groupKeys[i])
                if (groupKeys[i][0].length == 88) {
                    groupID = peerFeed.crypto.getpeerFeedID(nacl.util.decodeBase64(groupKeys[i][0]).subarray(32, 64))
                    groupAdmin[groupID] = nacl.sign.keyPair.fromSeed(nacl.util.decodeBase64(groupKeys[i][0]).subarray(0, 32))
                    groupIDs.push(groupID)
                    groupSecrets[groupID] = nacl.util.decodeBase64(groupKeys[i][1])
                    settingValues[groupID] = groupKeys[i]
                } else {
                    groupIDs.push(groupKeys[i][0])
                    settingValues[groupKeys[i][0]] = groupKeys[i]
                    groupSecrets[groupKeys[i][0]] = nacl.util.decodeBase64(groupKeys[i][1])
                }

            }
            self.get(groupIDs).then(function(groups) {
                console.log(groups)
                var datagroups = []
                for (i in groups) {
                    datagroup = self.decryptDoc(groups[i], groupSecrets[groups[i]._id])
                    if (datagroup._id in groupAdmin) {
                        datagroup.admin = groupAdmin[datagroup._id]
                    }

                    datagroup.secret = groupSecrets[groups[i]._id]
                    datagroup.signKeys = nacl.sign.keyPair.fromSeed(datagroup.secret)
                    datagroup.settingvalue = settingValues[groups[i]._id]
                    datagroup.feedID = peerFeed.crypto.getpeerFeedID(datagroup.signKeys.publicKey)
                    datagroups.push(datagroup)
                }
                resolve(datagroups)
            })
        })
    },
    groupPost: function(group, post) {
        var self = this;
        return new Promise(function(resolve, reject) {
            if (post.files && post.files.length) {
                self.storeFiles(post.files).then(function(files) {
                    for (key in files) {
                        if (typeof files[key] == "object") {
                            post[key] = files[key]
                        } else {
                            post[key] = [files[key]]
                        }
                    }
                    delete post.files
                    post = self.signDoc(post)

                    post = self.encryptDoc({
                        data: post
                    }, group.secret)

                    post = self.signDoc(post, group.signKeys)

                    self.onion.call("put", [post]).then(function(ans) {
                        resolve(ans)
                    })
                })
            } else {
                post = self.signDoc(post)

                post = self.encryptDoc({
                    data: post
                }, group.secret)

                post = self.signDoc(post, group.signKeys)

                self.onion.call("put", [post]).then(function(ans) {
                    resolve(ans)
                })

                delete post.files

            }


        })
    },

    getGroupFeed: function(group, before) {
        var self = this
        console.log("getting group", group.feedID, before)

        return new Promise(function(resolve, reject) {
            self.onion.call("getFeed", [group.feedID, before]).then(function(docs) {
                console.log(docs)
                docs.forEach(function(doc, i, theDocs) {
                    doc = decryptDoc(doc, group.secret)
                    console.log(doc)
                    doc.date = doc._id.split("-")[1]
                    doc.feedID = doc._id.split("-")[0]
                    theDocs[i] = doc;
                })

                resolve(docs)
            })

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
                self.storeFiles(profile.files).then(function(files) {
                    for (key in files) profile[key] = files[key]
                    delete profile.files
                    self.onion.call("putwithid", [self.signDoc(profile)]).then(function(answer) {
                        resolve(answer)
                    })
                })

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
                    console.log("creating settings")
                    var settings = {
                        _id: self.boxSignKey,
                        data: {
                            creationDate: Date.now()
                        }
                    }
                    var doc = self.signDoc(self.encryptDoc(settings), self.boxSignKeys)

                    self.onion.call("putwithid", [doc]).then(function(ans) {
                        console.log(ans)
                        self.settings = settings
                        self.settings._id = ans.id
                        self.settings._rev = ans.rev
                        resolve(self.settings)
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

                    doc.date = doc._id.split("-")[1]
                    doc.feedID = doc._id.split("-")[0]
                    theDocs[i] = doc;
                })

                resolve(docs)
            })

        })
    },
    getTagDocIds: function(tag, before) {
        var self = this
            // console.log("getting", feedID, before)

        return new Promise(function(resolve, reject) {
            self.onion.call("tag", [tag, before]).then(function(docs) {
                resolve(docs)
            })

        })

    },
    getFeedDocIds: function(feedID, before) {
        var self = this
            // console.log("getting", feedID, before)

        return new Promise(function(resolve, reject) {
            self.onion.call("getFeedDocIds", [feedID, before]).then(function(docs) {
                // console.log(docs)
                idx = docs.indexOf(feedID)
                docs.splice(idx, idx)
                    // docs.forEach(function(docid, i, theDocs) {
                    //     doc = {}
                    //     doc._id=docid
                    //     doc.date = docid.split("-")[1]
                    //     doc.feedID = docid.split("-")[0]
                    //     theDocs[i] = doc;
                    // })


                resolve(docs)
            })

        })
    },

    addSettingValue: function(setting, value) {
        var self = this;
        if (typeof value !== "string") value = JSON.stringify(value)
        return new Promise(function(resolve, reject) {
            if (!self.mySettings[setting]) {
                var sets = {
                    data: [value]
                }
                console.log("new setting property", setting)
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
                console.log("add ", value, " to ", setting)
                if (self.mySettings[setting].data.indexOf(value) == -1) {
                    self.mySettings[setting].data.push(value)


                    self.onion.call("putwithid", [self.signDoc(self.encryptDoc(self.mySettings[setting]), self.boxSignKeys)]).then(function(ans) {
                        console.log(ans)
                        self.mySettings[setting]._rev = ans.rev
                        resolve(self.mySettings[setting])
                    })
                }
            }
        })
    },
    removeSettingValue: function(setting, value) {
        var self = this;
        if (typeof value != "string") value = JSON.stringify(value)
        return new Promise(function(resolve, reject) {
            spot = self.mySettings[setting].data.indexOf(value)
            console.log("removing")
            self.mySettings[setting].data.splice(spot, spot)
            self.onion.call("putwithid", [self.signDoc(self.encryptDoc(self.mySettings[setting]), self.boxSignKeys)]).then(function(ans) {
                console.log(ans)
                self.mySettings[setting]._rev = ans.rev
                resolve(self.mySettings[setting])
            })
        })
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
            if (post.files && post.files.length) {
                self.storeFiles(post.files).then(function(files) {
                    for (key in files) {
                        if (typeof files[key] == "object") {
                            post[key] = files[key]
                        } else {
                            post[key] = [files[key]]
                        }
                    }
                    delete post.files
                    self.onion.call("put", [self.signDoc(post, keys)]).then(function(answer) {
                        resolve(answer)
                    })
                })

            } else {
                delete post.files
                self.onion.call("put", [self.signDoc(post, keys)]).then(function(answer) {
                    resolve(answer)
                })
            }
        })
    },
    search: function(query) {
        var self = this
        if (query.startsWith("@")) {
            return new Promise(function(resolve, reject) {
                self.onion.call("handles", [query.slice(1)]).then(function(results) {
                    // console.log(results)
                    results.forEach(function(doc, idx, theDocs) {
                        theDocs[idx] = doc.value
                        theDocs[idx]["handle"] = doc.key
                    })
                    resolve(results)
                })
            })

        } else if (query.startsWith("#")) {
            return new Promise(function(resolve, reject) {
                self.onion.call("queryTags", [query.slice(1)]).then(function(results) {
                        console.log(results)

                        results.forEach(function(doc, idx, theDocs) {
                            theDocs[idx] = {
                                count: doc.value,
                                tag: doc.key[0]
                            }
                        })
                        resolve(results)
                    })
                    // resolve([])
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

            callback(docid)
        })
    },
    belongsTo: function(postid) {
        var self = this;
        return new Promise(function(resolve, reject) {
            console.log("belongsto", postid)
            self.onion.call("belongsTo", [postid]).then(function(ansids) {

                resolve(ansids)
            })

        })
    },

    encryptDoc: function(doc, keys) {
        var header = {}
        header._id = doc._id
        header._rev = doc._rev
        if (keys && typeof(keys) === "object" && "byteLength" in keys) {
            data = nacl.util.decodeUTF8(JSON.stringify(doc.data))
            nonce = peerFeed.crypto.getNonce()
            header[nacl.util.encodeBase64(nonce)] = nacl.util.encodeBase64(nacl.secretbox(data, nonce, keys))
            return header
        }
        mypeerFeedID = this.boxKey
        if (doc.share) {
            // console.log("encrypting :", doc, " for ", doc.share)
            // share to peerfeedids
            if (doc.share.indexOf(mypeerFeedID) == -1) {
                doc.share.push(mypeerFeedID)
            }
            doc = {
                to: doc.share,
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
        // console.log("decrypt " + header._id)

        if (keys) {
            if ("secretKey" in keys) {
                // console.log(keys)
                var mySecretKey = keys.secretKey
                var mypeerFeedID = peerFeed.crypto.getpeerFeedID(keys.publicKey)
            } else {
                //secretbox encryption
                for (i in header) {
                    if (i.length == 32) {
                        nonce = nacl.util.decodeBase64(i)
                        cipher = nacl.util.decodeBase64(header[i])
                        text = nacl.secretbox.open(cipher, nonce, keys)
                        text = nacl.util.encodeUTF8(text)
                        console.log(text)
                        text = JSON.parse(text)
                        return {
                            _id: header._id,
                            _rev: header._rev,
                            data: text
                        }

                    }
                }
            }
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
