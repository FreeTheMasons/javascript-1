var myObj = {
  name : 'mason',
  stuff : 'this is basically a namedtuple',
  lastName : 'mullanax'
}

console.log(myObj.name)
console.log(myObj['lastName'])


function User(username, password){
  this.username = username;
  this.password = password;
}

function createUser(){
  var userName = prompt('enter your username.');
  var password = prompt('enter your password');
  var newUser = new User(userName, password);
  return console.log(newUser);
}

createUser();

function Pet(animal, name, color){
  this.animal = animal;
  this.name = name;
  this.color = color;
}

var doggy = new Pet('dog', 'dingo', 'white');
console.log(doggy);


//user login
const myForm = document.forms.userForm;
const submitButton = myForm.submit;

myForm.addEventListener('submit', function(e){
  e.preventDefault();
  if(myForm.username.value == '' || myForm.password.value == ''){
    alert('username or password invalid');
  }
  var username = myForm.username.value;
  var password = myForm.password.value;
  var myUser = new User(username, password);
  return console.log(myUser);
})
