// subscribe and call functions available
var onion = new Onion()

function Feed(boxKeys, signKeys) {
    var self = this
    this.signKey = nacl.util.encodeBase64(signKeys.publicKey)
    this.signKeys = signKeys
    this.boxKeys = boxKeys

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
    createProfile: function() {
        // create two docs
        // public profile signid (stores public signed info about user)
        // private settings boxid (stores private encrypted settings of the user)

    },
    getProfile: function() {
        return this.get([this.signKey])
    },
    get: function(docIds) {
        var self = this
        console.log("getting", docIds)
        return new Promise(function(resolve, reject) {
            self.onion.call("get", docIds).then(function(docs) {
                resolve(docs)
            })

        })
    },
    myWall: functioneturn new Promise(function(resolve, reject) {
            self.onion.call("get", docIds).then(function(docs) {
                resolve(docs)
            })

        })
    },
    myWall: function((eturn new Promise(function(resolve, reject) {
            self.onion.call("get", docIds).then(function(docs) {
                resolve(docs)
            })

        })
    },
    myWall: function() {
        // return a stream with onchange callback
    },
    loadAndFollow: function(feedID) {
        // return a stream with last ten posts with onchange callback and load previous ten posts function
    	
    },

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
