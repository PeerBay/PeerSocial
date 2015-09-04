///////////////////////////////////////////////////////////////////////////////
//
//  Copyright (C) 2014, Tavendo GmbH and/or collaborators. All rights reserved.
//
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//  1. Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//
//  2. Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
//  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
//  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
//  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
//  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
//  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
//  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
//  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
//  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
//  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
//  POSSIBILITY OF SUCH DAMAGE.
//
///////////////////////////////////////////////////////////////////////////////
var util = require('util');
var couchdb = require('nano')("http://localhost:5984");
var nacl = require('tweetnacl');
var randomstring = require('randomstring');
var BLAKE2s = require("blake2s");
var Base58 = require("base-58")
var Q = require("q")
var follow = require("follow")
var autobahn = require('autobahn');
var FeedParser = require('feedparser')
var extractor = require('unfluff');
var readability = require('node-readability');
var webrequest = require('request');
// var WebTorrent = require("webtorrent-hybrid")
var fs = require("fs")
var http = require('http');


var requests = couchdb.use("requests")
var feeds = couchdb.use("feeds")
    // var client = new WebTorrent()
    // process.on('uncaughtException', function(err) {
    //     console.error(err);
    //     console.log("Node NOT Exiting...");
    // });
var tempFiles = {}
var openFiles = {}
var openFileSizes = {}
var rtcPeers = {}
var freePeers = []
var fs = require('fs');
var files = {}
var downloading = {}

fs.readdir('files', function(err, lfiles) {
    if (err)
        throw err;
    for (var index in lfiles) {
        console.log(lfiles[index]);
        files[lfiles[index]] = true
    }
});
var download = function(uri, filename, cb) {
    console.log("downloading ", uri)
    var f = fs.createWriteStream("files/" + filename)
    f.on('error', function(err) {
        console.log(err, uri);
    });

    f.on('close', function() {

        console.log("finished downloading: ", uri, this.path);

    });
    var r = http.get(uri, function(response) {
        response.pipe(f);
        f.on('finish', function() {
            f.close(cb); // close() is async, call cb after close completes.
        });
    }).on('error', function(err) { // Handle errors
        fs.unlink("files/" + filename); // Delete the file async. (But we don't check the result)
        if (cb) cb(err.message);
    });

    // webrequest.head(uri, function(err, res, body) {
    // });
};

function getRssFeeds(rssLinks) {
    console.log("getRss", rssLinks)
    var deferred = Q.defer();
    var feedparser = new FeedParser({
        "normalize": true,
        "addmeta": false
    });
    var articles = []
    for (i in rssLinks) {
        console.log("getting ", rssLinks[i])
        webrequest(rssLinks[i]).on('error', function(error) {
            // handle any request errors
            deferred.resolve(error)
        }).on('response', function(res) {
            var stream = this;

            if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

            stream.pipe(feedparser);
        });
    }
    feedparser.on('error', function(error) {
        // always handle errors
        deferred.resolve(error)
    });
    feedparser.on('readable', function() {
        // This is where the action is!
        var stream = this,
            meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
            ,
            item;
        // console.log(stream.response.caseless.dict.etag)
        var imgregex = /<img[^>]+src="(http:\/\/[^">]+)"/g;
        while (item = stream.read()) {

            image = ""

            if (img = imgregex.exec(item.summary)) {
                item.image = img[1]
            } else if (img = imgregex.exec(item.description)) {
                item.image = img[1]
            }

            if (typeof item.image == "string") {
                image = nacl.util.encodeBase64(nacl.hash(nacl.util.decodeUTF8(item.image)))
                image = image.split("/").join("")
                if (!files[image]) {
                    downloading[image] = true
                    download(item.image, image, function() {
                        console.log("image loaded")
                        files[image] = true
                        delete downloading[image]
                    })
                }
            }
            articles.push({
                "link": item.link,
                "summary": item.summary,
                "title": item.title,
                "image": image,
                "date": item.date,
                "description": item.description

            })
        }
    });
    feedparser.on('end', function() {
        console.log("feed ended")
        deferred.resolve(articles)
    })
    return deferred.promise
}




// This challenge callback will authenticate our backend component
function onchallenge(session, method, extra) {

    console.log("onchallenge", method, extra);

    if (method === "wampcra") {

        console.log("authenticating via '" + method + "' and challenge '" + extra.challenge + "'" + autobahn.auth_cra.sign(process.argv[5], extra.challenge));

        return autobahn.auth_cra.sign(process.argv[5], extra.challenge);

    } else {
        throw "don't know how to authenticate using '" + method + "'";
    }
}

