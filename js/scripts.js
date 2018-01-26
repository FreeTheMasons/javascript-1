var sentence = "mason"; //example of primative string, will be converted to string object if method used on it -> bad practice

// console.log(sentence);

// let is scoped to the block its in, not hoisted
// var is global even if its defined in a block

// new is a keyword that cannot be reused

// var rightNow = new Date();
// console.log(rightNow);
//
// var word = new String("mason is my name") // advantage of creating string object -> methods
//
// console.log(word.toUpperCase());
//
//
// var animals = ['monkey', 'poodle']
//
// console.log(animals)
// console.log(animals[0])
const BESTMOVIE = [1,2]
//
// if(typeof(BESTMOVIE) === 'string') {
//   alert("hey its a string!!!!");
// } else if (typeof(BESTMOVIE) === 'number') {
//   alert("its not a string its a number")
// }
// else {
//   alert('yo its not a string');
// }
console.log(typeof(BESTMOVIE))

switch(typeof(BESTMOVIE)) {
  case 'string':
    alert("its a string!")
    break;
  case 'number':
    alert("its a number!")
    break;
  case 'boolean':
    alert('its a boolean')
    break;
  case 'undefined':
    alert('oopsies its undefined')
    break;
  case 'object':
    alert('its an object')
    break;
  default:
    alert('its an array')
    break;
}

BESTMOVIE != undefined ? alert('it exists') : alert('it doesn\'t exist');
