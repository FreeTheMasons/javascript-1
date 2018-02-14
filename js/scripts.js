// var h1 = document.createElement('h1');
// var p = document.createElement('p');
// var body = document.querySelector('body');
// h1.innerHTML = "hey bud"
// p.textContent = 'Hey mr mason'
//
//
// body.appendChild(h1)
// body.append(p)
//
// var newDiv = document.createElement('div')
//
// newDiv.style.backgroundColor = 'springgreen'
// newDiv.style.height = '120px';
//
// body.insertBefore(newDiv, p);
//
// body.classList.add('red');
//
// console.log(body.classList)
//
// body.classList.add('white-text')
//
// newDiv.addEventListener('click', () =>{
//   body.classList.toggle('red');
// });
//
//
// var newImg = document.createElement('img');
// newImg.setAttribute('src', 'https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447')
// newImg.setAttribute('alt', 'mason')
// newImg.classList.add('img-responsive', 'img-circle');
// body.insertBefore(newImg, p);



//fizzbuzz


function fizzbuzz(){
  for (i = 1; i <= 100; i++){
    if (i%3 == 0 && i%5 == 0){
      console.log('FizzBuzz')
    } else if (i%5 == 0) {
      console.log('Buzz')
    }else if (i%3 == 0) {
      console.log('Fizz');
    }
    else{
      console.log(i);
    }
  }
}
fizzbuzz();
