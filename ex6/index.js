// avoir en console le contenu du site technocité

var http = require('http');
var cheerio = require('cheerio');
var str = "";

http.get("http://www.triptyk.eu", function(res) {
 console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(data) {
    var $ = cheerio.load(data);
    $("a").each(function(i,element){
      console.log(element.attribs.href);
    });

  });
  res.on('error', function(err) {
   console.log("Got error: " + err);
  });

});





// var http = require('http');
// var options = {method: 'HEAD', host: 'www.triptyk.eu', port: 80, path: '/'};
// var req = http.request(options, function(res) {
//     console.log(JSON.stringify(res.headers));
//   }
// );
// req.end();
