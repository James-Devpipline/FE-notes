// variables
//(The nike box is the variable and your Air Force 1’s are data)
// variable scope
// hoisting
// camelCase for variables, funcitons, and file names

// VARIABLE DECLARATIONS: var, let, const

/*
  VAR:
    - global
    - reassigned, redeclared

  Const:
  (constant)
    - script scoped
    - cannot be reasigned or redeclared
    - has to be initialized at the same time as a declaration

    let:
      - can be reassigned but not redeclared 
*/ 

// var firstName = 'james'

// function myFunc() {
//   var firstName = 'jerry'

//   return firstName
// }

// Do your best to not Pollut the global namespace

// console.log(firstName)
// console.log(myFunc())
// console.log(firstName)
// console.log(alert("Hello retard"))
// console.log(window)

// const firstName = 'James'

// let lastName = 'Hales'

function login() {
  const ageValidation = prompt("Enter your age: \n")
  let access;

  if(+ageValidation >= 21) {
    access = "allowed";
  } else{
    access = "go away"
  }
  
  return access
}

console.log(login())