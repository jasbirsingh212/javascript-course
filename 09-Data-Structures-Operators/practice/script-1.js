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

//=======================================================================

// for (const key in game) {
//   console.log(key);
// }

// for (const item of Object.entries(game)) {
//   console.log(item);
// }

//=====================================================

//coding challenge 2

// 1

for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${name}`);
}

// 2
let sum = 0;
const oddValues = Object.values(game.odds);
for (const item of oddValues) {
  sum += item;
}
console.log(sum / oddValues.length);

// 3

const enteriesArr = Object.entries(game.odds);
for (const [key, value] of enteriesArr) {
  console.log(
    `Odd of ${game[key] ? `victory ${game[key]}` : 'draw'} : ${value}`
  );
}

//4
const ansObj = {};
for (const name of game.scored) {
  // ansObj[name] = ansObj[name] ? ansObj[name] + 1 : 1;
  ansObj[name] = ansObj[name] + 1 || 1;
}
console.log(ansObj);

// Sets

const uniqueElements = new Set([1, 2, 3, 1, 2, 4, 5, 4, 6]);
console.log(uniqueElements);

const uniqueCharacters = new Set('Jasbir Singh');
console.log(uniqueCharacters);

const newSet = new Set();
newSet.add('1');
newSet.add('2');
newSet.add('3');
newSet.add('2');
newSet.add('3');
newSet.add('1');

console.log(newSet);
newSet.delete('1');
console.log(newSet);
console.log(newSet.has('2'));
console.log(newSet.has('1'));
console.log(newSet.size);
newSet.clear(); //does not return anything
console.log(newSet);

// coding challenge 3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4

for (const [key, value] of gameEvents) {
  console.log(`[${key <= 45 ? 'FIRST' : 'SECOND'} HALF] ${key}: ${value}`);
}
