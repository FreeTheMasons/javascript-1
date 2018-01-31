// var firstName = prompt("what is your first name?");
//
// var lastName = prompt("what is your last name?");
//
// console.log(firstName);
//
// alert(lastName);
//
// Var birthday = prompt("when is your birthday? mm/dd/yyyy");
//
// confirm(new Date(birthday));
//
//
//
//
// var str1 = 'abc' ;
// ‎var str2 = new String("abc") ;
// ‎console.log(str1 === str2); //false
// ‎console.log(str1 == str2); //true
//
// var num1 = prompt("enter a number", "10");
// var num2 = prompt("enter a number", "10");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// alert(num1+num2);
// var firstName = prompt("what is your first name?");
//
// var lastName = prompt("what is your last name?");
//
// console.log(firstName);
//
// alert(lastName);
//
// Var birthday = prompt("when is your birthday? mm/dd/yyyy");
//
// confirm(new Date(birthday));
//
//
//
//
// var str1 = 'abc' ;
// ‎var str2 = new String("abc") ;
// ‎console.log(str1 === str2); //false
// ‎console.log(str1 == str2); //true
//
// var num1 = prompt("enter a number", "10");
// var num2 = prompt("enter a number", "10");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// alert(num1+num2);

// var age = prompt('what is your age?');
//
// // age = parseInt(age);
//
// if(age >= 18 && age < 80) {
//   var star = prompt('do you like star wars? yes or no');
//   if(star != 'no'){
//     alert('you are pretty cool')
//   }
// } else if(age < 18) {
//   alert('you are not allowed, you are too young');
// }
//   else if(age > 80){
//     prompt('do you like prunes?');
//   }

var todo = []

for (i = 0; i < 3; i++){
  todo.push(prompt('What do you need to do today?'))
}


for (var i = 0; i < todo.length; i++ ){
  todo[i] = [todo[i], prompt(`how many days will ${todo[i]} take?`)]

}
//   [[task][length], [task][length]]
var longest = 0;
var i = 0;

while (i < todo.length){
  if(longest < todo[i][1]){
    longest = todo[i];
  }
  i++
}
console.log(longest)
