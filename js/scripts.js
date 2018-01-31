// var arr = new Array(1,2)
// console.log(arr)
//
// var me = ['Game of Thrones', 19, true, 2015]
//
// console.log(me, me.length);
// console.log(Array.isArray(me));
//
// var favoriteDog = prompt('who is your favorite favorite dog?');
// var num = prompt('enter a number');
// me.push(parseInt(num), favoriteDog);
// console.log(me);
//
// me.splice(2, 1, 'mason', []); //starts at 3rd item, deletes 1 item at origin, adds string and array
// console.log(me)

var fav1 = ['BOTW', 'Link']
var fav2 = ['Ocarina', 'Navi']
var fav3 = ['What Remains of Edith Finch?', 'Edith']
var fav4 = ['Journey', 'Robe dude']
var fav5 = ['Minecraft', 'Pickaxe']
var favGames = []
favGames.push(fav1[0], fav2[0], fav3[0], fav4[0], fav5[0]);
alert(favGames);
var bestWorst = [fav1, fav5]
console.log(bestWorst)
alert(bestWorst.length)


for (var i = 0; i < favGames.length; i++){
  if (favGames[i] == 'Journey'){
    alert(`You're favorite game is ${favGames[i]} and you're favorite character is ${fav4[1]}`)
  }
}
//to do: age gate program with date object and day 3 take home
