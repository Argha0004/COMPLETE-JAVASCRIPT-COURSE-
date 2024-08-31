/* Array in Javascript */

const myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray[0]);

const myHeroes = ["saikat", "nayan", "sujit"]

const myArray2 = new Array (1, 2, 3, 4, 5)

// Array Method
// myArray.push(6)
// myArray.push(7) // add 7 elements
// myArray.pop() // remove the last element

// myArray.unshift(9) 
// myArray.shift() 

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(5));


// const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A :", myArray);

const myAr1 = myArray.slice(1, 3)

console.log(myAr1);
console.log("B: ", myArray);

const myAr2 = myArray.splice(1, 3);
console.log("C: ", myArray);
console.log(myAr2);

