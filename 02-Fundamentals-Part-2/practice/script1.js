"use strict";

let firstName = "Jasbir";
let hasSurname = true;

// if (hasSurame) {
//   console.log(`${firstName} has surname`);
// }

if (hasSurname) {
  console.log(`${firstName} has surname`);
}

// const interface = 'Audio';
// const private = true;
// const function = () => {};

//========================================================================================================

//user defined
function fruiteJuice(apples, oranges) {
  return `Juice made with ${apples} apples and ${oranges} oranges`;
}

const juiceAppleOrange = fruiteJuice(2, 3);
console.log(juiceAppleOrange);
console.log(fruiteJuice(5, 0));

//built in methods
console.log(Number("23"));
console.log(Math.random());

//=========================================================================================================
