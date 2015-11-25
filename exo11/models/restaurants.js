"use strict";
let mongoose = require('mongoose');

function Restaurants(){
  let dbURI = "mongodb://localhost/restaurants";
  mongoose.connect(dbURI);

  let restaurantSchema = mongoose.Schema({
    name : {
      type : String,
      required : true
    },
    address : {
      street : String,
      number : Number,
      city : String,
      zip : String
    },
    phone : {
      type : String,
      required : true
    },
    web : {
      type : String,
      required : true
    },
    types : {
      type : Array,
      required : true
    },
    rating : {
      type : String,
      required : true
    },
    createAt : {
      type : Date,
      default : Date.now
    }
  });

  let restaurant = mongoose.model("Restaurant", restaurantSchema);

  function getAll(next){
    restaurant.find(null, function(err, data){
      // if(err) throw err;
      next(err, data);
    }).sort([['name','ascending']]);
  };

  function getById(id, next){
    restaurant.findById(id, function(err, data){
      // if(err) throw err;
      next(err, data);
    });
  };

  function getSpecifiedField(field, searchValue, next){
    var query = {[field]:new RegExp(searchValue,"i")};
    restaurant.findOne(query, function(err, data){
       //if(err) throw err;
      next(err, data);
    });
  };

  function setRestaurant(ob, next){

    if(!ob._id){
      let resto = new restaurant(ob);
      resto.save(function(err){
          next(err);
      });
    }else {
      // restaurant.findOne({_id: ob._id}, function(err, doc){
      //   for(var elem in ob){
      //     doc[elem] = ob[elem];
      //   }
      //   doc.save(function(err){
      //     next(err);
      //   });
      // });

      restaurant.findByIdAndUpdate(ob._id, ob, function(err){
        next(err);
      });
    }
  };

  function deleteByID(id, next){
    // restaurant.findByIdAndRemove(id, function(err){
    //   next(err);
    // });
    restaurant.remove({_id:id}, function(err){
      next(err);
    });
  }

  var that = {};
  that.getAll = getAll;
  that.getById = getById;
  that.getSpecifiedField = getSpecifiedField;
  that.setRestaurant = setRestaurant;
  that.deleteByID = deleteByID;
  return that;
};
module.exports = Restaurants;
