"use strict";
let fs = require("fs"),
    http = require('http'),
    moment = require('moment'),
    express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('lodash'),
    friends = require(__dirname + '/modules/friends');

let myFriends = friends(initApp);

function initApp(){
  let app = express();

  app.use(bodyParser.json());

  app.use(function(req, res, next){
    console.log(moment().format() + "||" + req.method + "||" + req.url + "||" + req.ip );
    next();
  });

  app.get("/api/friends", function(req,res){
    res.json(myFriends.getAllFriends());
  });

  app.get("/api/friends/:id", function(req,res){
    let id = parseInt(req.params.id);
    res.json(myFriends.getFriend(id));
  });

  app.post("/api/friends", function(req, res){
    console.log(req.body);
    res.json(myFriends.setFriend(req.body));
  });

  app.put("/api/friends", function(req, res){
    console.log(req.body);
    res.json(myFriends.setFriend(req.body));
  });

  app.delete("/api/friends/:id", function(req, res){

    let id = parseInt(req.params.id);
    res.json(myFriends.deleteFriend(id));
  });

  app.use(function(req, res) {
    res.status(404).send("The page " + req.url + " doesn't exist");
  });

  http.createServer(app).listen(80, function(){
    console.log("Express started @localhost \n press CTRL + c to terminate");
  });

  // app.listen(3000, function(){
  //   console.log("Express started @localhost:3000 \n press CTRL + c to terminate");
  // });

}

// fs.readFile("datas/datas.json", function(err, data){
//   if(err) throw err;
//   var json = JSON.parse(data.toString('utf8'));
//
//   app.use(function(req, res, next) {
//     console.log(moment().format() + "||" + req.url + "||" + req.method + "||");
//     next();
//   });
//
//   app.get("/api/friends/", function(req, res){
//     res.json(json.friends);
//   });
//
//   app.get("/api/friends/:id", function(req, res){
//       var id = parseInt(req.params.id);
//       var friend = (_.find(json.friends, {"id" : id}));
//
//       res.json( friend ? friend : "The friend with id: " + id + " doesn't exist." );
//   });
//
//   app.use(function(req, res) {
//     res.status(404).send("The page " + req.url + " doesn't exist");
//   });
//
//   app.listen(3000, function(){
//     console.log("Express started @localhost:3000 \n press CTRL + c to terminate");
//   });
//
// });
