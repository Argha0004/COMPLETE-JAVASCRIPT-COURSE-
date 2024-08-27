/* Stack and Heap memory in javascript */

// Stack(Primitive) -> Means we have declear a veriable, we get a copy on it
// Heap(Non-Primirive) -> But here we get reference of any object

let myYouTubeName = "arghadalal354@gmail.com"
let anotherName = myYouTubeName
anotherName = "argha_dalal"
console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    name: "argha",
    age: 22
}

let userTwo = userOne
userTwo.age = 20

console.log(userOne.age);
console.log(userTwo.age);
