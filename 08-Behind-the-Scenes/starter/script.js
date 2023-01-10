'use strict';


function func(a, b, ...c) {
    console.log(a, b, c);
}

func(1, 2, 3, 4, 5);

const obj = {
    age: 21,
    firstName: "Jasbir"
}

function func1(obj) {
    obj.age = 23;  
    console.log(obj);
}

func1(obj)
console.log(obj);

