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

// ==============================================================================================================

function cutFruit(fruit) {
  return fruit * 4;
}

function juiceWithPieces(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);

  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
}

console.log(juiceWithPieces(2, 3));

// ===========================================================================================================

//#coding challenge 1

const calAvg = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = (aAvgScore, bAvgScore) => {
  if (aAvgScore >= 2 * bAvgScore) {
    console.log(`Team A wins (${aAvgScore} vs ${bAvgScore})`);
  } else if (2 * aAvgScore <= bAvgScore) {
    console.log(`Team B wins (${bAvgScore} vs ${aAvgScore})`);
  }
};

const teamAScoreAvg = calAvg(85, 54, 41);
const teamBScoreAvg = calAvg(23, 34, 27);
console.log(teamAScoreAvg, teamBScoreAvg);
checkWinner(teamAScoreAvg, teamBScoreAvg);

//==========================================================================================================

const arr = ["A", "B", "C", "D", 23];
console.log(arr.indexOf("23"));
console.log(arr.indexOf("d"));

// ========================================================================================================

//# coding challenge 2

const calTip = (bill) => (bill >= 50 && bill <= 300 ? 0.15 : 0.2) * bill;
console.log(calTip(100));
const bills = [125, 555, 44];
const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, total);

// =========================================================================================================

const jasbirObj = {
  firstName: "Jasbir",
  lastName: "Singh",
  friends: ["khargosh", "lovely", "chuchi"],
};

console.log(`${jasbirObj.firstName} has ${jasbirObj.friends.length} friends, but ${jasbirObj.friends[0]} is 
his best friend.`);

//===========================================================================================================

//#coding challenge 3

const calBMI = function () {
  console.log(this);
  this.BMI = this.massInKg / this.heightInMeter ** 2;
  return this.BMI;
};

const mark = {
  fullName: "Mark Miller",
  massInKg: 78,
  heightInMeter: 1.69,
  calBMI: calBMI,
};

const jonas = {
  fullName: "Jonas Smith",
  massInKg: 92,
  heightInMeter: 1.95,
  calBMI: calBMI,
};

console.log(mark.calBMI());
console.log(jonas.calBMI());
