// Uses modified pouchdb with _prev instead of _rev to make it compatible(no conflict) with couchdb
peerFeed.session.app = {}

peerFeed.session.app.getDocs = function(data) {
    peerFeed.session.remote.secretDB.allDocs({
        keys: data.docsArray,
        include_docs: true,
        success: function(result) {
            var docs = []
            for (i in result.rows) {
                docs.push(peerFeed.decryptDoc(result.rows[i]["doc"]))
            }
            peerFeed.session.app[app]["db"].bulkDocs(docs)
                .then(function() {
                    data.success(data.app, data.key, data.operator, data.value)
                })
            console.log(result)
        },
        error: function(error) {
            console.log(error)
        }
    })


}
peerFeed.session.app.put = function(app, doc, type) {
    switch (type) {
        case "query":
            //query docs have a hashid field that must remain decrypted
            var newQueryDoc = {
                _id: app + "-query-" + (peerFeed.session.app[app]["index"]["last_query_index"] + 1),
                hashID: hashString(doc.fun.key + doc.fun.operator + doc.fun.value)
            }
            newQueryDoc = $.extend(peerFeed.encryptDoc(doc), newQueryDoc);
            peerFeed.session.remote.secretDB.saveDoc(newQueryDoc, {
                success: function(data) {
                    console.log(data);
                },
                error: function(status) {
                    console.log(status);
                }
            });
        case "doc":
            var newDoc = {
                _id: app + "-doc-" + (peerFeed.session.app[app]["index"]["last_doc_index"] + 1),
            }
            newDoc = $.extend(encryptDoc(doc), newQueryDoc);
            peerFeed.session.remote.secretDB.saveDoc(newDoc, {
                success: function(data) {
                    console.log(data);
                },
                error: function(status) {
                    console.log(status);
                }
            });
            //~ case "settings":

    }

}


//checks if value returns true on the specified field using the operator 
//it uses the pouchdb-find plugin

peerFeed.session.app.query = function(app, key, operator, value) {
    function createQuery(app, key, operator, value) {
        docIDs = peerFeed.session.app[app]["index"]["docs"]
        docsArray = []
        for (i in docIDs) {
            docsArray.push(app + "-doc-" + docIDs[i])
        }
        peerFeed.session.app.getDocs({
            app: app,
            key: key,
            operator: operator,
            value: value,
            docsArray: docsArray,
            success: function(app, key, operator, value) {
                peerFeed.session.app[app]["db"].createIndex({
                    index: {
                        fields: [key]
                    },
                    name: app + "-query-" + (peerFeed.session.app[app]["index"]["last_query_index"] + 1)
                }).then(function() {
                    query = peerFeed.session.app[app]["db"].find({
                        selector: {
                            key: {
                                operator: value
                            }
                        },
                        fields: ['_id']
                    });
                    newQueryDoc = {
                        fun: {
                            key: key,
                            operator: operator,
                            value: value
                        },
                        docs: []
                    }
                    for (i in query.docs) {
                        newQueryDoc.push(a.docs[i]['_id'])
                    }
                    peerFeed.session.app.put(app, newQueryDoc, "query")
                });
            }
        })

    }

    function queryExists(app, key, operator, value) {
        var queryIndex = peerFeed.session.app[app]["index"]["queries"]
        for (i in queryIndex) {
            if (queryIndex[i]["hashID"] == hashString(key + operator + value)) {
                return queryIndex[i]["_id"]
            }
        }
        return false

    }

    function getAllQueries(app) {
        var queryIndex = peerFeed.session.app[app]["index"]["queries"]
        for (i in queryIndex) {

        }

    }
}

peerFeed.session.getAppsIndex = function() {
    peerFeed.session.remote.secretDB.view("apps/MypeerFeed", {
        reduce: true,
        group: true,
        group_level: 1,
        success: function(response) {
            for (i in response.rows) {
                peerFeed.session.app[response.rows[i]["key"]] = {}
                peerFeed.session.app[response.rows[i]["key"]]["index"] = response.rows[i]["value"]
            }
        }
    })
}
peerFeed.session.startApp = function(app) {
    peerFeed.session.app[app]["db"] = new PouchDB(app)

}
peerFeed.session.installApp = function(appManifest) {}
peerFeed.session.removeApp = function(app) {}




peerFeed.session.nullApp = {


}

