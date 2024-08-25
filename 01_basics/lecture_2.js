/* Veriable --->>> Const, Let, Var */
const accountId = 12022002029007
let accountEmail = "arghadalal354@gmail.com"
var accountPassword = "4161" // not use var only use const, let
accountCity = "Kolkata"
let accountState;

// accountId = 2 // not allowed


accountEmail = "arghadalal82gmail.com"
accountPassword = "argha@4253"
accountCity = "Rampurhat"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])