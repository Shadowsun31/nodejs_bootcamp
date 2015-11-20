// serv web qui si on a /api/friends => sort tout les amis
//                      /api/friends/1 => sort le premier ami
var http = require('http');
var fs = require("fs");

var port = process.argv[2] || 3000;

var routes = {
  "/api/friends" : "datas/datas.json"
}

var server = http.createServer(function (request, response) {

  if(routes[request.url]){
    response.writeHead(200, {"Content-Type": "text/json"});
    var fileRoute = routes[request.url];
    fs.readFile(fileRoute , function(err, data){
      if(err) throw err;
      console.log(data);
      response.end(data);
    });
  }else{
      response.writeHead(404);
      response.end("the URL : " + routes[request.url] + " doesn't exist");
  }
});

server.listen(port, function(err){
  console.log("server is now listening on port 3000");
});
