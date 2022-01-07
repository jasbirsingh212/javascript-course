// // // Remember, we're gonna use strict mode in all scripts now!
// // 'use strict';

// // //console.log('jasbir');
// // //console.log();


// // const handleMaxTemp = (array ) => {

// //     let maxTemp = Number.NEGATIVE_INFINITY;

// //     for(let i=0; i< array.length; i++){

// //         if(array[i] !== 'error'){

// //             if(array[i] > maxTemp){
// //                 maxTemp= array[i];
// //             }


// //         }
// //     }

// //     return maxTemp;
    
// // }

// // const handleMinTemp = (array ) => {

// //     let minTemp = Number.POSITIVE_INFINITY;

// //     for(let i=0; i< array.length; i++){

// //         if(array[i] !== 'error'){

// //             if(array[i] < minTemp){
// //                 minTemp= array[i];
// //             }


// //         }
// //     }

// //     return minTemp;
    
// // }

// // const calTempAmplitude = ( array ) => {

// //     const maxTemp = handleMaxTemp(array); 
// //     const minTemp = handleMinTemp(array);
// //     console.log(maxTemp - minTemp)

// // }

// // calTempAmplitude([3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5])


// // console['log']("jasbir")
// // console['warn']("jasbir")
// // console['error']("jasbir")
// // console['table']({
// //     name : "jasbir",
// //     job : "frontend developer"
// // })


// const printTemprature = ( array ) => {
//     let str="";
//     for(let i=0; i< array.length; i++){
//         str += `...${array[i]} degree celsius in ${i+1} days`
//     }
//     console.log(str)
// }

// printTemprature([17, 21, 23])
// printTemprature([12, 5, -5, 0, 4])