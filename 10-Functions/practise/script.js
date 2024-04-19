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

// const objectTest = {
//     firstName: 'objectTest',
//     intro:() => {
//         console.log(this);
//     }
// }

// objectTest.intro();

const array = [1, 2, 3, 4, 5, 6];
const getEvens = item => {
  return item % 2 === 0 ? item : null;
};
const evenNumbers = array.filter(getEvens);
console.log(evenNumbers);

//global scope of var
if (true) {
  var x = 10;
  const y = 15;
}

console.log(x);

//=================================================================================================

//Passing values to function as arguments or parameteres
const jasbir = {
  full_name: 'Jasbir Singh',
  age: 26,
};

const msg = 'Hello';

const printMsg = (user, greetMsg) => {
  user.age = 22;
  console.log(greetMsg);
  greetMsg = 'jnsknsknskn';
};

printMsg(jasbir, msg);
console.log(jasbir, msg); // age in this obj changes, because object are passed as reference
// but javascript is only pass by value there nothing like pass by reference in javascript

//============================================================================================
// Function Accepting Callback Functions

//=============================================================================================
//Call, Bind and Apply Methods

const user1 = {
  name: 'Jasbir',
  age: 26,
  intro() {
    console.log(`User with name: ${this.name} is ${this.age} years old.`);
  },
};

user1.intro();

const user2 = {
  name: 'malkit',
  age: 25,
};

const intro = user1.intro;

intro.call(user2);

const intro1 = intro.bind(user1);
intro1();
//============================================================================================
//Coding challenge 1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const { question, options, answers, displayResults, registerNewAnswer } =
      this;

    const userAnswer = Number(
      prompt(`${question}
     ${options[0]}
     ${options[1]}
     ${options[2]}
     ${options[3]}
    `)
    );

    if (!(userAnswer >= 0 && userAnswer <= 3)) {
      alert('You must enter correct options');
      //registerNewAnswer();
      return;
    }

    answers[userAnswer] += 1;

    displayResults.call(this, 'arr');
    displayResults.call(this, 'string');
  },

  displayResults(type) {
    const { answers } = this;

    if (type === 'string') {
      console.log(
        `Poll answer in String format : ${answers[0]},${answers[1]}, ${answers[2]}, ${answers[3]} `
      );
    } else {
      console.log('Poll Answer is: ', answers);
    }
  },
};

//const { question, options, answers } = poll;

// const registerNewAnswer = () => {
//   const userAnswer = Number(
//     prompt(`${question}
//    ${options[0]}
//    ${options[1]}
//    ${options[2]}
//    ${options[3]}
//   `)
//   );

//   if (!(userAnswer >= 0 && userAnswer <= 3)) {
//     alert('You must enter correct options');
//     registerNewAnswer();
//     return;
//   }

//   answers[userAnswer] += 1;

//   console.log('Answer Arr', answers);
//   console.log('Poll Obj', poll);
// };

//registerNewAnswer();
// console.log('Answer Arr', answers);
// console.log('Poll Obj', poll);

const btnPoll = document.querySelector('.poll');
btnPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));
