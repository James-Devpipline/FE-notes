/* 
JS FUNctions

- functions declarations
- function expressions (anonymous functions)
- arrow functions
- IIFE (immediatetly invoked function expression)
- Constructor Functions
- HOF - higher order functions

- pure functions
- scope
- implicit return

*AFTER THIS LECTURE, ALL ASSIGNMENTS MUST UTILIZE FUNCTIONS

*/

// Function Declarations
function sum(a,b) {
  return a + b
}

// in python it would be
// def sum():
//   function code here



[1, 2, 3].forEach(sum) // not envoking here (also doesn't work)

console.log(sum(1, 1)) // envoking it here

// JS functions are treated as first-class citizens (meaning they can be envoked wherever)
// functions are hoisted (can be used before it is declared)

const myExpression = function(num, idx) {
  console.log(num + idx)
}; // NEED THAT SEMICOLON THERE

[1, 2, 3].forEach(() => {})


// ----- arrow functions
const fullName = (first, last) => {
  return first[0].toUpperCase() + first.slice(1) + ' ' + last[0].toUpperCase() +  last.slice(1)
}

// implicit return, no need for the brackets, or the return value!
const fullNameImplicit = (first, last) => first[0].toUpperCase() + first.slice(1) + ' ' + last[0].toUpperCase() +  last.slice(1)

fullNameImplicitMultiline = (first, last) => (
  first[0].toUpperCase() + first.slice(1) + ' ' 
  + last[0].toUpperCase() +  last.slice(1)
)

// const arrowSum = a => a + 10 // this work as well, if there is only one perameter then it does not need parenthesis

// const arrowSum = a, b => a + b
// this does not work, needs parens. Throws error "Uncaught SyntaxError: Missing initializer in const declaration"

// if there are none, or more than one parameters you must use parens
const arrowSum = () => 4 + 4


console.log(fullName("james", "hales"))
console.log(fullNameImplicit("james", "hales"))
console.log(fullNameImplicitMultiline("james", "hales"))
console.log(arrowSum(10)) //the 10 in the paren is for the other functions that use the function name but are commented out, the last one with 4 + 4 does not take into account the number inside the parens where the function is being invoked


// ----- IIFE (immediatetly invoked function expression)
// these are functions that are immedialy called when js comes across them, not when they are called later down the line


const myIife = (function() {
  console.log("hey, i ran right away!!!")

  return {
    role: "super-admin"
  }
})()



// ----- Constructor Functions
// 

// class User{}

// const me = new User()

// console.log(typeof me) // returns object
// console.log(typeof User) // returns function

function User(name, age) {
  this.name = name
  this.age = age
}

const james = new User("james", 21)

console.log(james)

// const obj = {
//   fName: "james",
//   getName: function() {
//     return this.fName
//   }
// } // returns "james"
const obj = {
  fName: "james",
  getName: function() {
    return this
  }
} // returns {fName: 'james', getName: ƒ}
// that is because "this" is just the obj, the same obj in "log(obj.getname()"


console.log(obj.getName())



// ----- HOF - higher order functions

function addHof(a) {
  return (b) => a + b
}

const addTen = addHof(10)

console.log(addTen)

const myValue = addTen(15)

console.log(myValue)


function includeLog(func) {
  console.log("Adding your log.....")
  console.log(func())
  console.log("finishing function...")
}

function sum(a, b) {
  return a + b
}

includeLog(() => sum(1, 1))