// function createList(array) {
//    return array.join('\n');
//
// }
//
// module.exports.createList = createList;

function modules(){

  // API privée
  function createList(array) {
     return array.join('\n');
  }

  // API publique
  var that = {};
  that.createList = createList;
  return that;
}

module.exports = modules();
