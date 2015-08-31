var wt=require("webtorrent-hybrid")
var fs= require("fs")
var client=new wt()
fs.readFile("pb.png",function(err,f){
	f.name="pb.png"
	client.seed(f,function onTor(tor){
		console.log(tor)
	})
})