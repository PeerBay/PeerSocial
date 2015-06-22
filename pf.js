angular.module('peerFeedApp', ['luegg.directives','angular-bootstrap-select',
  'angular-bootstrap-select.extra'])
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
	}).directive('appFilereader', function($q) {
    var slice = Array.prototype.slice;

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() {};

                element.bind('change', function(e) {
                    var element = e.target;
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

                }); //change

            } //link
    }; //return
}).directive('dataform', [

		function() {
			return {
				restrict: 'A',
				replace: true,
				templateUrl: function(elem, attr) {
					return "templates/"+attr.dataform + '-form.html';
				},
				scope: true,
				controller: function($rootScope, $scope, $element, $attrs) {
					$scope.neo = {}
					$scope.temp={}
					$scope.attach={}
					$scope.myImage=''
					$scope.transmit = function(save) {
						doc = angular.extend($scope.neo, $scope.rel)
						if (!doc.id) {
							doc.id = Date.now();
						}

						doc.app=$attrs.dataform
						console.log(doc)
						
						if($attrs.instance in $scope.DB[$attrs.dataform]){
							$scope.DB[$attrs.dataform][$attrs.instance].push(doc)
							$scope.connections[$attrs.instance].transmit(doc)
						}else{
							$scope.DB[$attrs.dataform].push(doc)
						}
						$scope.neo = {}

						// if (save) {
						// 	$scope.neo = doc.id
						// 	$scope.submit()
						// }
					}
					$scope.submit = function() {
						console.log($scope.neo)
						// console.log($attrs.dataform, $scope.neo, $scope.rel)

						doc = {}
						doc = angular.extend($scope.neo, $scope.rel)
						if (!doc.id) {
							doc.id = Date.now();
						}

						if ($attrs.dataform in $scope.DB && doc.id in $scope.DB[$attrs.dataform]) {
							doc = angular.extend($scope.DB[$attrs.dataform][doc.id], doc)
						}
						console.log(doc)
						$rootScope.secretDB.rel.save($attrs.dataform, doc).then(function(res) {
							console.log(res)

							if($scope.attach){
								for(a in $scope.attach){
									console.log($scope.attach[a])
									$rootScope.secretDB.rel.putAttachment($attrs.dataform,
									 {id:res[$attrs.dataform][0].id,rev:res[$attrs.dataform][0].rev},
									  a,
									   $scope.attach[a],
									    $scope.attach[a].type)
								}

							}
							for (i in res) {
								if (i in $scope.DB) {
									$scope.DB[i][res[i][0].id] = res[i][0]
								} else {
									$scope.DB[i] = {}
									$scope.DB[i][res[i][0].id] = res[i][0]
								}
							}
							$scope.neo = {}
							$scope.$apply()
						});
					}
				},
			};
		}
	]).directive('admin', [

		function() {
			return {
				restrict: 'A',
				replace: true,
				templateUrl: function(elem, attr) {
					return 'templates/admin.html';
				},
				scope: true,
				controller: function($rootScope, $scope, $element, $attrs) {
					$scope.password = ""
					$scope.login = function() {
						var adminWord = nacl.util.decodeUTF8($scope.password)
						peerFeed.admin.seed = nacl.hash(adminWord)
						adminKeyPair = nacl.box.keyPair.fromSecretKey(peerFeed.admin.seed)
						var accountRequests = new PouchDB($rootScope.peernode + "/accountrequests")
						$scope.accountRequests = []
						accountRequests.allDocs({
							include_docs: true
						}).then(
							function(response) {
								if (response) {
									for (i in response.rows) {
										// console.log(response)
										if (response.rows[i].id.indexOf("design") == -1) {
											$scope.accountRequests.push(
												peerFeed.decryptDoc(response.rows[i].doc, adminKeyPair).data
											)
										}
									}
									$scope.$apply()
									// console.log($scope.accountRequests)
								}
							}
						)
					};
					$scope.createAccount = function(request) {
						var username = null
						if (request.public) {
							username = request.username
						}
						peerFeed.admin.login({
							"func": peerFeed.admin.createUser,
							"data": [request.peerFeedID, username, {
								"func": peerFeed.admin.logout,
								"data": []
							}]
						})
					}
				}
			};
		}
	]).directive('datalist', [

		function() {
			return {
				restrict: 'A',
				replace: true,
				templateUrl: function(elem, attr) {
					return "templates/"+attr.datalist + '-list.html';
				},
				scope: true
			};
		}
	]).directive('datashare', [

		function() {
			return {
				restrict: 'A',
				replace: true,
				templateUrl: function(elem, attr) {
					return 'templates/share.html';
				},
				scope: true,
				controller: function($rootScope, $scope, $element, $attrs) {
					// var db = PouchDB("secret-" + $rootScope.simpleID)
					// db.setSchema([{
					// 	singular: 'share',
					// 	plural: 'shares',
					// 	relations: {
					// 		'persons': {
					// 			hasMany: {
					// 				type: 'person',
					// 				options: {
					// 					async: true
					// 				}
					// 			}
					// 		}
					// 	}
					// }])
					$rootScope.secretDB.rel.find("peerFeed", $rootScope.peerFeedID)
						.then(function(response) {
							if ($rootScope.peerFeedID in response.peerFeeds) {
								$scope.DB.peerFeeds = response.peerFeeds
							} else {
								$rootScope.secretDB.rel.save("peerFeed", {
									id: $rootScope.peerFeedID,
									person: $rootScope.peerFeedID,
									friends: [],
									apps: [],
									friendRequests: []
								})
							}
						})
					$scope.getFriendRequests = function() {
						$scope.DB.get("friendRequests")
					}
					$scope.getKnownUsers = function() {
						$scope.knownUsers = []
						PouchDB(peerFeed.peerNode + "/nodeusers")
							.allDocs({
								include_docs: true
							})
							.then(function(nodeUsers) {
								nodeUsers.rows.map(function(nodeUser) {
									// console.log(nodeUser)
									$scope.knownUsers.push({
										username: nodeUser.id.split("@")[0],
										peerFeedID: nodeUser.doc.peerFeedID,
										peerNode: peerFeed.peerNode
									})
								})
							})
					}
					$scope.getAllFriends = function() {
						// $scope.friends=[{peerMail:"",peerFeedID:""}]
					}
					$scope.sendFriendRequest = function(user) {
						date = Date.now()
						// console.log(user)
						var doc = {
							_id: "friendRequest_1_000" + date,
							data: {
								person: $rootScope.peerFeedID,
								peerFeed: user.peerFeedID,
								peerNode: $rootScope.peernode,
								message: user.message,
								share: new Array(user.peerFeedID)
							}
						}
						console.log(doc)
						$rootScope.secretDB.put(peerFeed.encryptDoc(doc))
							.then(function(response) {
								console.log(response)
							})
						if (user.peerNode == peerFeed.peerNode) {
							target = "p-" + user.peerFeedID.toLowerCase()
						} else {
							target = user.peerNode + "/p-" + user.peerFeedID.toLowerCase()
						}
						var repDoc = {
							"_id": "replication_" + $rootScope.peerFeedID.toLowerCase() + hashCode(user.peerFeedID),
							"source": "s-" + $rootScope.peerFeedID.toLowerCase(),
							"target": target,
							"filter": "replica/repfilter",
							"query_params": {
								"repid": hashCode(user.peerFeedID)
							},
							"continuous": true,
							// "connection_timeout": 30000,
							// "retries_per_request": 1000,
							"user_ctx": $rootScope.userCtx
						}
						PouchDB(peerFeed.peerNode + "/_replicator")
							.put(repDoc)
							.then(function(res) {
								//console.log(res)
							})
						peerFeed.DB.rel.saveAttr("person", $rootScope.peerFeedID, "share", user.peerFeedID)
						$rootScope.secretDB.rel.save("friend", {
							id: user.peerFeedID,
							peerFeed: $rootScope.peerFeedID,
							person: user.peerFeedID
						}).then(function(response) {
							//console.log(response)
						})
					}
					$scope.acceptFriendRequest = function(user) {
						// start replication
						console.log(user);
						if (user.peerNode == peerFeed.peerNode) {
							target = "p-" + user.person.toLowerCase()
						} else {
							target = user.peerNode + "/p-" + user.person.toLowerCase()
						}
						var repDoc = {
							"_id": "replication_" + $rootScope.peerFeedID.toLowerCase() + hashCode(user.person),
							"source": "s-" + $rootScope.peerFeedID.toLowerCase(),
							"target": target,
							"filter": "replica/repfilter",
							"query_params": {
								"repid": hashCode(user.person)
							},
							"continuous": true,
							// "connection_timeout": 30000,
							// "retries_per_request": 1000,
							"user_ctx": $rootScope.userCtx
						}
						PouchDB(peerFeed.peerNode + "/_replicator")
							.put(repDoc)
							.then(function(res) {
								console.log(res)
							})
						user.accepted = true;
						user.share = new Array(user.peerFeedID)
						peerFeed.DB.rel.saveAttr("person", $rootScope.peerFeedID, "share", user.person)
						// PouchDB(user.peerNode + "/p-" + user.peerFeedID.toLowerCase())
						// 	.put(peerFeed.encryptDoc(doc))
						// 	.then(function(response) {
						// 		console.log(response)
						// 	})
						$rootScope.secretDB.rel.save("friend", {
							id: user.person,
							peerFeed: $rootScope.peerFeedID,
							person: user.person
						}).then(function(response) {
							console.log(response)
						})
						$rootScope.secretDB.rel.save("friendRequest", user)
							.then(function(response) {
								console.log(response)
							})
					}
					$scope.removeFriendRequest = function() {
						// update friend request doc with inactive and delete
					}
					$scope.rejectFriendRequest = function() {
						// update friend request doc with rejection
					}
					$scope.removeFriend = function(peerFeedID) {
						// remove replication
					}
					$scope.searchFriend = function(friendName) {
						//
					}
					$scope.removePeernode = function(peerNodeURL) {}
					$scope.backupData = function() {}
					$scope.addPeerNode = function(peerNodeURL) {
						if (peerNodeURL.split(".").slice(-1)[0] === "pb") {
							findPeerNodePublicKey(peerNodeURL)
						} else {
							if (!($scope.knownUsers)) {
								$scope.knownUsers = {}
							}
							$scope.knownUsers[peerNodeURL] = []
							PouchDB("https://" + peerNodeURL + "/nodeusers")
								.allDocs({
									include_docs: true
								})
								.then(function(nodeUsers) {
									nodeUsers.rows.map(function(nodeUser) {
										$scope.knownUsers.push({
											username: nodeUser.id,
											peerFeedID: nodeUser.doc.peerFeedID,
											peerNode: "https://" + peerNodeURL
										})
									})
								})
						}
					}

					function findPeerNodePublicKey(peerNodeURL) {}
				}
			}
		}
	]).controller('SignInController', ['$scope', '$rootScope',
		function($scope, $rootScope, pouchDB) {
			$rootScope.log = []
			$rootScope.Log = function(log) {
				len = $rootScope.log.length
				$rootScope.log.push({
					line: len,
					log: log
				})
			}
			$rootScope.peernode = $scope.peernode = window.location.origin+"/db"
			$scope.username = "vasilis"
			$scope.password = "9411662"
			$rootScope.connected = false
			$rootScope.signup = false
			$scope.signIn = function() {
				console.log($scope.username, $scope.peernode, $scope.password)
				peerFeed.peerNode = $scope.peernode
				$rootScope.Log($scope.password, $scope.username)
				peerFeed.crypto.getKeyPair($scope.password, $scope.username, function(keyPair) {
					peerFeed.session.keys = keyPair
					peerFeed.session.keyPairReady = true
					// Keep polling until we have a key pair
					var keyReadyInterval = setInterval(function() {
						if (peerFeed.session.keyPairReady) {
							clearInterval(keyReadyInterval)
							console.log(peerFeed.session.keys)
							var mypeerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
							// $rootScope.Log("peerFeedID:" + mypeerFeedID)
							$rootScope.simpleID = mypeerFeedID.toLowerCase()
							$rootScope.peerFeedID = mypeerFeedID
							$.couch.urlPrefix = $scope.peernode;
							peerFeed.session.connected = false
							PouchDB($scope.peernode + "/credentials").get("admin").then(function(response) {
								adminPublicKey = Base58.decode(response.peerFeedID).subarray(0, 32)
								PouchDB($scope.peernode + "/credentials").get(mypeerFeedID).then(function(data) {
									cipher = nacl.util.decodeBase64(data.cipher)
									nonce = nacl.util.decodeBase64(data.nonce)
									//console.log(data);
									credentials = nacl.box.open(cipher, nonce, adminPublicKey, peerFeed.session.keys.secretKey)
									credentials = nacl.util.encodeUTF8(credentials)
									couchName = credentials.substring(0, credentials.length / 2)
									couchPassword = credentials.substring(credentials.length / 2)
									$.couch.login({
										name: couchName,
										password: couchPassword,
										success: function(data) {
											console.log(data)
											delete data.ok
											$rootScope.userCtx = data
											peerFeed.DB = $rootScope.secretDB = new PouchDB("secret-" + $rootScope.simpleID)
											$rootScope.secretDB.setSchema([{
												singular: 'peerFeed',
												plural: 'peerFeeds',
												relations: {
													friends: {
														hasMany: "friend"
													},
													friendRequests: {
														hasMany: "friendRequest"
													}
												}
											}, {
												singular: 'friendRequest',
												plural: 'friendRequests',
												relations: {
													person: {
														belongsTo: "person"
													}
												}
											}, {
												singular: 'friend',
												plural: 'friends',
												relations: {
													person: {
														belongsTo: "person"
													}
												}
											}, {
												singular: 'person',
												plural: 'persons',
												relations: {
													'posts': {
														hasMany: {
															type: 'post',
															options: {
																async: true
															}
														}
													},
													'comments': {
														hasMany: {
															type: 'comments',
															options: {
																async: true
															}
														}
													}
												}
											}, {
												singular: 'post',
												plural: 'posts',
												relations: {
													'person': {
														belongsTo: {
															type: 'person',
															options: {
																async: false
															}
														}
													},
													'comments': {
														hasMany: {
															type: 'comment',
															options: {
																async: true
															}
														}
													}
												}
											}, {
												singular: 'comment',
												plural: 'comments',
												relations: {
													'post': {
														belongsTo: {
															type: 'post',
															options: {
																async: true
															}
														}
													},
													'person': {
														belongsTo: {
															type: 'person',
															options: {
																async: false
															}
														}
													}
												}
											}]);
											$rootScope.connected = true;
											$rootScope.$apply();
											$rootScope.Log("Connected")
											console.log(peerFeed.session.keys)
										},
										error: function(status) {}
									});
								})
							})
						}
					})
				})
			}
		}
	]).controller('SignUpController', ['$scope', '$rootScope',
		function($scope, $rootScope) {
			$scope.user = {
				peernode: window.location.origin,
				username: "bob",
				password: "9411662",
				message: "hello",
				email: "bob@peerbay.net",
				shownname: "bob marley",
				public: true
			}
			$scope.signUp = function() {
				console.log($scope.user)
				$.couch.urlPrefix = $scope.user.peernode;
				$.couch.session({
					success: function(r) {
						peerFeed.peerNode = $scope.user.peernode
						if (r.userCtx.roles.indexOf("_admin") != -1) {
							if ($scope.user.adminpassword == undefined) {
								$scope.adminParty = true
								$scope.$apply()
								$rootScope.Log("Empty peernode.Please insert admin password.")
							} else {
								peerFeed.crypto.getKeyPair($scope.user.password, $scope.user.username, function(keyPair) {
									peerFeed.session.keys = keyPair
									peerFeed.session.keyPairReady = true
									// Keep polling until we have a key pair
									var keyReadyInterval = setInterval(function() {
										if (peerFeed.session.keyPairReady) {
											clearInterval(keyReadyInterval)
											if ($scope.adminParty) {
												peerFeed.newPeerNode($scope.user)
											}
											PouchDB(peerFeed.peerNode + "/credentials").get("admin").then(function(response) {
												console.log(response.peerFeedID)
												$rootScope.signup = false;
											})
										}
									})
								})
							}
						} else {
							peerFeed.crypto.getKeyPair($scope.user.password, $scope.user.username, function(keyPair) {
								peerFeed.session.keys = keyPair
								peerFeed.session.keyPairReady = true
								// Keep polling until we have a key pair
								var keyReadyInterval = setInterval(function() {
									if (peerFeed.session.keyPairReady) {
										clearInterval(keyReadyInterval)
										$rootScope.peerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
										PouchDB(peerFeed.peerNode + "/credentials")
											.get("admin")
											.then(
												function(data) {
													console.log(data.peerFeedID)
													var doc = {
														_id: "request_1_000" + Date.now(),
														data: {
															share: new Array(data.peerFeedID),
															username: $scope.user.shownname,
															email: $scope.user.email,
															message: $scope.user.message,
															peerFeedID: $rootScope.peerFeedID,
															public: $scope.user.public
														}
													}
													PouchDB(peerFeed.peerNode + "/accountrequests")
														.put(peerFeed.encryptDoc(doc)).then(
															function(r) {
																console.log(r)
																$rootScope.Log("Your account request has been made." +
																	"When the admin sees it you will be informed by email or you can try to login.")
															})
												}
										)
									}
								})
							})
						}
					}
				})
			}
		}
	]).controller('DataController', ['$scope', '$rootScope','$sce',
		function($scope, $rootScope , $sce) {
			$scope.DB = {}
			$scope.userID = 1
			console.log(peerFeed.session.keys)
			$scope.trustSrc = function(src) {
				return $sce.trustAsResourceUrl(src);
			}
			// console.log("data")
			// console.log($scope.connected)
			// $rootScope.Log("Connected.")

			$scope.peerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
			console.log($scope.peerFeedID);
			var simpleID = $scope.peerFeedID.toLowerCase()
			console.log("sync starting!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1")
			$rootScope.secretDB.replicate.to(peerFeed.peerNode + "/s-" + simpleID, {
				live: true,
				retry: true,
				onChange: function(change) {
					console.log(change)
				}
			})
			var rep = $rootScope.secretDB.replicate.from(peerFeed.peerNode + "/p-" + simpleID, {
					live: true,
					retry: true,
					onChange: function(change) {
						console.log(change)
					}
				})
				// publicDB.allDocs()
				// 	.then(function(newDocs) {
				// 		var newFeedItems = []
				// 		var oldFeedItems = []
				// 		newDocs.rows.map(function(newDoc) {
				// 			var oldDoc = newDoc
				// 			try {
				// 				delete newDoc._rev
				// 				newFeedItems.push(peerFeed.decryptDoc(newDoc))
				// 			} catch (e) {
				// 				console.log("Can't decrypt Doc",e)
				// 			}
				// 			oldDoc._deleted = true;
				// 			oldFeedItems.push(oldDoc)
				// 		})
				// 		publicDB.bulkDocs(oldFeedItems)
				// 		.then(function(res){console.log(res)})
				// 		$rootScope.secretDB.bulkDocs(newFeedItems)
				// 		.then(function(res){console.log(res)})
				// 	})
			$rootScope.secretDB.changes({
				since: 'now',
				live: true
			}).on('change', function(change) {
				// handle change
				// console.log(change)
				if (!change.id.startsWith("_design")) {
					parser = $rootScope.secretDB.rel.parseDocID(change.id);
					$scope.DB.get(parser.type + "s", parser.id, {
						changed: true
					})
				}
				// $rootScope.secretDB.replicate.to("http://localhost:5984/s-" + simpleID, {
				//     retry: true
				// })
			})
			// .on('change', function(info) {
			//     // handle change
			//     console.log(info)
			//     if (info.change.docs[0]) {
			//         parser = $rootScope.secretDB.rel.parseDocID(info.change.docs[0]._id);
			//         $scope.DB.get(parser.type, parser.id)
			//     }
			// })
			$rootScope.secretDB.replicate.from(peerFeed.peerNode + "/s-" + simpleID, {
				retry: true,
				'complete': function(info) {
					$rootScope.Log("Sync " + info.ok)
				}
			})
			// .on('change', function(info) {
			//     // handle change
			//     console.log(info)
			//     if (info.change.docs[0]) {
			//         parser = $rootScope.secretDB.rel.parseDocID(info.change.docs[0]._id);
			//         $scope.DB.get(parser.type, parser.id)
			//     }
			// })
			
			$scope.connectToWebSocket=function(anonymous){
				if(anonymous==true){
					proxy=new rtcProxy(function(){
						console.log("connected to websocket")
						$scope.anonymousID=proxy.localID
						$scope.connectedToWebSocket=true
						$scope.$apply()

					})
				}else{
					
					config={
						keys:peerFeed.session.keys
					}
					proxy=new rtcProxy(config,function(){
												console.log("connected to websocket")

						$scope.connectedToWebSocket=true
						$scope.$apply()
						proxy.onNewChannel=function(channel){
							peerID=channel.peerID

							console.log("new channel from:",peerID)
							channel.onreceive=function(message){
								app=message.app
								console.log("new message:",message)
								if (!(app in $scope.DB)) {
									$scope.DB[app] = {}
								}
								if (!(peerID in $scope.DB[app])) {
									$scope.DB[app][peerID] = []
								}
								$scope.DB[app][peerID].push(message)
								$scope.$apply()
								
							}
							$scope.connections[peerID]={online:true};
							$scope.connections[peerID].transmit=channel.transmit

						}
						proxy.onMediaStream=function(stream){
							peerID=stream.peerID
						
							$scope.connections[peerID].stream=URL.createObjectURL(stream);

							$scope.$apply()
						}

					})

				}
							}
			$scope.connections={}

			$scope.connectTo = function(app, peerID, through,video) {
				if (!peerID) {
					
				}
				if (!(app in $scope.DB)) {
					$scope.DB[app] = {}

				}
				if (!(peerID in $scope.DB[app])) {
					$scope.DB[app][peerID] = []
				}
				if(video==true){
					navigator.webkitGetUserMedia({ "audio": true, "video": true }, function (stream) {
						console.log("camera writing")
						if(!($scope.peerFeedID in $scope.connections)){
							$scope.connections[$scope.peerFeedID]={}	
						}
						$scope.connections[$scope.peerFeedID].stream=URL.createObjectURL(stream);

	        			proxy.createMediaConnection(peerID,stream,function(st){
	        				console.log(st)
	        				// mediaPeer.onaddstream=function(evt){
	        				// 	console.log("added stream from ",peerID)
	        				// }
	        			})

        			},function(err){console.log(err)})
				}else{
					proxy.connect(peerID, through, function(channel) {
						channel.onreceive = function(message) {
							console.log(message)
							$scope.DB[message.app][peerID].push(message)
							$scope.$apply()
						}
						$scope.connections[peerID]={online:true};
						$scope.connections[peerID].transmit=channel.transmit
						channel.onclose=function(){
							$scope.connections[peerID]["online"]=false;
						}
					


						// $scope.$watch("DB.["+ app +"]["+  peerID + "]", function(val, oldVal) {
						// 	// Do stuff
						// 	// channel.transmit(?)
						// 	console.log("watchhhhhhhhhhhhhhhhhhh",val,oldVal)
						// });

					})
				}
			}
			$scope.DB.get = function(app, id, opts) {
				if (!(app in $scope.DB)) {
					$scope.DB[app] = {}
				}
				if (id in $scope.DB[app] && opts && !(opts.changed)) {
					return
				}
				if (id) {
					$rootScope.secretDB.rel.find(app, id).then(function(res) {
						//console.log(res)
						$rootScope.Log("Getting " + app + " with id:" + id)
						for (i in res) {
							if (!(i in $scope.DB)) {
								$scope.DB[i] = {}
								//console.log($scope.DB)
							}
							$scope.DB[i] = angular.extend($scope.DB[i], res[i])
							$scope.$apply()
						}
					})
				} else {
					$rootScope.secretDB.rel.find(app).then(function(res) {
						$rootScope.Log("Getting " + app)
						//console.log(res)
						for (i in res) {
							if (!(i in $scope.DB)) {
								$scope.DB[i] = {}
							}
							$scope.DB[i] = angular.extend($scope.DB[i], res[i])
							$scope.$apply()
						}
					})
				}
			}
		}



	])

