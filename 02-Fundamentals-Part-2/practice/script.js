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

function foo(){
    var f = (i) => arguments[0] + i;
    return f(2);
}

function boo(){
    var f = function(i){
        arguments[0] + i;
    }

    return f(2);
}
// console.log(foo(10));
// console.log(boo(10))