// créer fichier qui va contenir les fichiers du dossier nodejs_bootcamp

var fs = require("fs");
var list = require("./module")
var files;
var str = "";


fs.readdir("..", function(err, data){
  if (err) throw err;
  // console.log(data);

  // files = data;
  // files.forEach(function(argument) {
  //   str += argument + "\n";
  // });
  //
  // // console.log(str);
  //
  // fs.writeFile("list.txt", str, function(err) {
  //     if (err) throw err;
  //       console.log("fichier créé");
  //   });

  // files = data;
  // str = files.join("\n");
  // // console.log(str);
  //
  // fs.writeFile("list.txt", str, function(err) {
  //     if (err) throw err;
  //       console.log("fichier créé");
  //   });

  fs.writeFile("list.txt", list.createList(data), function(err) {
      if (err) throw err;
        console.log("fichier créé");
    });
});
