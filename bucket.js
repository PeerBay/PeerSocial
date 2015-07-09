//Used to move an element from one index to another inside of an array
//Array.move Prototype


function DHT() {

}

DHT.prototype = {

	arrayMove: function(arr,old_index, new_index) {
		if (new_index >= arr.length) {
			var k = new_index - arr.length;
			while ((k--) + 1) {
				arr.push(undefined);
			}
		}
		arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
		return arr; // for testing purposes
	},
	//Function taken from crypto.js
	//Converts a hex string (like SHA1) to an array of bytes
	hexToBytes: function(hex) {
		for (var bytes = [], c = 0; c < hex.length; c += 2)
			bytes.push(parseInt(hex.substr(c, 2), 16));
		return bytes;
	},
	//Function taken from crypto.js
	//Converts an array of bytes to a hex string
	bytesToHex: function(bytes) {
		for (var hex = [], i = 0; i < bytes.length; i++) {
			hex.push((bytes[i] >>> 4).toString(16));
			hex.push((bytes[i] & 0xF).toString(16));
		}
		return hex.join("");
		// return hex
	},
	//Define constants
	IdLength: 32,
	equals: function(node1, node2) {
		for (var i = 0; i < this.IdLength; i++) {
			if (node1[i] != node2[i]) {
				return false;
			};
		}
		return true;
	},
	less: function(node1, node2) {
		for (var i = 0; i < this.IdLength; i++) {
			if (node1[i] != node2[i]) {
				return node1[i] < node2[i];
			}
		}
		return false;
	},
	Xor: function(node1, node2) {
		var ret = [];
		for (var i = 0; i < this.IdLength; i++) {
			ret[i] = node1[i] ^ node2[i];
		}
		return ret;
	},
	//Number of leading zeros
	prefixLen: function(node) {
		for (var i = 0; i < this.IdLength; i++) {
			for (var j = 0; j < 8; j++) {
				if ((node[i] >> 7 - j & 0x1) != 0) {
					return i * 8 + j;
				}
			}
		}
		return this.IdLength * 8 - 1;
	},

	// For the implemention of the Routing Table that each node holds, we have the following:
	newRoutingTable: function(node) {
		//Define the routing table struct;
		var routingTable = {
			'buckets': [],
			node: node
		};
		//Create the buckets
		for (var i = 0; i < this.IdLength * 8; i++) {
			routingTable.buckets[i] = []
		}
		//and the node
		routingTable.node = node;
		this.routingTable = routingTable;
	},
	update: function(nodes) {
		if (typeof(nodes) == "string") {
			nodes = [nodes]
		}
		table = this.routingTable
		for (i in nodes) {
			node = nodes[i]
			var found = false;
			var prefix_len = this.prefixLen(node);
			bucket = table.buckets[prefix_len];
			//First check wether the node is already contained within the bucket.
			equals = this.equals
            arrayMove=this.arrayMove
			table.buckets[prefix_len].map(function(x) {
				if (equals(x, node)) {
					var pos = table.buckets[prefix_len].indexOf(x);
                    table.buckets[prefix_len]=arrayMove(table.buckets[prefix_len],pos, 0)
					found = true;
				}
			});
			if (found == false) {
				//Now - if it's not in the bucket - check wether the bucket is full.
				if (table.buckets[prefix_len].length < this.BucketSize) {
					table.buckets[prefix_len].push(node);
					// TODO: Handle insertion when the list is full by evicting old elements if
					// they don't respond to a ping.
				}
			}
		}
	},

	//So far - so good. We also need to be able to find the closest peers to a particular node. Nick has called this a distance \"vector\". I shall stick with this naming.
	copyToVector: function(bucket, target, vector) {
		for (var i = 0; i < bucket.length; i++) {
			console.log('copyToVector: The bucket is:' + bucket[i]);
			console.log('copyToVector: The distance is: ' + this.Xor(bucket[i], target))
			vector[i] = {
				node: bucket[i],
				distance: this.Xor(bucket[i], target)
			};
		};
		return vector;
	},

	findClosest: function(node) {
		count = this.BucketSize;
		table = this.routingTable;
		var vector = [];
		bucket_num = this.prefixLen(this.Xor(node, table.node));
		bucket = table.buckets[bucket_num];
		this.copyToVector(bucket, node, vector);
		for (var i = 1;
			(bucket_num - i >= 0 || bucket_num + i < this.IdLength * 8) && vector.length < count; i++) {
			if (bucket_num - i >= 0) {
				bucket = table.buckets[bucket_num - i];
				this.copyToVector(bucket, node, vector);
			};
			if (bucket_num < this.IdLength * 8) {
				bucket = table.buckets[bucket_num + i];
				this.copyToVector(bucket, node, vector);
			};
		};
		vector.sort(function(a, b) {
			this.bytesToHex(a.distance) - bytesToHex(b.distance)
		});
		// for (i in vector){

		// }
		return vector;
	},
	BucketSize: 10,
	newNode:function(keys){
		this.nodeID=keys.publicKey
		this.key=keys.secretKey
		// get seeds from 

	}

}