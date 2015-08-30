angular.module('peerFeedApp', ['luegg.directives', 'oi.multiselect', 'ngCropper', 'ui.bootstrap'])
    .controller('SignInController', ['$scope', '$rootScope', '$q',
        function($scope, $rootScope, $q, pouchDB) {
            function connectToPeerNode() {
                $rootScope.peerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.signKeys.publicKey)
                $rootScope.inboxID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
                var wsuri = (document.location.protocol === "http:" ? "ws:" : "wss:") + "//" +
                    document.location.host + "/ws";
                var connection = new autobahn.Connection({
                    url: wsuri,
                    realm: "realm1"
                });
                console.log("ws connect" + wsuri)
                connection.onopen = function(session, details) {
                   
                    console.log("Connected");

                    m = "secret"
                    m = nacl.util.decodeUTF8(m)
                    signature = nacl.sign.detached(m, peerFeed.session.signKeys.secretKey)
                    verify = nacl.sign.detached.verify(m, signature, peerFeed.session.signKeys.publicKey)
                    if (verify) {
                        console.log(verify, "message authenticated")
                    }



                    $rootScope.DB = {}
                    $rootScope.get = function(docIds) {
                        session.call("get", docIds).then(function(res, err) {
                            console.log(err, res)
                            if (!err) {
                                $rootScope.DB = angular.extend($rootScope.DB, res)
                                $rootScope.$apply()
                            }
                        })

                    }

                    $rootScope.put = function(doc, keys, callback) {
                        var m = {};
                        // public message asymmetric signature
                        // owner  only readable message asymmetric encryption
                        if (typeof keys == "object") {

                        } else if (typeof keys == "string") {
                            // group message symmetric encryption and asymmetric signature 
                            // group message symmetric encryption and anonymous 

                        } else if (typeof keys == "function") {
                            callback = keys
                            keys = peerFeed.session.signKeys
                        } else if (typeof keys == "boolean") {
                            if (keys) {
                                keys = peerFeed.session.boxKeys
                            }
                        }
                        var sdoc = JSON.stringify(doc)
                        m.doc = sdoc
                        console.log(sdoc)
                        sdoc = nacl.util.decodeUTF8(sdoc)
                        signed = nacl.sign.detached(sdoc, peerFeed.session.signKeys.secretKey)

                        m.sign = nacl.util.encodeBase64(signed)

                        m.key = $rootScope.peerFeedID

                        console.log(m)
                        session.call("put", [m]).then(function(res, err) {
                            if (res) {
                                $rootScope.DB[doc.type][res.id] = doc
                                $rootScope.DB[doc.type][res.id]._rev = res.rev
                                $rootScope.$apply()
                                callback(true)
                            } else {
                                callback(false)
                            }
                            console.log(res, err)
                        })

                    }

                    $rootScope.belongsTo = function(feedId) {
                        deferred = $q.defer()
                        session.call("belongsTo", [feedId]).then(function(res, err) {
                            if (!err) {
                                deferred.resolve(res)
                            } else {
                                deferred.reject(err)
                            }
                            console.log(err, res)
                        })
                        return deferred.promise;

                    }
                    $rootScope.tag = function(tag) {
                        deferred = $q.defer()
                        session.call("tag", [tag]).then(function(res, err) {
                            if (!err) {
                                deferred.resolve(res)
                            } else {
                                deferred.reject(err)
                            }
                            console.log(err, res)
                        })
                        return deferred.promise;

                    }
                    $rootScope.subscribe = function(peerID) {
                        session.subscribe(peerID, function(res) {

                            $rootScope.DB.__defineGetter__(res[0], function() {
                                $rootScope.get(res)
                            })
                        })

                    }


                    $rootScope.subscribeMentions = function(peerID) {
                        session.subscribe("mentions-" + peerID, function(res) {

                        })
                    }
                    $rootScope.subscribeTag = function(tag) {
                        session.subscribe("tag-" + tag, function(res) {

                        })
                    }




                    $rootScope.connected = true;
                    $scope.$apply()

                }
                connection.onclose = function(reason, details) {
                    console.log("Connection lost: " + reason);
                }

                connection.open();

                // now actually open the connection
                //
                // profile = {
                //     _id: signKey,
                //     name: name,
                //     handle: handle,
                //     job: job,
                //     userImage: img,
                //     coverImage: img,
                //     description: desc,
                //     inboxKey: boxKey,
                //     proof: signature
                // }
                // publicPost = {
                //     _id: signKey + [type] + time, //type=post
                //     data: {
                //         message: message,
                //         image: img,
                //         mentions: [mentioned],
                //         tags: [tags]
                //     }

                // }

                function createProfile() {
                    profile = {
                        name: name,
                        handle: handle,
                        job: job,
                        userImage: img,
                        coverImage: img,
                        description: desc
                    }
                    profile._id = signKey
                    profile.inboxKey = boxKey
                    sign(profile)
                    put(profile)
                }
                // privateGroupProfile={
                //     _id:groupSignKey,
                //     name:groupName,
                //     admins:[peerIDs],
                //     description:desc,


                // }
                // privateGroupPost={
                //     _id:groupSignKey
                // }


            }
            $scope.password = "123"
            $scope.username = "v@k"
            $scope.signIn = function() {
                peerFeed.peerNode = $scope.peernode
                peerFeed.crypto.getKeyPair($scope.password, $scope.username, function(boxKeys, signKeys) {
                    peerFeed.session.keys = boxKeys
                    peerFeed.session.signKeys = signKeys
                    peerFeed.session.keyPairReady = true
                        // Keep polling until we have a key pair
                    var keyReadyInterval = setInterval(function() {
                        if (peerFeed.session.keyPairReady) {
                            clearInterval(keyReadyInterval)

                            connectToPeerNode(peerFeed.session.keys, $scope.peernode)
                        }
                    })
                })

            }
        }
    ])
    .directive('dataform', [

        function() {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: function(elem, attr) {
                    return "templates/" + attr.dataform + '-form.html';
                },
                scope: true,
                controller: function($rootScope, $scope, $element, $attrs) {
                    $scope.rel = {}
                    $scope.temp = {}
                    $scope.attach = {}
                    $scope.myImage = ''
                    $scope.public = []
                    $scope.rel.data = {}

                    $scope.submit = function() {


                        // {
                        //     data:{message:""},
                        //     type:"",
                        //     mentions:[],
                        //     tags:[]
                        // }
                        // {
                        //     data:{message:""},
                        //     sign:"",
                        //     key:"",
                        //     type:"",
                        //     mentions:[],
                        //     tags:[]
                        // }
                        // {
                        //     _id:key+"-"+type+"-"+time(),
                        //     data:data,
                        //     sign:sign,
                        //     tags:[],
                        //     mentions:[]
                        // }
                        console.log($scope.rel)
                        $rootScope.put($scope.rel)

                    }
                    $scope.submitPost = function() {
                        var postID = $scope.peerFeedID + '-' + Date.now()
                        $rootScope.DB[postID] = {}
                        $rootScope.DB[postID]._id = postID

                        var doc = {}
                        doc = angular.extend($rootScope.DB[postID], $scope.rel)
                        $rootScope.put(doc, function(sent) {
                            if (sent) {
                                $scope.rel.data = {}
                            }
                        })
                    }
                },
            };
        }
    ])


