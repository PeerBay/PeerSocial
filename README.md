Peer Social (PeerBay) 

Anonymous, private decentralized social network and news feed.


Uses webrtc-based onion routing(like TOR-project) for anonymity and 
public-key signing and encryption for privacy and distributed control.


Also couchdb version 2 is required for database clustering.
Server(backend.js) and client(web folder).


Requires crossbar.io and couchdb with a database named 'feeds' and 
the design document 'couchdb_views.json'. 


To run:
cd PeerSocial
crossbar start

Todo:
Run an ice server
Download random ice server list to the browser
Download peernode list 
Download peerhub list
Store everything on pouchdb 
Initial connection through
Peernode management ui

Protocol:
First time on specific browser:
PeerFeed instance A connects to peerbay.net 
and downloads software and peerbay's 
current signing keys.
