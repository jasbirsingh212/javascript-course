'use strict';

//we can not use arrow function for constructor functions
//we can name it using first letter as small
// do not create methods in CF due to performance issue

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const Person = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// const jasbir = new Person('Jasbir', 'Singh');
// jasbir.age = 25;
// jasbir.firstName = 'Jassi';
// console.log(jasbir);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.displayFullName = function () {
//   console.log(`${this.firstName} ${this.lastName} `);
// };

// const jasbir = new Person('Jasbire24232', 'Singh');
// console.log(jasbir);
// jasbir.displayFullName();
// console.log(jasbir.__proto__);
// console.log(Person.prototype);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Accelerated ${this.make} Speed: ${this.speed},`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`De-accelerated ${this.make} Speed: ${this.speed},`);
};

// Car.prototype.break = () => {
//   //console.log(this);
//   this.speed -= 5;
//   console.log(`De-accelerated ${this.make} Speed: ${this.speed},`);
// };

const car1 = new Car('BMW', 100);
const car2 = new Car('Mercedes', 150);

car1.accelerate();
car1.accelerate();
car1.break();
car1.break();

car2.accelerate();
car2.accelerate();
car2.break();
car2.break();
