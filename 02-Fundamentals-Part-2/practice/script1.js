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

function calAge(birthYear) {
  return 2024 - birthYear;
}

console.log(calAge(1998));

const calAge1 = function (birthYear) {
  return 2024 - birthYear;
};

console.log(calAge1(1998));

//==============================================================================================================

const calAgeArrow = (birthYear) => 2024 - birthYear;

console.log(calAge(1998));

const yearUntilRetirement = (birthYear, firstName) => {
  const age = calAge(birthYear);
  const retirementYears = 65 - age;
  return `${firstName} will retire after ${retirementYears} years.`;
};

console.log(yearUntilRetirement(1998, "Jasbir"));
