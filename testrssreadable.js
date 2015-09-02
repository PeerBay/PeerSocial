var extractor = require('unfluff');
var read = require('node-readability');
var request = require('request');
var feedparser = require("feedparser")
var data;
var feedurl = "http://tvxs.gr/feeds/all/feed.xml"
var FeedParser = require('feedparser')


var req = request(feedurl)
var req2 = request("http://feeds.mashable.com/Mashable")
var feedparser = new FeedParser();

// function feedSince(uri, lastModified, etag) {
//     var reqObj = {
//         'uri': uri,
//         'headers': {
//             'If-Modified-Since': lastModified,
//             'If-None-Match': etag
//         }
//     };
//     var req = request(reqObj)
//     req.on('error', function(error) {
//         // handle any request errors
//     });

//     req.on('response', function(res) {
//         var stream = this;
//         if (res.statusCode == 304) return this.emit('info', "nothing changed");
//         if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
//         stream.pipe(feedparser);
//         feedSince(uri,res.caseless.dict["last-modified"],res.caseless.dict["etag"])
//     });


// }
req.on('error', function(error) {
    // handle any request errors
});

req.on('response', function(res) {
    var stream = this;

    if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

    stream.pipe(feedparser);
});
req2.on('response', function(res) {
    var stream = this;

    if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
    console.log(res.headers["last-modified"])
    stream.pipe(feedparser);
});


feedparser.on('error', function(error) {
    // always handle errors
});
feedparser.on('readable', function() {
    // This is where the action is!
    var stream = this,
        meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
        ,
        item;
    // console.log(stream.response.caseless.dict.etag)
    while (item = stream.read()) {
        console.log(item.link,item.source);
    }
});
feedparser.on('end',function(){
  console.log("feed ended")
})
// request(url, function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     // console.log(html);
//     data = extractor(html,'en');
//     if(!data.text){
//       read(html, function(err, article, meta) {
//         // Main Article
//         // console.log(article.content);
//         data.text=article.content
//         data.read=article
//         // Title
//         // console.log(article.title);

//         // // HTML Source Code
//         // console.log(article.html);
//         // // DOM
//         // console.log(article.document);

//         // // Response Object from Request Lib
//         // console.log(meta);

//         // Close article to clean up jsdom and prevent leaks
//         article.close();
//       });

//     }
//   }
// });