function hashString(str) {
    var str
    var char
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function getFieldFromDoc(doc, parsedField) {
    var value = doc;
    for (var i = 0, len = parsedField.length; i < len; i++) {
        var key = parsedField[i];
        value = value[key];
        if (!value) {
            break;
        }
    }
    return value;
}

function fieldExists(doc, parsedField) {
    var docFieldValue = getFieldFromDoc(doc, parsedField);
    return typeof docFieldValue !== 'undefined' && docFieldValue !== null;
}

function queryDoc(doc, key, operator, value) {
    switch (operator) {
        case '$eq':
            return fieldExists(doc, key) && doc[key] === value;
        case '$lte':
            return fieldExists(doc, key) && doc[key] <= value;
        case '$gte':
            return fieldExists(doc, key) && doc[key] >= value;
        case '$lt':
            return fieldExists(doc, key) && doc[key] < value;
        case '$gt':
            return fieldExists(doc, key) && doc[key] > value;
        case '$exists':
            return fieldExists(doc, key);
        case '$ne':
            return fieldExists(doc, key) && doc[key] !== value;
    }
}

peerFeed.encryptDoc = function(doc) {
    var header = {}

    if (!doc.to || !doc.from || !doc.message) {
        //can only be read by the owner
        //console.log("can only be read by the owner")
        mypeerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
        doc = {
            to: [mypeerFeedID],
            from: mypeerFeedID,
            mySecretKey: nacl.util.encodeBase64(peerFeed.session.keys.secretKey),
            message: doc
        }
    }
    if (!doc.mySecretKey) {
        doc.mySecretKey = nacl.util.encodeBase64(peerFeed.session.keys.secretKey)
    }

    header.decryptInfo = {}
    var peerFeedIDs = doc.to
    var mypeerFeedID = doc.from
    var mySecretKey = nacl.util.decodeBase64(doc.mySecretKey)
    var message = nacl.util.decodeUTF8(
        JSON.stringify(doc.message)
    )

    if (doc.messageKeypair) {
        var messageKeypair = {
            publicKey: nacl.util.decodeBase64(doc.messageKeypair.publicKey),
            secretKey: nacl.util.decodeBase64(doc.messageKeypair.secretKey)
        }
        var messageNonce = nacl.util.decodeBase64(doc.messageNonce)
    } else {
        var messageKeypair = nacl.box.keyPair()
        var messageNonce = peerFeed.crypto.getNonce()
    }
    var messageKey = nacl.util.encodeBase64(messageKeypair.secretKey)
    var messageHash = nacl.util.encodeBase64(
        nacl.hash(message)
    )
    header.ephemeral = nacl.util.encodeBase64(messageKeypair.publicKey)
    header.cipher = nacl.util.encodeBase64(nacl.secretbox(message, messageNonce, messageKeypair.secretKey))
    var decryptInfoNonces = []
    for (var u = 0; u < peerFeedIDs.length; u++) {
        decryptInfoNonces.push(
            peerFeed.crypto.getNonce()
        )
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

        ////console.log(
        //~ nacl.util.decodeUTF8(JSON.stringify(decryptInfo.messageInfo)),
        //~ decryptInfoNonces[i],
        //~ Base58.decode(peerFeedIDs[i]).subarray(0, 32),
        //~ mySecretKey
        //~ )
        decryptInfo.messageInfo = nacl.util.encodeBase64(nacl.box(
            nacl.util.decodeUTF8(JSON.stringify(decryptInfo.messageInfo)),
            decryptInfoNonces[i],
            Base58.decode(peerFeedIDs[i]).subarray(0, 32),
            mySecretKey
        ))
        header.challenge.push(nacl.util.encodeBase64(nacl.box(
            nacl.hash(message),
            decryptInfoNonces[i],
            Base58.decode(peerFeedIDs[i]).subarray(0, 32),
            mySecretKey
        )))

        //console.log(decryptInfo)
        decryptInfo = nacl.util.encodeBase64(nacl.box(
            nacl.util.decodeUTF8(JSON.stringify(decryptInfo)),
            decryptInfoNonces[i],
            Base58.decode(peerFeedIDs[i]).subarray(0, 32),
            messageKeypair.secretKey
        ))

        header.decryptInfo[
            nacl.util.encodeBase64(decryptInfoNonces[i])
        ] = decryptInfo
    }

    //console.log(header,doc)



    return header;

}


peerFeed.decryptDoc = function(header, keys) {
    if (keys) {
        console.log(keys)

        var mySecretKey = keys.secretKey
        var mypeerFeedID = peerFeed.crypto.getpeerFeedID(keys.publicKey)
    } else {
        var mySecretKey = peerFeed.session.keys.secretKey
        var mypeerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
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
    for (var i in header.challenge) {
        if (
            ({}).hasOwnProperty.call(header.challenge, i) && peerFeed.util.validateNonce(i, 24)
        ) {
            var challengeTrue = nacl.box.open(
                nacl.util.decodeBase64(header.challenge[i]),
                nacl.util.decodeBase64(i),
                nacl.util.decodeBase64(header.ephemeral),
                mySecretKey
            )
            if (challengeTrue) {
                break
            }
        }
    }
    if (challengeTrue) {
        return
    }
    for (var i in header.decryptInfo) {
        if (
            ({}).hasOwnProperty.call(header.decryptInfo, i) && peerFeed.util.validateNonce(i, 24)
        ) {
            actualDecryptInfo = nacl.box.open(
                nacl.util.decodeBase64(header.decryptInfo[i]),
                nacl.util.decodeBase64(i),
                nacl.util.decodeBase64(header.ephemeral),
                mySecretKey
            )
            if (actualDecryptInfo) {
                actualDecryptInfo = JSON.parse(
                    nacl.util.encodeUTF8(actualDecryptInfo)
                )
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
        actualMessageInfo = nacl.box.open(
            nacl.util.decodeBase64(actualDecryptInfo.messageInfo),
            actualDecryptInfoNonce,
            Base58.decode(actualDecryptInfo.senderID).subarray(0, 32),
            mySecretKey
        )
        actualMessageInfo = JSON.parse(
            nacl.util.encodeUTF8(actualMessageInfo)
        )
    } catch (err) {
        throw new Error('peerFeed: Decryption failed - could not parse header')
        //~ return {"error":"Decryption failed - could not parse header"}
    }
    var doc = nacl.secretbox.open(
        nacl.util.decodeBase64(header.cipher),
        nacl.util.decodeBase64(actualMessageInfo.messageNonce),
        nacl.util.decodeBase64(actualMessageInfo.messageKey)
    )

    doc = JSON.parse(
        nacl.util.encodeUTF8(doc)
    );


    if (doc.messageKeypair) {
        doc.messageKeypair = {
            publicKey: header.ephemeral,
            secretKey: actualMessageInfo.messageKey
        }
        doc.messageNonce = actualMessageInfo.messageNonce
    }
    //console.log(doc,header)
    doc._id = header._id
    doc._rev = header._rev
    doc.from = actualDecryptInfo.senderID
    return doc
}