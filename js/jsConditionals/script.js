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



const newAge = 35
let canSmoke;

if(newAge >= 21) {
  canSmoke = true
} else {
  canSmoke = false
}

console.log(canSmoke)