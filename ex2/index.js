// nbre de ligne et afficher en console

var fs = require("fs");
var str;
var strArray = [];


fs.readFile('fake.txt', function (err, data) {
  if (err) throw err;
  str = data.toString();
  strArray = str.split("\n");
  console.log(strArray.length);
});
