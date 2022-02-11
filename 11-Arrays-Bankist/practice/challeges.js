// // console.log('hello world');

// const printDogMsg = arr => {
//   arr.forEach(age => {
//     age >= 3
//       ? console.log(`Dog is Adult, with age: ${age}`)
//       : console.log('Dog is Puppy');
//   });
// };
// const checkDogs = (juliaDogs, kateDogs) => {
//   const newJuliaDogs = juliaDogs.slice(1, 4);

//   printDogMsg(newJuliaDogs);
//   printDogMsg(kateDogs);
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


// challenge --- 2

// const calHumanAge = (arr) => {

//     const arrWithHumanAge = arr.map((item) => {

//         return item > 2 ? (16 + item * 2) : (item * 2);
//     }) 

//     const arrFilteredAge = arrWithHumanAge.filter((item) => item > 18)

//     const sumHumanAge = arrFilteredAge.reduce((acc, cur) => acc+cur);

//     return sumHumanAge / arrFilteredAge.length;

// }


// console.log(calHumanAge([3, 5, 2, 12, 7]))
// console.log(calHumanAge([4, 1, 15, 8, 3]))