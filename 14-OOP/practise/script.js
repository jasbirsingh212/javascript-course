'use strict';

//we can not use arrow function for constructor functions
//we can name it using first letter as small
// do not create methods in CF due to performance issue

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const jasbir = new Person('Jasbir', 'Singh');
console.log(jasbir);
