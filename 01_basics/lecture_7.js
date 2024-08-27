/* Data types of javascript summary */

/*
(i)Primitive Data Types:
7 types:-
1. String
2. Number
3. Boolean
4. undefined
5. null
6. Symbol (ES6)
7. BigInt




(ii)Reference(Non-Primitive) Data Types:
3 types:-
1. Objects
2. Arrays
3. Functions

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


// Example of Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof(id));
console.log(id === anotherId);


// Example of BigInt
const bigNumber = 12022002029007855554155n
console.log(typeof(bigNumber));


// Example of Array
const heros = ["saikat", "nayan", "sujit"]
console.log(heros[1]);
console.log(typeof(heros));

// Example of Object
let myObj = {
    name: "saikat",
    age: 25,
    address: {
        street: "kathmandu",
        city: "nepal"
    }
}
console.log(myObj.name);

// Example of Function
const myFunction = function() {
    console.log("hello world");
}

