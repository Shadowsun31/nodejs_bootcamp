var fs = require("fs");

var list = process.argv;
(list[2])? list.splice(0, 2) : list = [];

// list.forEach(function(val, index, array){
//   console.log(index + "    " + val);
// });

// Version 1

var str = list.join('\n');

fs.writeFile("list.txt", str, function(err) {
    if (err) throw err;
      console.log("fichier créé");
  });

// Version 2
// fs.access('list2.txt', fs.F_OK, function (err) {
//
// });


// TODO finir partie 2 en vérifiant si fichier existe
// fs.stat
fs.stat("list2.txt", function(err, stat){
  if(err==null){
    console.log("file exist");
    updateFile(true);
  }else if(err.code == "ENOENT"){
    console.log("File doesn\'t exist");
    fs.writeFile("list2.txt", "", function(err){
      if (err) throw err;
      updateFile(false);
    });
  }else{
    console.log("somme other error");
  }
});

function updateFile(fileExist) {
  fs.readFile("list2.txt",'utf8' ,function(err, data) {
      if (err) throw err;
        if(fileExist && list[2]) str = data + "\n" + list.join('\n');
        else str = list.join('\n');
        console.log("fichier lu");

        fs.writeFile("list2.txt", str, function(err) {
            if (err) throw err;
              console.log("fichier modifié");
        });
  });
}

// fs.readFile("list2.txt",'utf8' ,function(err, data) {
//     if (err) throw err;
//       str = data + "\n" + list.join('\n');
//       console.log("fichier lu");
//
//       fs.writeFile("list2.txt", str, function(err) {
//           if (err) throw err;
//             console.log("fichier modifié");
//       });
// });
