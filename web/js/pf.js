angular.module('peerFeedApp', ['luegg.directives', 'oi.multiselect', 'ngCropper', 'ui.bootstrap'])
    .filter('orderObjectBy', function() {
        return function(items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function(item) {
                filtered.push(item);
            });
            filtered.sort(function(a, b) {
                return (a[field] > b[field] ? 1 : -1);
            });
            if (reverse) filtered.reverse();
            return filtered;
        };
    }).directive("contenteditable", function() {
        return {

            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {

                //read the text typed in the div (syncing model with the view)
                function read() {
                    ngModel.$setViewValue(element.html());
                }

                //render the data now in your model into your view
                //$render is invoked when the modelvalue differs from the viewvalue
                //see documentation: https://docs.angularjs.org/api/ng/type/ngModel.NgModelController#
                ngModel.$render = function() {
                    element.html(ngModel.$viewValue || "");
                };

                //do this whenever someone starts typing
                element.bind("blur keyup change", function() {
                    scope.$apply(read);
                });
            }
        };
    }).directive('initialValue', function() {
        return {
            restrict: 'A',
            controller: ['$scope', '$element', '$attrs', '$parse',
                function($scope, $element, $attrs, $parse) {
                    var getter, setter, val, tag;
                    tag = $element[0].tagName.toLowerCase();
                    val = $attrs.initialValue || $element.val();
                    if (tag === 'input') {
                        if ($element.attr('type') === 'checkbox') {
                            val = $element[0].checked ? true : undefined;
                        } else if ($element.attr('type') === 'radio') {
                            val = ($element[0].checked || $element.attr('selected') !== undefined) ? $element.val() : undefined;
                        }
                    }
                    console.log(val, $scope.$eval(val))
                    if ($attrs.ngModel) {
                        getter = $parse($attrs.ngModel);
                        setter = getter.assign;
                        setter($scope, $scope.$eval(val));
                    }
                }
            ]
        };
    }).directive('dropdownMultiselect', function() {
        return {
            restrict: 'E',
            scope: {
                model: '=',
                options: '=',
            },
            template: "<div class='btn-group' data-ng-class='{open: open}'>" +
                "<button class='btn btn-small'>Select...</button>" +
                "<button class='btn btn-small dropdown-toggle' data-ng-click='openDropdown()'>" +
                " <span class='caret'></span></button>" +
                "<ul class='dropdown-menu' aria-labelledby='dropdownMenu'>" +
                "<li><a data-ng-click='selectAll()'>" +
                "<span class='glyphicon glyphicon-ok green' " +
                "aria-hidden='true'></span> Check All</a></li>" +
                "<li><a data-ng-click='deselectAll();'>" +
                "<span class='glyphicon glyphicon-remove red'" +
                "aria-hidden='true'></span> Uncheck All</a></li>" +
                "<li class='divider'></li>" +
                "<li data-ng-repeat='option in options'>" +
                "<a data-ng-click='toggleSelectItem(option)'>" +
                "<span data-ng-class='getClassName(option)' " +
                "aria-hidden='true'></span> {{option.name}}</a></li>" +
                "</ul>" +
                "</div>",

            controller: function($scope) {
                $scope.openDropdown = function() {
                    $scope.open = !$scope.open;
                };

                $scope.selectAll = function() {
                    $scope.model = [];
                    angular.forEach($scope.options, function(item, index) {
                        $scope.model.push(item.id);
                    });
                };

                $scope.deselectAll = function() {
                    $scope.model = [];
                };

                $scope.toggleSelectItem = function(option) {
                    var intIndex = -1;
                    angular.forEach($scope.model, function(item, index) {
                        if (item == option.id) {
                            intIndex = index;
                        }
                    });

                    if (intIndex >= 0) {
                        $scope.model.splice(intIndex, 1);
                    } else {
                        $scope.model.push(option.id);
                    }
                };

                $scope.getClassName = function(option) {
                    var varClassName = 'glyphicon glyphicon-remove red';
                    angular.forEach($scope.model, function(item, index) {
                        if (item == option.id) {
                            varClassName = 'glyphicon glyphicon-ok green';
                        }
                    });
                    return (varClassName);
                };
            }
        }
    }).directive('appFilereader', function($q) {
        var slice = Array.prototype.slice;

        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel, Cropper) {
                    if (!ngModel) return;

                    ngModel.$render = function() {};
                    var Cropper = element.injector().get("Cropper");
                    element.bind('change', function(e) {

                        var element = e.target;
                        if (attrs.imagewidth || attrs.imageheight) {
                            imagescale = {}
                            if (attrs.imagewidth) {
                                imagescale["width"] = attrs.imagewidth
                            }
                            if (attrs.imageheight) {
                                imagescale["height"] = attrs.imageheight
                            }
                            $q.all(slice.call(element.files, 0).map(scaleImage))
                                .then(function(values) {
                                    if (element.multiple) ngModel.$setViewValue(values);
                                    else ngModel.$setViewValue(values.length ? values[0] : null);
                                });

                            function scaleImage(file) {
                                var deferred = $q.defer();
                                Cropper.scale(file, imagescale).then(Cropper.encode).then(function(dataUrl) {
                                    deferred.resolve(dataUrl);
                                });
                                return deferred.promise;
                            }
                        } else {
                            $q.all(slice.call(element.files, 0).map(readFile))
                                .then(function(values) {
                                    if (element.multiple) ngModel.$setViewValue(values);
                                    else ngModel.$setViewValue(values.length ? values[0] : null);
                                });

                            function readFile(file) {
                                var deferred = $q.defer();

                                var reader = new FileReader();
                                reader.onload = function(e) {
                                    deferred.resolve(e.target.result);
                                };
                                reader.onerror = function(e) {
                                    deferred.reject(e);
                                };

                                reader.readAsDataURL(file);

                                return deferred.promise;
                            }
                        }
                    }); //change

                } //link
        }; //return
    })
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
                    $scope.time = function() {
                        return Date.now()
                    }
                    $scope.transmit = function(save) {
                        doc = angular.extend($scope.neo, $scope.rel)
                        if (!doc.id) {
                            doc.id = Date.now();
                        }

                        doc.app = $attrs.dataform
                        console.log(doc)

                        if ($attrs.instance in $scope.DB[$attrs.dataform]) {
                            $scope.DB[$attrs.dataform][$attrs.instance].push(doc)
                            $scope.connections[$attrs.instance].transmit(doc)
                        } else {
                            $scope.DB[$attrs.dataform].push(doc)
                        }
                        $scope.neo = {}

                        // if (save) {
                        //  $scope.neo = doc.id
                        //  $scope.submit()
                        // }
                    }
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
    ]).directive('datalist', [

        function() {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: function(elem, attr) {
                    return "templates/" + attr.datalist + '-list.html';
                },
                scope: true
            };
        }
    ]).controller('SignInController', ['$scope', '$rootScope', '$q',
        function($scope, $rootScope, $q, pouchDB) {
            $rootScope.DB = {}
            $rootScope.connected = false
            $rootScope.signup = false
            var cookie = readCookie("peerFeed")
                // if (cookie) {
                //     keys = nacl.box.keyPair.fromSecretKey(Base58.decode(cookie.key))

            //     console.log(keys)
            //     connectToPeerNode(keys, cookie.peerNode)
            // }

            $scope.password = "123"
            $scope.username = "v@k"
            $rootScope.netState = {}
            $scope.signIn = function() {
                console.log("signing in")
                peerFeed.peerNode = $scope.peernode
                peerFeed.crypto.getKeyPair($scope.password, $scope.username, function(boxKeys, signKeys) {
                    peerFeed.session.keys = boxKeys
                    peerFeed.session.signKeys = signKeys
                    peerFeed.session.keyPairReady = true
                        // Keep polling until we have a key pair
                    var keyReadyInterval = setInterval(function() {
                        if (peerFeed.session.keyPairReady) {
                            clearInterval(keyReadyInterval)


                            new Feed(boxKeys, signKeys).then(function(feed) {
                                $rootScope.connected = true
                                $rootScope.feed = feed
                                $rootScope.$apply()
                            })

                        }
                    })
                })

            };


        }
    ]).controller('DataController', ['$scope', '$rootScope', '$sce',
        function($scope, $rootScope, $sce) {
            $rootScope.feed.getProfile().then(function(profile) {
                console.log(profile)
                if (!profile[$rootScope.feed.signKey]) {
                    console.log("new user")
                }
            })



            $scope.DB = {}
                // $rootScope.get([$rootScope.peerFeedID])

            $scope.userID = 1
            console.log(peerFeed.session.keys)
            $scope.numit = numit
            $scope.trustSrc = function(src) {
                    return $sce.trustAsResourceUrl(src);
                }
                // console.log("data")
                // console.log($scope.connected)
                // $rootScope.Log("Connected.")

            $scope.peerFeedID = $rootScope.peerFeedID
            // $rootScope.secretDB.changes({
            //     since: 'now',
            //     live: true
            // }).on('change', function(change) {
            //     // handle change
            //     console.log(change)
            // })
            $scope.connectToWebSocket = function(anonymous) {
                if (anonymous == true) {
                    proxy = new rtcProxy(function() {
                        console.log("connected to websocket")
                        $scope.anonymousID = proxy.localID
                        $scope.connectedToWebSocket = true
                        $scope.$apply()

                    })
                } else {

                    config = {
                        keys: peerFeed.session.keys
                    }
                    proxy = new rtcProxy(config, function() {
                        console.log("connected to websocket")

                        $scope.connectedToWebSocket = true
                        $scope.$apply()
                        proxy.onNewChannel = function(channel) {
                            peerID = channel.peerID

                            console.log("new channel from:", peerID)
                            channel.onreceive = function(message) {
                                app = message.app
                                console.log("new message:", message)
                                if (!(app in $scope.DB)) {
                                    $scope.DB[app] = {}
                                }
                                if (!(peerID in $scope.DB[app])) {
                                    $scope.DB[app][peerID] = []
                                }
                                $scope.DB[app][peerID].push(message)
                                $scope.$apply()

                            }
                            $scope.connections[peerID] = {
                                online: true
                            };
                            $scope.connections[peerID].transmit = channel.transmit

                        }
                        proxy.onMediaStream = function(stream) {
                            peerID = stream.peerID

                            $scope.connections[peerID].stream = URL.createObjectURL(stream);

                            $scope.$apply()
                        }

                    })

                }
            }
            $scope.connections = {}

            $scope.connectTo = function(app, peerID, through, video) {
                if (!peerID) {

                }
                if (!(app in $scope.DB)) {
                    $scope.DB[app] = {}

                }
                if (!(peerID in $scope.DB[app])) {
                    $scope.DB[app][peerID] = []
                }
                if (video == true) {
                    navigator.webkitGetUserMedia({
                        "audio": true,
                        "video": true
                    }, function(stream) {
                        console.log("camera writing")
                        if (!($scope.peerFeedID in $scope.connections)) {
                            $scope.connections[$scope.peerFeedID] = {}
                        }
                        $scope.connections[$scope.peerFeedID].stream = URL.createObjectURL(stream);

                        proxy.createMediaConnection(peerID, stream, function(st) {
                            console.log(st)
                                // mediaPeer.onaddstream=function(evt){
                                //  console.log("added stream from ",peerID)
                                // }
                        })

                    }, function(err) {
                        console.log(err)
                    })
                } else {
                    proxy.connect(peerID, through, function(channel) {
                        channel.onreceive = function(message) {
                            console.log(message)
                            $scope.DB[message.app][peerID].push(message)
                            $scope.$apply()
                        }
                        $scope.connections[peerID] = {
                            online: true
                        };
                        $scope.connections[peerID].transmit = channel.transmit
                        channel.onclose = function() {
                            $scope.connections[peerID]["online"] = false;
                        }

                        // $scope.$watch("DB.["+ app +"]["+  peerID + "]", function(val, oldVal) {
                        //  // Do stuff
                        //  // channel.transmit(?)
                        //  console.log("watchhhhhhhhhhhhhhhhhhh",val,oldVal)
                        // });

                    })
                }
            }

            $scope.logout = function() {
                $.couch.logout({
                    success: function(data) {
                        console.log(data);
                        eraseCookie("peerFeed")
                        $rootScope.connected = false
                        $scope.$apply()
                    }
                });

            }

        }

    ])

