/* Number and Maths in Javascript */

// *************** Numbers *****************
// 

// **************** Maths ****************
// console.log(Math); value always be get from 0 to 1 like, 0.1, 0.54
// console.log(Math.abs(-4)); 
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(25));
// console.log(Math.sin(25));
// console.log(Math.min(4, 5, 1, 2, 7, 8, 6));
// console.log(Math.max(4, 5, 1, 2, 7, 8, 6));

console.log(Math.random()); // value always be get from 0 to 1 like, 0.1, 0.54
console.log(Math.random()*10 + 1); // Shift left by 1 
console.log(Math.floor(Math.random()*10) + 1); // many time value get 0.1 then the value will be get 0 for floor method. But here we get value 1 to 9 for this reason we added 1


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

