'use strict';

//swaping variables using destructuring
let [x, y] = [1, 2];

console.log(x, y);
[y, x] = [x, y];

console.log(x, y);

//=================================================

//Destructuring Objects
const obj = { firstName: 'Jabsir', lastName: 'Singh' };
const { firstName = 'guest', lastName = 'xyz' } = obj;
const { firstName: main, lastName: secondary } = obj;