function storeFile(fileData) {
    var infohash = fileData[0].infohash

    var deferred = Q.defer();
    if (!(infohash in tempFiles)) {
        var size = fileData[0].size
        var name = fileData[0].name
        tempFiles[infohash] = {
            data: ""
        }
        tempFiles[infohash].name = name
        tempFiles[infohash].size = size
        deferred.resolve({
            infohash: size
        })
    } else {
        var offset = fileData[0].offset
        var slice = fileData[0].slice
        tempFiles[infohash].data += slice;
        console.log(offset, tempFiles[infohash].data.length, slice.length)
        if ((offset + slice.length) >= tempFiles[infohash].size) {
            var buffer = new Buffer(tempFiles[infohash].data, "binary");
            buffer.name = tempFiles[infohash].name
            console.log("file uploaded")
            delete tempFiles[infohash]
            delete buffer;
            fs.writeFile("files/" + infohash, buffer, function(err) {
                if (err)
                    throw err;
                files[infohash] = true
                deferred.resolve({
                    seed: infohash
                })
            });

            // client.seed("files/" + tempFiles[infohash].name,function(torrent) {
            //     if (torrent.infoHash == infohash) {
            //         console.log("everything is ok")
            //     } else {
            //         console.log("infohash doesnt match")
            //     }
            //     deferred.resolve({
            //         seed: torrent.infoHash
            //     })
            //     delete tempFiles[infohash]
            //     delete buffer
            // })
        } else {
            deferred.resolve({
                infohash: offset
            })
        }
    }
    return deferred.promise;
    var deferred = Q.defer();
}

function getArticle(link) {
    var deferred = Q.defer();
    webrequest(link[0], function(error, response, html) {
        if (!error && response.statusCode == 200) {
            // console.log(html);
            data = extractor(html, 'en');

            if (!data.text) {
                readability(html, function(err, doc, meta) {
                    data.text = doc.content
                    o = extractor(data.text, "en")
                    data.otext = o.content
                    data.oimage = o.image
                    doc.close();
                    if (typeof data.image == "string") {
                        image = nacl.util.encodeBase64(nacl.hash(nacl.util.decodeUTF8(data.image)))
                        image = image.split("/").join("")
                        if (!files[image]) {
                            downloading[image] = true
                            download(data.image, image, function() {
                                console.log("image loaded")
                                files[image] = true
                                delete downloading[image]
                            })
                        }
                        data.image = image
                        deferred.resolve(data)
                    }
                });

            } else {
                if (typeof data.image == "string") {
                    image = nacl.util.encodeBase64(nacl.hash(nacl.util.decodeUTF8(data.image)))
                    image = image.split("/").join("")
                    if (!files[image]) {
                        downloading[image] = true
                        download(data.image, image, function() {
                            console.log("image loaded")
                            files[image] = true
                            delete downloading[image]
                        })
                    }
                    data.image = image
                }
                deferred.resolve(data)
            }
        }


    });
    return deferred.promise;

}

function getFileSize(fileData) {
    var hash = fileData[0]
    var deferred = Q.defer();
    console.log("size ", hash)
    console.log(fileSizeReadyInterval)
    var fileSizeReadyInterval = setInterval(function() {

        if (hash in downloading) {

        } else {
            clearInterval(fileSizeReadyInterval)
            delete fileSizeReadyInterval
            if (hash in files) {
                if (hash in openFileSizes) deferred.resolve(openFileSizes[hash])
                console.log(hash)
                fs.stat("files/" + hash, function(err, stats) {
                    if (err) {
                        deferred.resolve(err)
                    } else {
                        openFileSizes[hash] = stats.size
                        console.log("size", stats.size)
                        deferred.resolve(stats.size)
                    }
                });
            } else {
                deferred.resolve(0)
            }

        }
    }, 500)
    return deferred.promise;

}

