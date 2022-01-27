'use strict';


//------------- In Normal Function -----------------------------------------

//with strict mode;
// In browser: undefined;
// In node-runtime: undefined;

//without strict mode;
// In browser: window object;
// In node-runtime: global object;
// function testThis () {
//     console.log(this);
// }
// testThis();



//with strict mode;
//// In browser: undefined;
// In node-runtime: undefined;

//without strict mode;
// In browser: window object;
// In node-runtime: global object;

// const thisFunc = function () {
//     console.log(this);
// }
// thisFunc();



//with strict mode;
//In browser: window object;
// In node run-time: {} (empty object);

//without strict mode;
//In browser: same as above ;
//In node run-time: same as above ;

// const testThisArrow = () => {
//     console.log(this);
// }

// testThisArrow()

//-------------------------------------------------------------------------



//----------- In Methods Calls -------------------

//with strict mode;
//In browser: To the object calling the method;
// In node run-time: To the object calling the method;

//without strict mode;
//In browser: To the object calling the method ;
//In node run-time: To the object calling the method ;

// const objectTest = {
//     firstName: 'objectTest',
//     intro: function(){
//         console.log(this);
//     }
// }

// objectTest.intro();


//with strict mode;
//In browser: To the object calling the method;
// In node run-time: To the object calling the method;

//without strict mode;
//In browser: To the object calling the method ;
//In node run-time: To the object calling the method ;

// const objectTest = {
//     firstName: 'objectTest',
//     intro(){
//         console.log(this);
//     }
// }

// objectTest.intro();


//with strict mode;
//In browser: window object;
// In node run-time: {} (empty object);

//without strict mode;
//In browser: window object;
//In node run-time: {} (empty object);

const objectTest = {
    firstName: 'objectTest',
    intro:() => {
        console.log(this);
    }
}

objectTest.intro();


