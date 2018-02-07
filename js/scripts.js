function dogYears(num){
  if(isNaN(num)){
    dogYears(parseInt(prompt('Enter a number, dipshit')));
  } else{
    return alert(`Your dog is ${num * 7} years old`)
  }

}
dogYears(parseInt(prompt('How old is your dog?')))
dogYears(3);
dogYears('po');


function supply(age, product, maxAge){
  if(isNaN(age) || isNaN(product) || isNaN(maxAge)){
    console.log(`this function only takes ints`);
  } else {
    let diff = maxAge - age;
    return alert(`You will need ${diff *  product * 365} to last you until you're ${maxAge}`)
  }
}

supply(20, 9, 50);
supply(10, 'mason', 30);

supply(parseInt(prompt('How old are you?', '13')), parseInt(prompt('How many rolls of toilet paper do you   need?')), parseInt(prompt('How old will you be when you die?')))

(age, prod) => {
  return console.log(`${age*prod}`)
}

//Take home

function square(num){
  if(isNaN(num)){
    square(parseInt(prompt('Enter a number, dummy.', '3')))
  } else{
    return alert(Math.pow(num, 2));
  }
}
square(5);

function goodSent(str){
  str = str.charAt(0).toUpperCase() + str.slice(1)
  if(str.endsWith('.')){
    alert(str)
  } else {
    str = str + '.';
    return alert(str)
  }
}

goodSent(prompt('Gimme a sentence'))


function flip(str){
  let newStr = str.substring(str.length, str.length/2) + str.substring(0, str.length/2);
  return alert(newStr);
}

flip(prompt('gimme a string'))

function isPal(str){
  let reverse = str.split('').reverse().join(''); //splits str by letter into an array, reverse reverses the array, join brings array back to str
  if(str === reverse){
    return console.log('true')
  } else{
    return console.log('false')
  }
}


isPal(prompt('Give me a word'));
