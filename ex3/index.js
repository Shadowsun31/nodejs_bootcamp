// exo 3 lister les fichiers dans dossier

var fs = require("fs");
var str;

fs.readdir("fichiers/", function(err, data){
  if (err) throw err;
  console.log(data);

  // for (var i = 0, l = data.length; i < l; i++) {
  //   console.log(data[i]);
  // }

  data.forEach(function(elem){
    console.log(elem);
  })

});
