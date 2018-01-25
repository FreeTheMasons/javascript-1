var firstName = prompt("what is your first name?");

var lastName = prompt("what is your last name?");

console.log(firstName);

alert(lastName);

Var birthday = prompt("when is your birthday? mm/dd/yyyy");

confirm(new Date(birthday));




var str1 = 'abc' ;
‎var str2 = new String("abc") ;
‎console.log(str1 === str2); //false
‎console.log(str1 == str2); //true

var num1 = prompt("enter a number", "10");
var num2 = prompt("enter a number", "10");
num1 = parseInt(num1);
num2 = parseInt(num2);
alert(num1+num2);