function getFile(fileData) {
    console.log("filedata req", fileData)
    var hash = fileData[0]

    var deferred = Q.defer();
    var fileReadyInterval = setInterval(function() {
        if (hash in downloading) {
            console.log("downloading")
        } else {
            clearInterval(fileReadyInterval)
            if (!(hash in files)) {
                deferred.resolve({
                    "error": "failed"
                })
            } else {
                var offset = fileData[1]
                var length = fileData[2]
                if (offset >= openFileSizes[hash]) return ""
                fs.open("files/" + hash, 'r', function(status, fd) {
                    if (!fd) {
                        deferred.resolve({
                            "error": "failed"
                        })
                    } else if (status) {
                        console.log(status.message);
                        deferred.resolve({
                            "error": status.message
                        })
                    } else {
                        console.log("get file ", hash)
                            // openFiles[hash] = fd
                        if ((offset + length) > openFileSizes[hash]) length = openFileSizes[hash] - offset;
                        console.log(offset, length, openFileSizes[hash])
                        var buffer = new Buffer(length)
                        fs.read(fd, buffer, 0, length, offset, function(err, num) {
                            deferred.resolve(buffer.toString('binary', 0, num));
                        })

                    }
                })
            }

        }
    }, 200)
    return deferred.promise;
}

function askPeer(m) {
    // {
    //     key:''
    //     request:{}
    // }
    var deferred = Q.defer();
    doc = m[0].request
    doc._id = m[0].key + Date.now()

    requests.insert(doc, function(err, body) {
        // console.log(err, body)
        if (!err) {
            deferred.resolve(body)
        } else {
            deferred.resolve(err)
        }
    })
    return deferred.promise;
}

function getNewRequestsIds(feedID) {
    requests.fetchRevs({}, {
        "startkey": feedID[0] + "\u9999",
        "endkey": feedID[0],
        "descending": true
    }, function(err, body) {
        console.log(err)
        if (!err) {
            var answer = [];
            // console.log("docids", body)
            body.rows.forEach(function(row) {
                    if (row.id) {
                        answer.push(row.id)
                    }
                })
                // console.log("answer", answer)


            deferred.resolve(answer)
        } else {
            deferred.resolve([])


        }
    })
    return deferred.promise;
}

function getRequests(signedRequest) {
    var pKey = Base58.decode(signedRequest[0].key).subarray(0, 32)
    var askDocs = {}
    for (n in signedRequest[0].docids) {
        docid = nacl.sign.open(signedRequest[0].docids[n], pKey)
        if (docid && docid.startsWith(signedRequest[0].key)) {
            askDocs[docid] = signedRequest[0].docids[n]
        }
    }
    if (askDocs.length != 0) {
        var deferred = Q.defer();
        feeds.fetch({
            "keys": Object.keys(askDocs)
        }, function(err, body) {
            // console.log(err, body)
            if (!err) {
                var answer = [];
                // console.log(body)
                if (body.rows) {
                    body.rows.forEach(function(row) {
                        if (row.doc) {
                            answer.push(row.doc)
                            deleteDocs.push({
                                "_id": row.doc._id,
                                "_rev": row.doc._rev,
                                "viewed": askDocs[row.doc._id]
                            })
                        }
                    })
                }


                deferred.resolve(answer)
            } else {
                deferred.resolve([])

                // deferred.r(err)
            }
        })



    } else {
        deferred.resolve([])
    }
    return deferred.promise;

}

function getFeed(feedId) {
    // console.log('getFeed', feedId)
    var deferred = Q.defer();
    if (feedId[1]) {
        startkey = feedId[1]
    } else {
        startkey = "1\u9999"

    }

    feeds.fetch({}, {
        "startkey": feedId[0] + startkey,
        "endkey": feedId[0],
        "descending": true,
        "limit": 3,
        "include_docs": true
    }, function(err, body) {
        console.log(err)
        if (!err) {
            var answer = [];
            body.rows.forEach(function(row) {
                if (row.doc) {
                    answer.push(row.doc)
                }
            })


            deferred.resolve(answer)
        } else {
            deferred.resolve({})


        }
    })


    return deferred.promise;
}

function getFeedDocIds(feedID) {
    console.log('getFeedDocIds', feedID)
    var deferred = Q.defer();
    if (feedID[1]) {
        startkey = feedID[1]
    } else {
        startkey = "1\u9999"

    }

    feeds.fetchRevs({}, {
        "startkey": feedID[0] + startkey,
        "endkey": feedID[0],
        "descending": true,
        "limit": 5
    }, function(err, body) {
        console.log(err)
        if (!err) {
            var answer = [];
            // console.log("docids", body)
            body.rows.forEach(function(row) {
                    if (row.id) {
                        answer.push(row.id)
                    }
                })
                // console.log("answer", answer)


            deferred.resolve(answer)
        } else {
            deferred.resolve({})


        }
    })


    return deferred.promise;
}

