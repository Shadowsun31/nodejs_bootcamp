"use strict";
let fs = require("fs"),
    http = require('http'),
    moment = require('moment'),
    express = require('express'),
    // mongojs = require('mongojs'),
    bodyParser = require('body-parser'),
    // _ = require('lodash'),
    morgan = require('morgan'),
    restaurants = require(__dirname + '/routes/restaurants');

let app = express();
// let db = mongojs('restaurants',['restaurants']);
let accessLogStream = fs.createWriteStream(__dirname + "/log/access.log", {flags : "a"});

app.use(bodyParser.json());

app.use(morgan("combined", {stream:accessLogStream}));

app.use(express.static(__dirname + "/public"));

app.use("/api/restaurants", restaurants);

// app.get("/api/restaurants",function(req,res){
//   db.restaurants.find(function(err,docs){
//     if(err) throw err;
//     res.json(docs);
//   })
// });
//
// app.get("/api/restaurants/:id",function(req,res){
//   db.restaurants.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,docs){
//     if(err) throw err;
//     res.json(docs);
//   })
// });


app.use(function(req, res) {
  res.status(404).send("The page " + req.url + " doesn't exist");
});

http.createServer(app).listen(80, function(){
  console.log("Express started @localhost \n press CTRL + c to terminate");
});
