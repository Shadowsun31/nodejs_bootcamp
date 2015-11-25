"use strict";
let express = require('express'),
    router = express.Router();
let restaurantModel = require(`${process.cwd()}/models/restaurants`)();

router.get("/", function(req, res){
  restaurantModel.getAll(function(err, data){
    if(err) res.json(err.message);
    res.json(data);
  });
});

router.get("/:id", function(req, res){
  restaurantModel.getById(req.params.id, function(err, data){
    if(err) res.json(err.message);
    res.json(data);
  });
});

router.get("/:field/:searchValue", function(req, res){
  restaurantModel.getSpecifiedField(req.params.field, req.params.searchValue, function(err, data){
    if(err) res.json(err.message);
    res.json(data);
  });
});

router.post("/", function(req, res){
  restaurantModel.setRestaurant(req.body, function(err){
    if(err) res.json(err.message);
    res.json({"message":"insertion was a success"});
  });
});

router.put("/", function(req, res){
  restaurantModel.setRestaurant(req.body, function(err){
    if(err) res.json(err.message);
    res.json({"message":"update was a success"});
  });
});

router.delete("/:id", function(req, res){
  restaurantModel.deleteByID(req.params.id, function(err, data){
    if(err) res.json(err.message);
    res.json({"message":"delete was a success"});
  });
});

module.exports = router;
