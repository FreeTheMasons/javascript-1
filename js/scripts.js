var name = prompt('What is your name?');

var color = prompt('What is your favorite color?', 'green, blue, yellow, orange, pink, purple, red, white, brown, black?');

switch(color) {
  case 'green':
    alert(name + ', green is my favorite color too!')
    break;
  case 'blue':
    alert('Why are you feeling so blue today, ' + name + '?')
    break;
  case 'yellow':
    alert(name + ' lives in a yellow submarine')
    break;
  case 'orange':
    alert('Eat an orange, ' + name)
    break;
  case 'pink':
    alert(name + ' looks pretty in pink')
    break;
  case 'purple':
    alert('Purple haze all in ' + name +'\'s eyes')
    break;
  case 'red':
    alert(name + ', red reminds me of reindeers.')
    break;
  case 'white':
    alert('So much for a white winter this year, right ' + name + '?');
    break;
  case 'brown':
    alert(name + ', I know that your poop is brown.')
    break;
  case 'black':
    alert('Wanna people watch with me on black friday, ' + name + '?')
    break;
}
