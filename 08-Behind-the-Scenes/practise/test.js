'use strict';
//let and const can not be accessed outside of    //but var can be.
// function first() {
//   let a = 1;

//   if (true) {
//     const c = 10;
//   }

//   //console.log(c); // undefined
//   return function second() {
//     console.log('Previous', a);
//     return (a += 1);
//   };
// }

// const call1 = first();
// console.log(call1());
// console.log(call1());
// console.log(call1());
// console.log(call1());
// console.log(call1());
// console.log(call1());
// console.log(call1());
// console.log(call1());

// let obj1 = {};

// if (Object.keys(obj1).length === 0) {
//   console.log(obj1);
// }
// console.log('iojsdsicnjisjcnwc');

// function first() {
//   console.log(firstName); // undefined
//   if (true) {
//     // console.log(firstName); // undefined
//     // var firstName = 5;
//     // console.log(firstName); // 5
//   }
//   console.log(firstName); //5
// }

//let firstName = 'jasbir';
// first();
//let firstName = 'jasbir'; //error

//  console.log(x); // undefined, But no error like x is not defined or can not find x
//  var x  = 5;
//  console.log(x)

// console.log(x); // Cannot access 'x' before initialization
// let x  = 5;

// console.log(x); // Cannot access 'x' before initialization
// const x  = 5;

// const Obj = {
//   name: 'jasbir',
//   age: 23,
//   // @ts-ignore
//   // str: () => {
//   //   console.log(this);
//   //   return `${this.name}, ${this.age}`;
//   // },

//   str: function () {
//     console.log(this);
//     return `${this.name}, ${this.age}`;
//   },
// };

//console.log(Obj.str());

// function x() {
//   console.log(this);
// }

// x();

// const first = () => {
//   const second = () => {
//     console.log(this);
//   };

//   second();
//   console.log(this);
// };

// first();

// const x = function () {
//   console.log(this);
// };

// x();

// const x = () => console.log(this);
// x();

//function are block scoped, can not access add outside if block
// if (true) {
//   function add() {
//     console.log('add function');
//   }
// }

// add();

// function add() {
//   //var c = 'c';
//   //let c = 'l';
//   console.log(c); // "c"
//   if (true) {
//    // var c = 'd';
//     //let c = 'f';
//   }

//   console.log(c); //"d"
// }

// function add() {
//   let c = 'c';
//   console.log(c); // "c"
//   if (true) {
//     let c = 'd';
//   }

//   console.log(c); //"d"
// }
// add();
