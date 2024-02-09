// //alert("jassi");
// //console.log("Hello World !")
//==============================================================================================================

//Assignment 3
// const dolphineScore1 = 96 ;
// const dolphineScore2 = 108;
// const dolphineScore3 = 89;

// const kolalaScore1 = 88 ;
// const kolalaScore2 = 91;
// const kolalaScore3 = 110;

// const dolphineAvgScore = (dolphineScore1 + dolphineScore2 + dolphineScore3) / 3;
// const koalasAvgScore = ( kolalaScore1 + kolalaScore2 + kolalaScore3)/3;
// //console.log(dolphineAvgScore, koalasAvgScore)
// if(dolphineAvgScore > koalasAvgScore && dolphineAvgScore >= 100){
//     console.log(`Dolphine wins with score ${dolphineAvgScore}`)
// }
// else if(dolphineAvgScore < koalasAvgScore && koalasAvgScore >= 100){
//     console.log(`Kolalas wins with score ${koalasAvgScore}`)
// }
// else {

//     if(dolphineAvgScore >= 100)
//     console.log(`Match tied at ${dolphineAvgScore}`)
//     else
//     console.log(`No winner for this match`)
// }

//===============================================================================================================
// Assignment 1

const marksMass = 95;
const markHeigth = 1.88;
const marksBMI = marksMass / (markHeigth * markHeigth);

const johnsMass = 85;
const johnsHeigth = 1.76;
const johnsBMI = johnsMass / (johnsHeigth * johnsHeigth);

const markHasHigherBMI = marksBMI > johnsBMI;
console.log(markHasHigherBMI, marksBMI, johnsBMI);

//===================================================================================================================
//Assignmnet - 2

if (markHasHigherBMI) {
  console.log(
    `Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})`
  );
} else {
  console.log(
    `John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI})`
  );
}
