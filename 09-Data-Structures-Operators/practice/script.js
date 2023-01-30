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
const newRes = {founder: 'jasbir', ...restaurant};
restaurant.name = 'lalala';
console.log("Name this res",newRes.name);
newRes.name = 'jasbir';
// newRes.categories = [];
//newRes.categories[2] = ['jasb']
// newRes.openingHours.thu = {};
console.log(newRes, restaurant);


//coding challenge 3

const str = 'under_score';

const arr = str.split("_");

const firstLetterCap = (str) => {

  return str.replace(str[0], str[0].toUpperCase());

}

const tempStr = firstLetterCap(arr[1]);
arr[1] = tempStr;

const finalStr = arr.join("");
console.log(finalStr);