peerFeed.newPeerNode = function(user) {
	$.couch.db("accountrequests").create({
		success: function(data) {
			console.log(data);
		}
	});
	$.couch.db("nodeusers").create({
		success: function(data) {
			console.log(data);
		}
	});
	$.couch.db("credentials").create({
		success: function(data) {
			console.log(data);
			var adminWord = nacl.util.decodeUTF8(user.adminpassword)
			peerFeed.admin.seed = nacl.hash(adminWord)
			var adminKeyPair = nacl.box.keyPair.fromSecretKey(peerFeed.admin.seed)
			var adminNonce = peerFeed.crypto.getNonce()
			var credentials = peerFeed.util.getRandomCredentials()
			var cipherWord = nacl.box(nacl.util.decodeUTF8(credentials), adminNonce, peerFeed.session.keys.publicKey, adminKeyPair.secretKey)
			cipherWord = nacl.util.encodeBase64(cipherWord)
			adminNonce = nacl.util.encodeBase64(adminNonce)
			console.log({
				"word": adminWord,
				"nonce": adminNonce,
				"pk": adminKeyPair.publicKey
			})
			var adminName = credentials.substring(0, credentials.length / 2)
			var adminPassword = credentials.substring(credentials.length / 2)
			console.log({
				"adminName": adminName,
				"adminPass": adminPassword
			})
			var mypeerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
			var doc = {
				"_id": "admin",
				"peerFeedID": peerFeed.crypto.getpeerFeedID(adminKeyPair.publicKey),
				"cipher": cipherWord,
				"nonce": adminNonce,
				"emergency": {
					"adminName": adminName,
					"adminPass": adminPassword
				}
			};
			$.couch.db("credentials").saveDoc(doc, {
				success: function(data) {
					console.log(data);
				}
			});
			var username = null
			if (user.public) {
				username = user.shownname
			}
			$.couch.config({
				success: function(r) {
					console.log(r)
					setTimeout(function() {
						peerFeed.admin.login({
							"func": peerFeed.admin.bootstrapNode,
							"data": [adminName, {
								"func": peerFeed.admin.createUser,
								"data": [mypeerFeedID, username, {
									"func": peerFeed.admin.logout,
									"data": []
								}]
							}]
						});
					}, 200)
				}
			}, "admins", adminName, adminPassword);
		},
		error: function(status) {
			console.log(status);
		}
	});
}
peerFeed.session.login = function() {
	mypeerFeedID = peerFeed.crypto.getpeerFeedID(peerFeed.session.keys.publicKey)
	$.couch.db("credentials").openDoc("admin", {
		success: function(data) {
			adminPublicKey = Base58.decode(data.peerFeedID).subarray(0, 32)
			$.couch.db("credentials").openDoc(mypeerFeedID, {
				success: function(data) {
					cipher = nacl.util.decodeBase64(data.cipher)
					nonce = nacl.util.decodeBase64(data.nonce)
					//console.log(data);
					credentials = nacl.box.open(cipher, nonce, adminPublicKey, peerFeed.session.keys.secretKey)
					credentials = nacl.util.encodeUTF8(credentials)
					couchName = credentials.substring(0, credentials.length / 2)
					couchPassword = credentials.substring(credentials.length / 2)
					$.couch.login({
						name: couchName,
						password: couchPassword,
						success: function(data) {
							//console.log(data);
						},
						error: function(status) {
							//console.log(status);
						}
					});
				},
				error: function(status) {
					//console.log(status);
				}
			});
		}
	})
}
peerFeed.session.logout = function(empty) {
	$.couch.logout({
		success: function(data) {
			//console.log(data);
		}
	});
}
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
		// 	nacl.util.decodeUTF8(JSON.stringify(decryptInfo.messageInfo)),
		// 	decryptInfoNonces[i],
		// 	Base58.decode(peerFeedIDs[i]).subarray(0, 32),
		// 	mySecretKey
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
	return header;
}
peerFeed.decryptDoc = function(header, keys) {
	//console.log(header)
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
	// console.log(data)
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