var name = "Wendy";
console.log(name);

function sayHello() {
  return "Hello";
}

var fn = function() {
  return "Hello";
}

var o = {};
o.age = 42;
o.ditBonjour = function(msg){
  return "bonjour " + msg;
}
console.log(o.age);
console.log(o.ditBonjour("technocite"));
console.log(process.argv);