function get(docIds) {
    // console.log(docIds)
    var deferred = Q.defer();
    feeds.fetch({
        "keys": docIds
    }, function(err, body) {
        // console.log(err, body)
        if (!err) {
            var answer = [];
            // console.log(body)
            if (body.rows) {
                body.rows.forEach(function(row) {
                    if (row.doc) {
                        answer.push(row.doc)
                    }
                })
            }


            deferred.resolve(answer)
        } else {
            deferred.resolve([])

            // deferred.r(err)
        }
    })


    return deferred.promise;
}

function putwithid(m) {
    console.log("putwithid", m)
    var signature = nacl.util.decodeBase64(m[0].signature)

    var doc = nacl.util.decodeUTF8(m[0].doc)
    var pKey = Base58.decode(m[0].key).subarray(0, 32)

    var signed = nacl.sign.detached.verify(doc, signature, pKey)
    console.log("signature verification :", signed)
    if (signed) {
        var doc = JSON.parse(m[0].doc)
            // console.log(doc)
        if (doc._id.substring(0, 46) == m[0].key) {
            console.log("verified")
            var deferred = Q.defer();
            if (doc.handle && doc._id == m[0].key) {
                feeds.view("rel", "handles", {
                        "key": doc.handle
                    },
                    function(err, body) {

                        // console.log(err, body)
                        if (!err) {
                            // console.log(JSON.stringify(body))
                            if (body.rows.length == 0 || body.rows[0].value[0].id == m[0].key) {
                                feeds.insert(doc, function(err, body) {
                                    // console.log(err, body)
                                    if (!err) {
                                        deferred.resolve(body)
                                    } else {
                                        deferred.resolve(err)
                                    }
                                })
                            } else {
                                deferred.resolve({
                                    "error": "Handle " + doc.handle + " is already used"
                                })
                            }
                        } else {
                            deferred.resolve(err)
                        }
                    })
            } else {
                feeds.insert(doc, function(err, body) {
                    // console.log(err, body)
                    if (!err) {
                        deferred.resolve(body)
                    } else {
                        deferred.resolve(err)
                    }
                })
            }


            return deferred.promise;
        } else {
            return {
                "error": "Document id doesn't match public key"
            }
        }
    } else {
        return {
            "error": "Signature verification failed"
        }
    }
}


function put(m) {
    console.log("put", m[0].signature)
    var signature = nacl.util.decodeBase64(m[0].signature)
    var doc = nacl.util.decodeUTF8(m[0].doc)

    var pKey = Base58.decode(m[0].key).subarray(0, 32)

    var signed = nacl.sign.detached.verify(doc, signature, pKey)
    console.log("signature: ", signed)
    if (signed) {
        var deferred = Q.defer();
        var doc = JSON.parse(m[0].doc)
        console.log("verified")
            // console.log(doc)
        doc._id = m[0].key + Date.now()

        feeds.insert(doc, function(err, body) {
            console.log(err, body)
            if (!err) {
                deferred.resolve(body)
            } else {
                deferred.resolve(err)
            }
        })



        return deferred.promise;
    } else {
        return {
            "error": "signature verification failed"
        }
    }

}

function queryHandles(query) {
    console.log("quering handle:", query[0])
    var deferred = Q.defer();
    feeds.view("rel", "handles", {
            "startkey": query[0],
            "endkey": query[0] + "\u9999",
            "reduce": true,
            "group": true,
            "limit": 5
        },
        function(err, body) {

            console.log(JSON.stringify(body))
            if (!err) {
                deferred.resolve(body.rows)
            } else {
                deferred.reject(err)
            }
        })
    return deferred.promise
}

function belongsTo(threadIds) {
    console.log(threadIds)
    var deferred = Q.defer();
    feeds.view("rel", "belongs", {
            "keys": threadIds,
            "reduce": true,
            "group": true
        },
        function(err, body) {
            var answer = {};
            console.log(err, body)
            if (!err) {
                body.rows.forEach(function(doc) {
                    answer[doc.key] = doc.value
                });
                deferred.resolve(answer)
            }
        })
    return deferred.promise
}

function tag(tag) {
    console.log(tag[0])
    var deferred = Q.defer();
    feeds.view("rel", "tag", {
            "key": tag[0],
            "reduce": true,
            "group": true
        },
        function(err, body) {
            var answer = {};
            console.log(err, body)
            if (!err) {
                body.rows.forEach(function(doc) {
                    answer[doc.key] = doc.value
                });

                deferred.resolve(answer)
            }
        })
    return deferred.promise
}

