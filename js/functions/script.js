/* 
JS FUNctions

- functions declarations
- function expressions (anonymous functions)
- arrow functions
- IIFE (immediatetly invoked function expression)
- Constructor Functions

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


// - arrow functions
const fullName = (first, last) => {
  return first[0].toUpperCase() + first.slice(1) + ' ' + last[0].toUpperCase() +  last.slice(1)
}

// implicit return, no need for the brackets, or the return value!
const fullNameImplicit = (first, last) => first[0].toUpperCase() + first.slice(1) + ' ' + last[0].toUpperCase() +  last.slice(1)

fullNameImplicitMultiline = (first, last) => (
  first[0].toUpperCase() + first.slice(1) + ' ' 
  + last[0].toUpperCase() +  last.slice(1)
)

console.log(fullName("james", "hales"))
console.log(fullNameImplicit("james", "hales"))
console.log(fullNameImplicitMultiline("james", "hales"))
