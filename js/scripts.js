var sentence = "mason"; //example of primative string, will be converted to string object if method used on it -> bad practice

console.log(sentence);

// let is scoped to the block its in, not hoisted
// var is global even if its defined in a block

// new is a keyword that cannot be reused

var rightNow = new Date();
console.log(rightNow);

var word = new String("mason is my name") // advantage of creating string object -> methods

console.log(word.toUpperCase());


var animals = ['monkey', 'poodle']

console.log(animals)
console.log(animals[0])
