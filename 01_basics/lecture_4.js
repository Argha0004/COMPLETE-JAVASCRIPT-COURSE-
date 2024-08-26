/* Datatype conversion confusion */

// let score = "argha"
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); /* This line output is NaN, that means "Not a Number". Other side here null value's output is '0', for undefined become a 'NaN;, for boolean 'true' output must be gave '1', string don't change in number for this reason output must be 'NaN' */

/* 
"33" => 33
"33abc" => NaN
"true" => 1, "false" => 0
*/

let isLoggedIn = "argha"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* 
1 => true, 0 => false
"" => false
"argha" => true 
*/ 


let someNumbr = 50
let stringSomeNumbr = String(someNumbr)
console.log(stringSomeNumbr);
console.log(typeof stringSomeNumbr);