function validate(doc) {
    var userKey = nacl.util.decodeUTF8(doc._id.substring(0, 46))
    var sign = doc.sign;
    delete doc.sign;
    doc = JSON.stringify(doc)
    doc = nacl.util.decodeUTF8(doc)
    return nacl.sign.detached.verify(doc, sign, userKey)

    // if(nacl.sign.detached.verify(doc,doc._id.substr(0,44)){

    // }

}

var connection = new autobahn.Connection({
    url: process.argv[2],
    realm: process.argv[3],

    // The following authentication information is for authenticating
    // our backend component
    //
    authid: process.argv[4],
    authmethods: ["wampcra"],
    onchallenge: onchallenge
});
var randomProperty = function(obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];
};

connection.onopen = function(session) {
    console.log("backend connected");

    function on_event_join(p, f, l) {
        if (p[0].authid.length == 44) {
            rtcPeers[p[0].session] = {
                authid: p[0].authid
            }
            freePeers.push(p[0].authid)
                // console.log("join", rtcPeers[p[0].session])
        }
        // console.log("register ",session._subscriptions)
    }

    function on_event_leave(p, f, l) {
        console.log("leave", rtcPeers[p[0]])
        freePeers.splice(freePeers.indexOf(rtcPeers[p[0]].authid), 1)
        delete rtcPeers[p[0]]
    }
    session.subscribe('wamp.session.on_join', on_event_join).then(
        function(subscription) {
            //console.log('Subscription succeeded', subscription);

        },
        function(error) {
            // console.log('Subscription failed', error);
        }
    );
    setInterval(function() {
        session.publish("hola", [Date.now()])

    }, 10000)
    session.subscribe('wamp.session.on_leave', on_event_leave).then(
        function(subscription) {
            // console.log('Subscription succeeded', subscription.topic);
        },
        function(error) {
            // console.log('Subscription failed', error);
        }
    );

    session.register("disallowLeachers", function(req) {
        freePeers.splice(freePeers.indexOf(req[0]), 1)
    })
    session.register("allowLeachers", function(req) {
        if (freePeers.indexOf(req[0]) == -1) {
            freePeers.push(req[0])
        }
    })
    session.register("test", function(data) {
        console.log("test called with :", data)
        return {
            "test": "success"
        }
    })
    session.register("handles", queryHandles)
    session.register("putwithid", putwithid)
    session.register("randomPeer", randomPeer)
    session.register("randomPeers", randomPeers)
    session.register("sharedKey", sharedKey)
    session.register("get", get)
    session.register("getFeed", getFeed)
    session.register("getFeedDocIds", getFeedDocIds)
    session.register("put", put)
    session.register("storeFile", storeFile)
    session.register("getFileSize", getFileSize)
    session.register("getFile", getFile)
    session.register("getRssFeeds", getRssFeeds)
    session.register("getArticle", getArticle)
    session.register("belongsTo", belongsTo)
    session.register("tag", tag)
    follow({
        db: "http://127.0.0.1:5984/feeds",
        since: "now",
        include_docs: true
    }, function(err, change) {
        if (!err) {
            session.publish(change.id.substring(0, 46), [change.id])
            console.log("Got change number " + change.id.substring(0, 46));
            if (change.doc.tags) {
                change.doc.tags.forEach(function(tag) {
                    session.publish("tag-" + tag, [change.id])
                })
            }
            if (change.doc.mentions) {
                change.doc.mentions.forEach(function(mentioned) {
                    session.publish("mentions-" + mentioned, [change.id])
                })
            }

        }
    })


};
var seed = nacl.randomBytes(32)

function sharedKey() {
    return nacl.util.encodeUTF8(seed)
}

function randomPeers(l) {

    if (freePeers.length <= 3) {
        return []
    }
    console.log("freePeers length:", freePeers.length)
    var u = []
    if (l[0] >= 5) {
        l[0] = 5
    }
    for (var i = 0; i < l[0]; i++) {
        console.log("random peer")
        u.push(freePeers[freePeers.length * Math.random() << 0])
    }
    console.log(l[0], " random Peers:", u)
    return u
}

function randomPeer() {
    return freePeers[freePeers.length * Math.random() << 0]
}

connection.onclose = function(reason, details) {
    console.log("Connection lost:", reason, details);
}


connection.open();


// nano.prototype.allDocs=function(qs,callback){
//     if (typeof qs === 'function') {
//         callback = qs;
//         qs = {};
//       }



//       return relax({
//         db: dbName,
//         path: '_all_docs',
//         method: 'POST',
//         qs: qs,
//         body: docNames
//       }, callback);
// }
