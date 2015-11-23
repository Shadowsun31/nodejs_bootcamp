var fs = require("fs"),
    moment = require('moment'),
    express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log(moment().format() + "||" + req.url + "||" + req.method);
  next();
});

app.get("/api/friends", function(req, res){
  fs.readFile("datas/datas.json", function(err, data){
    if(err) throw err;
    res.json(JSON.parse(data.toString('utf8')));
  });
});

app.use(function(req, res, next) {
  res.status(404).send("404 Can't access data");
});

app.listen(3000, function(){
  console.log("Express started @localhost:3000 \n press CTRL + c to terminate");
});