var signKeys, boxKeys

function signIn() {
    // getProfile()
    // getSettings()

}

function createProfile() {

    // {
    // 	name:""
    // 	handle:""
    // 	signKey:""
    // 	job:""
    // 	place:""
    // 	userImage:""
    // 	coverImage:""

    // }


}

function publicPost() {
    //post= {
    // 	message:""
    // 	mentions:[]
    // 	tags:[]
    // }
    signature = sign(post)
    put(data, signature, id, function(answer) {

    })
}

function groupPost(message, key) {
    signKeys = nacl.sign.keyPair.fromSeed(key)
    nonce = peerFeed.crypto.getNonce()
    cipher = nacl.secretbox(message, nonce, key)
    signature = nacl.sign.detached(message, secretKey)
    put(sign, doc, key)
        // {
        //     nonce: nonce
        //     cipher: cipher
        //     key:signKeys.publicKey
        // }

}

function followUser(userID) {
    settings.followers.push(userID)
    subscribe(userID, callback)
}

function createGroup() {

}

function addGroup(sKey) {
    peerFeed.settings.groups.push(skey)
    var settings = peerFeed.settings
    settings = JSON.stringify(settings)
    settings = nacl.util.decodeUTF8(settings)
    nonce = peerFeed.crypto.getNonce()
    cipher = nacl.box(settings, nonce, peerFeed.session.keys.publicKey, peerFeed.session.keys.secretKey)
    doc = {
        nonce: nonce,
        cipher: cipher
    }
    put(doc)
}





function addRssFeed(rssLink) {

}

function getArticle(link) {

}
