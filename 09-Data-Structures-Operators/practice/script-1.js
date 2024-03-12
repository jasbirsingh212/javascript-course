'use strict';

//swaping variables using destructuring
let [x, y] = [1, 2];

console.log(x, y);
[y, x] = [x, y];

console.log(x, y);

//=================================================

//Destructuring Objects
// const obj = { firstName: 'Jabsir', lastName: 'Singh' };
//const { firstName = 'guest', lastName = 'xyz' } = obj;
// const { firstName: main, lastName: secondary } = obj;
// const { firstName: main = 'Jasbir1', lastName: secondary = 'Singh1' } = {};
// console.log(main, secondary);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const { categories } = restaurant;
// categories[0] = 'Jasbir';
// console.log(categories, restaurant);

//Nested Object destructuring
// const {
//   openingHours: {
//     fri: { open, close },
//   },
// } = restaurant;
// console.log(open, close);

// function userLog({
//   firstName,
//   lastName = '',
//   age,
//   course = 'Basic javascript',
// }) {
//   console.log(`${firstName} ${lastName} is aged ${age} enrolled in ${course}`);
// }

// userLog({
//   firstName: 'Jasbir',
//   lastName: 'Singh',
//   age: 26,
//   course: 'Software Engineering',
// });

// userLog({
//   firstName: 'Jasbir',
//   // lastName: 'Singh',
//   age: 26,
//   // course: 'Software Engineering',
// });

//==============================================================

//Spread operator

//short-circuit
// let num = 10;
// console.log(3 || 'jasbir');
// console.log(undefined || null);
// num = num || 20;
// console.log(num);

// console.log(' ' && 'Jasbir');
// console.log('J' && 1);
// num = num && 20;
// console.log(num);

// coding challenge==============================================================

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 2.33,
    x: 3.25,
    team2: 1.5,
  },
};

//1
const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1, players2);

//2
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

//3
const allPlayers = [...players1, players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
const printGoal = (...players) => {
  for (const name of players) {
    console.log(name);
  }

  console.log('Goal Socred : ', players.length);
};

printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoal(...game.scored);

//7
console.log(
  (team1 < team2 && 'Team 1 wins') || (team1 > team2 && 'Team 2 wins')
);
//console.log(team1 > team2 && 'Team 2 wins');
