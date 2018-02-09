function queryMe(method, search){
  if (method == 'id'){
    let id = document.getElementById(search)
    return console.log(id);
  } else if (method == 'tag') {
    let tag = document.getElementsByTagName(search);
    return console.log(tag)
  } else if (method == 'class') {
    let clas = document.getElementsByClassName(search);
    return console.log(clas)
  } else if (method == 'querySelector') {
    let query = document.querySelector(search);
    return console.log(query);
  } else if (method == 'querySelectorAll') {
    let query = document.querySelectorAll(search)
    return console.log(query)
  }
}

queryMe('querySelectorAll', 'div')



document.querySelector('.my-btn').addEventListener('click', function(event){
  alert('hey this button works!') });

document.querySelector('.page').addEventListener('mouseover', function(event){
  this.style.backgroundColor = 'springgreen';


document.querySelector('.page').addEventListener('mouseleave', function(event){
  this.style.backgroundColor = 'dodgerblue';
  });
});
  document.querySelector('.myform').addEventListener('keyup', function(event){
    document.querySelector('.text').style.color = 'ivory';
});


// document.querySelector('.face').addEventListener('click', function(e){
//   location.href = "https://www.facebook.com/home.php"
// });

// function tempConvert(temp, scale){
//   var newDiv = document.createElement('h3');
//   scale.toLowerCase()
//   if(scale == 'c' || 'celsius'){
//     var newContent = document.createTextNode(temp + 'C')
//   } else if (scale == 'f' || 'fahrenheit') {
//     var newContent = document.createTextNode(temp + 'F')
//   }
//   newDiv.appendChild(newContent)
//   var currentDiv = document.querySelector('.page');
//   document.body.insertBefore(newDiv, currentDiv);
// }
//
// tempConvert('56', 'f');
