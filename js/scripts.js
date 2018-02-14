// const orderForm = document.forms.order;
// console.log(orderForm.quantity.value);
//
//
// const sbtn = orderForm.sumbit;
//
// document.addEventListener('submit', function(e){
//   e.preventDefault();
//   if (orderForm.quantity.value == null){
//     alert('enter something dingus')
//   }
// })

var checkScope = function(){
  console.log(this);
}


var name='mason'

function wrapLog(){
  logThis();
}

// wrapLog();

var user = {
  // a: checkScope,
  name: 'mason',
  password: 'pooop',
  lastLogin: new Date(),
};
//.apply()takes one arg and an array
// user.a();
checkScope.call(user); //first arg of .call() and .apply() is always what you are binding this to6
checkScope();



var str = 'glenn'
console.log(str)

function call(){
  var str = 'mason'
  console.log(str)
}

let st = 'mullanax'
console.log(st);
function callMe(){
  let st = 'poop'
  console.log(st)
}

call();
callMe();

var myStr = new String('Hello mason');

console.log(Object.getPrototypeOf(myStr))
