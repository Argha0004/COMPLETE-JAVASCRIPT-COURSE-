/* Array part 2 in Javascript */
const myHeros = ["nayan", "saikat", "sujit"]
const myHeros2 = ["Ram", "Sam", "Jadu"]

// myHeros.push(myHeros2)
// console.log(myHeros);
// console.log(myHeros[3][1]);

// const allHeros = myHeros.concat(myHeros2)
// console.log(allHeros);

// Spread Methods
const allNewHeros = [...myHeros, ...myHeros2]
// console.log(allNewHeros);


const anotheArr = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12,[13, 14, 15]], 16]
const realAnotherArr = anotheArr.flat(2)
// console.log(realAnotherArr);

// console.log(Array.isArray("Argha"));
// console.log(Array.from("Argha"));
// console.log(Array.from({name: "Argha"})); // Interesting Case


let score1 = 100
let score2 = 90
let score3 = 80

console.log(Array.of(score1, score2, score3));