peerFeed.encryptDoc = function(doc) {
    var header = {}

    mypeerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
    header._id = doc._id
    header._rev = doc._rev
        //console.log(doc)
    if (doc.data.share) {
        // share to peerfeedids
        // header.share = hashCodes(doc.data.share)
        header.share = hashCodes(doc.data.share)
        if (doc.data.share.indexOf(mypeerFeedID) == -1) {
            doc.data.share.push(mypeerFeedID)
        }
        doc = {
            to: doc.data.share,
            from: mypeerFeedID,
            mySecretKey: nacl.util.encodeBase64(peerFeed.session.keys.secretKey),
            message: doc
        }
    } else {
        // readable only by user
        doc = {
                to: [mypeerFeedID],
                from: mypeerFeedID,
                mySecretKey: nacl.util.encodeBase64(peerFeed.session.keys.secretKey),
                message: doc
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
            // console.log(
            //  nacl.util.decodeUTF8(JSON.stringify(decryptInfo.messageInfo)),
            //  decryptInfoNonces[i],
            //  Base58.decode(peerFeedIDs[i]).subarray(0, 32),
            //  mySecretKey
            // )
        decryptInfo.messageInfo = nacl.util.encodeBase64(
            nacl.box(nacl.util.decodeUTF8(
                    JSON.stringify(decryptInfo.messageInfo)
                ),
                decryptInfoNonces[i],
                Base58.decode(peerFeedIDs[i]).subarray(0, 32),
                mySecretKey))
        header.challenge.push(
                nacl.util.encodeBase64(nacl.box(nacl.hash(message),
                    decryptInfoNonces[i],
                    Base58.decode(peerFeedIDs[i]).subarray(0, 32),
                    mySecretKey)))
            //console.log(decryptInfo)
        decryptInfo = nacl.util.encodeBase64(nacl.box(nacl.util.decodeUTF8(JSON.stringify(decryptInfo)), decryptInfoNonces[i], Base58.decode(peerFeedIDs[i]).subarray(0, 32), messageKeypair.secretKey))
        header.decryptInfo[nacl.util.encodeBase64(decryptInfoNonces[i])] = decryptInfo
    }
    // console.log(header,doc)
    // data=msgpack.encode(header)
    // data=new Uint8Array(data)
    // data = JSON.stringify(header)
    // data = btoa(data)
    // finaldoc["_attachments"] = {
    //  'cipher': {
    //      content_type: 'text/json',
    //      data: data
    //  }
    // }
    // return finaldoc
    return header
}
peerFeed.decryptDoc = function(header, keys) {
    console.log("decrypt " + header._id)
        // cipher = header._attachments.cipher.data

    // data=nacl.util.decodeBase64(data)
    // data=msgpack.decode(data.buffer)

    // cipher = atob(cipher)
    // cipher = JSON.parse(cipher)
    // cipher._id = header._id
    // cipher._rev = header._rev
    // cipher.share = header.share
    // header = cipher
    if (keys) {
        // console.log(keys)
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
            ({}).hasOwnProperty.call(header.challenge, i) && peerFeed.util.validateNonce(i, 24)) {
            var challengeTrue = nacl.box.open(nacl.util.decodeBase64(header.challenge[i]), nacl.util.decodeBase64(i), nacl.util.decodeBase64(header.ephemeral), mySecretKey)
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
    data._id = header._id
    data._rev = header._rev

    console.log(data)
    return data
}
var hashCodes = function(arr) {
    var str
    var char
    var hashes = []
    for (i in arr) {
        str = arr[i]
        var hash = 0;
        if (str.length == 0) return hash;
        for (var j = 0; j < str.length; j++) {
            char = str.charCodeAt(j);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        hashes[i] = hash.toString()
    }
    return hashes;
}
var hashCode = function(str) {
    var str
    var char
    var hash = 0;
    if (str.length == 0) return hash;
    for (var j = 0; j < str.length; j++) {
        char = str.charCodeAt(j);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}

function isEmpty(o) {
    for (var p in o) {
        if (o.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
}

function peerpouch() {
    var NAME = location.hash.slice(1) || "noname",
        HUB_URL = "http://localhost:5984/stun",
        SHARE_URL = "idb://peerpouch-test-" + NAME;
    queue().defer(PouchDB, HUB_URL).defer(PouchDB, SHARE_URL).await(function(e, hub, local) {
        if (e) throw e;
        window.dbgLocal = local; // expose for console inspection
        setInterval(function() {
            var id = NAME + '_at_' + Date.now();
            local.put({
                _id: id
            });
        }, 15e3);
        local.changes({
            since: 'latest',
            continuous: true,
            onChange: function(chg) {
                var src = chg.id.split('_at_')[0];
                if (src !== NAME) console.log("Got non-local change", chg.id);
            }
        });
        // share our local database
        hub.shareDatabase(local, function(e, d) {
            if (e) throw e;
        });
        // and open whichever other database gets shared next
        console.log("Waiting for a new share to appear.");
        var listener = hub.getSharedDatabases({
            onChange: function(d) {
                listener.cancel();
                console.log("Trying to connect to", d.dbname);
                PouchDB(d.dbname, function(e, remote) {
                    if (e) throw e;
                    window.dbgRemote = remote; // expose for console inspection
                    console.log("Opened remote", remote);
                    PouchDB.replicate(remote, local, {
                        continuous: true,
                        onChange: function(change) {
                            console.log("RX CHANGE FROM REMOTE", change);
                        }
                    });
                    PouchDB.replicate(local, remote, {
                        continuous: true,
                        onChange: function(change) {
                            console.log("TX CHANGE TO REMOTE", change);
                        }
                    });
                });
            }
        }, function() { /*ignore existing*/ });
    });
}

function createCookie(name, value, days) {
    if (typeof value == "object") {
        value = JSON.stringify(value)
    }
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            var value = c.substring(nameEQ.length, c.length);
            try {
                value = JSON.parse(value);
                return value
            } catch (e) {
                return value
            }

        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
