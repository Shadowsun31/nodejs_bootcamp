"use strict";
let fs = require("fs"),
    _ = require('lodash');

function friends(cb){
  //API Privée
  //----------
  // init data
  let friends = null;

  fs.readFile("datas/datas.json", function(err, data){
    if(err) throw err;
    friends = JSON.parse(data.toString('utf8')).friends;
    cb();
  });

  function getAllFriends() {
    return friends;
  }

  function getFriend(id) {
    return (_.find(friends, { "id" : id }));
  }

  function getLastId() {
    // let max = 0,
    //     temp = 0;
    //
    // for(let i in friends){
    //   temp = friends[i].id;
    //   if(max < temp) max = temp;
    // }
    //
    // return max;

    return _.max(friends, 'id').id;
  }

  function setFriend(friend) {
    if(!friend.id){
      let maxId = _.max(friends, 'id').id;
      let currentID = maxId + 1;

      friend.id = (currentID);
      friends.push(friend);

    }else {
      let index = _.findIndex(friends, {"id" : parseInt(friend.id)});
      if(index !== -1){
        friends[index] = friend;
      }else{
        console.log("There isn't any friends with id: " + index);
      }
    }
    persistData();
    return friends;
  }

  function deleteAllFriends() {

  }

  function deleteFriend(id) {
    let index = _.findIndex(friends, {"id" : parseInt(id)});
    if(index !== -1){
      _.pullAt(friends, index);
      persistData();
    }else{
      console.log("There isn't any friends with id: " + index);
    }
    return friends;
  }



  function persistData(){
    var dataOut = JSON.stringify({ "friends" : friends });
    fs.writeFile("datas/datas.json", dataOut, function(err){
      if(err) throw err;
      console.log("File updated with success");
    });
  }


  //API Publique
  //----------

  var that = {};
  that.getFriend = getFriend;
  that.getAllFriends = getAllFriends;
  that.setFriend = setFriend;
  that.deleteFriend = deleteFriend;
  return that;
}

module.exports = friends;
