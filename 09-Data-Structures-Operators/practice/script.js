'use strict';

// Data needed for a later exercise
// @ts-ignore
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// @ts-ignore
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', ['Pizzeria'], 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//shalow copy
const newRes = { founder: 'jasbir', ...restaurant };
restaurant.name = 'lalala';
console.log('Name this res', newRes.name);
newRes.name = 'jasbir';
// newRes.categories = [];
//newRes.categories[2] = ['jasb']
// newRes.openingHours.thu = {};
console.log(newRes, restaurant);

//coding challenge 3

const str = 'under_score';

const arr = str.split('_'); //['under', 'score]
console.log(str);
const firstLetterCap = str => {
  const ans = str.replace(str[0], str[0].toUpperCase()); //Score
  console.log(str);
  return ans;
};

const tempStr = firstLetterCap(arr[1]); //score
arr[1] = tempStr;

const finalStr = arr.join('');
console.log(finalStr);
console.log(arr);

const str1 = 'jasbir';
console.log(str1.padStart(10, 'X'));
// str1.trim();
console.log(str1.trim());
console.log(str1.repeat(2), str1);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // regex
console.log(announcement);

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
console.log('B737'[0]);

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(1, -1));
console.log(airline.slice(-2));

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

console.log(new Array('jonas'));
console.log(typeof new Array('jonas'));
console.log(new Array('jonas').slice(0));

const map = new Map();
const y = {};
const z = y;
map.set(y, 10);
console.log(map.get(z));

const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

console.log(Object.entries(obj));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question.entries());

const rest = new Map();
const arr1 = [1, 2];
rest.set(arr1, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(new Set('Jonas').entries());

for (const [i, el, x] of new Set('Jonas').entries()) {
  console.log(i, el, x);
}
console.log(obj?.key1);

const obj2 = { ...obj };
console.log(obj2, obj == obj2);

let a = 111;
let b = 999;
const obj3 = { a: 23, b: 7, c: 14 };
({ a, b } = obj3);
console.log(a, b);

const arrE = [1, 2];
const [ae, be, ...restE] = arrE;
console.log(ae, be, restE); // restE will always be array if destructing from array otherwise object
