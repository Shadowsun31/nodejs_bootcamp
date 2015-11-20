// hello world dans une page web (server)
var http = require('http');
var fs = require("fs");

var routes = {
  "/" : "index",
  "/page1" : "page1",
  "/page2" : "page2"
}

var server = http.createServer(function (request, response) {
  console.log(request.url);
  if(routes[request.url]){
    response.writeHead(200, {"Content-Type": "text/html"});
    var fileRoute = "templates/" + routes[request.url] + ".html";
    fs.readFile(fileRoute , function(err, html){
      if(err) throw err;
      console.log(html);
      response.end(html);
    });
  }else{
      response.writeHead(404);
      response.end("the URL : " + routes[request.url] + " doesn't exist");
  }

});

server.listen(3000, function(err){
  console.log("server is now listening on port 3000");
});


// url.resolve('/one/two/three', 'four')
