// // //Cutshort assessment
// // console.log("test" && "book");

// // //next question
// // const bird = {
// //     size: 'small',
// // }

// // const mouse = {
// //     name: 'Mickey',
// //     small: true,
// // }

// // //console.log(mouse.bird.size);
// // console.log(mouse[bird.size]);
// // console.log(mouse[bird['size']]);

// //next question
// // (function test() {
// //     var a = 1;
// //     function test(){
// //         if(!a){
// //             var a = 10;
// //         }

// //         console.log(a);
// //     }

// //     test();
// //     console.log(a);
// // })()

// //next question

// (() => {

//     let x, y;
//     try{
//         throw new Error();
//     }catch(x){
//         (x= 1), (y=2);
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);

// })()

// //next question
// const obj = { 1: 'a', 2: 'b', 3: 'c'};
// const set = new Set([1,2,3,4,5]);

// console.log(obj.hasOwnProperty('1'));
// console.log(obj.hasOwnProperty(1));
// //console.log(set.has('1'));
// console.log(set.has(1))

// //next question
// const a = {};
// const b= {key: 'b'};
// const c= {key: 'c'};

// a[b] = 123;
// console.log(a);
// a[c] = 456;
// console.log(a);
// console.log(a[b]);

//next question

function foo() {
  var f = (i) => arguments[0] + i;
  return f(2);
}

function boo() {
  var f = function (i) {
    arguments[0] + i;
  };

  return f(2);
}
// console.log(foo(10));
// console.log(boo(10))

const arr = [1, 2, 4, 5];
// //arr=[1,2];//error
// console.log(arr.push(6));//[1,2,4,5,6]
// console.log(arr.unshift(3))
// console.log(arr)
// console.log(arr.indexOf(5))
// console.log(arr.includes(2))
console.log(arr[4]);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  calAge: function () {
    console.log(this);
    const abc = () => {
      console.log(this);
    };
    abc();
  },
};
//console.log(jonas.'last')

//THIS KEYWORD
console.log(this);

const abc = () => {
  console.log(this);
};

//abc()
//jonas.calAge()

const lastNameStr = "lastName";
const jasbirObj = {
  age: 23,
  lastName: "singh",
};

console.log(jasbirObj.lastName);
