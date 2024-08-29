/* Strings in Javascript */

const name = "argha"
const repoCount = 50

// console.log(name + repoCount + "Value"); out dated

// Backticks Method --->> String Interpolation

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('argha_dalal_saru')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(0, -4)
console.log(anotherString);

// const newString = "       argha     "
console.log(newString);
console.log(newString.trim());


const url = "http://argha.com/argha%10dalal"
console.log(url.replace('%10', '_'));

console.log(url.includes('argha'));
console.log(url.includes('saru'));
 

console.log(gameName.split('_'));


