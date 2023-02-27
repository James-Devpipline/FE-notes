/* 
Conditionals

control structures

if, if else, if else if
and: &&
or: ||
xor: ^
compound conditionals
falsey / truthy
strict equality
ternary operators
  - question ? true : false
switch statements
optional chaining
*/

const weather = 65;

if(weather < 70) {
  console.log("grab a light sweater")
} else if (weather > 80) {
  console.log("Drop that tee and grab that tank top!")
} else {
  console.log("throw on that tee!")
}


const user = {
  email: "r@curtis.com",
  userName: "rydude",
  password: "1234",
  status: "activated",
  role: "error"
}

let access;

if(((user.email === "r@curtis.com" || user.Name === "rydude") && user.password === "1234") && user.status !== "deactivated"){
  access = "granted"
} else {
  access = "get out of here"
}

console.log(access)

// const role = "admin"

// if(role && user.role === "admin") {
//   console.error("Cannot use this route")
// }

// bad practice because if the role is something nonsense it will still pass them through

const firstName = "how"

if(firstName){
  console.log("yes, firstname is true")
  if(firstName === "ryan") {
    console.log("hi")
  }
} else {
  console.log("bye")
}


const firstNameOther = '' // falsey
const lastNameOther = " " // truthy
const dataOther = [] // truthy
const userOther = {} // truthy
const age = 1 // truthy because it has value
const nonValues = 0 // falsey as 0 does not have value


if(lastNameOther) {
  console.log("WOW!!!!!")
}

const equalAge = '35'
let looseEqual;

if(equalAge == 35) {
  looseEqual = true
} else {
  looseEqual = false
}

console.log(`Loose equal: ${looseEqual}`) // results in True

const strictAge = '35'
let strictEqual;


if(strictAge === 35) {
  strictEqual = true
} else {
  strictEqual = false
}

console.log(`Strict equal: ${strictEqual}`) // results in False

// With loose equal it looks at just value, but with strict equal it looks at both value and actual type 

const typeCastStrictAge = '35'
let typeCastStrictEqual;
  if(typeCastStrictAge === String(35)) {
    typeCastStrictEqual = true
  } else {
    typeCastStrictEqual = false
  }


console.log(`Type Cast Strict Equal: ${typeCastStrictEqual}`) //Results in true because the type cast ensured it to check if it was a string and equal to 35 (the S in string when type casting has to be capital)



// ternary operators
//   - question ? true : false
const smokerAge = 12
// let canSmoke = smokerAge >= 21 ? true : false
let canSmoke = smokerAge >= 21 ? "Can buy smokes" : "Too young"
  // if(smokerAge >= 21) {
  //   canSmoke = true
  // } else {
  //   canSmoke = false
  // }
console.log(`canSmoke: ${canSmoke}`)


const hasQuit = true
const otherSmokerAge = 22

let chainedCanSmoke = otherSmokerAge >= 21 ? hasQuit ? "What are you doing? But you can still buy" : "Can buy smokes" : "Too young"

// let chainedCanSmoke = otherSmokerAge >= 21 && !hasQuit // returns false

console.log(`chainedCanSmoke: ${chainedCanSmoke}`)


// switch statements

const switchAge = 21

  // if(age === 19) {
  //   console.log("something")
  // } else if (age === 21) {
  //   console.log("something else")
  // } else {
  //   console.loge("Doesn't match anything")
  // }

function ageCheck() {
  switch(switchAge) {
    case 19:
      console.log("user is 19")
      break;
    case 21:
      console.log("user is 21")
      break;
    default:
      console.error("Man, nothing is matching today")
  }
}

ageCheck()