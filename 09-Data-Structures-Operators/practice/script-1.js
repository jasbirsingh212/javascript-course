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
