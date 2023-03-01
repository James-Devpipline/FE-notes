/* 
OOP - Object Oriented Programming
classes / objects via templates (blueprints)

- declare
- construct
- instantiation
- inherit
- polymorphism 
- static vs instance methods
- Abstract class

JS Object factory pattern
Syntactic sugar
*/

class User {
  constructor(username) {
    this.username = username
  }
}


// function User(username) {
//   this.username = username
// }

const user = {
  username: "james"
}

const james = new User("james")

console.log(user.username)
console.log(james.username)



class Admin extends User {
  postGrades(student) {
    console.log(`Student id ${student.id} is whack`)
  }
}

const ryan = new Admin("RyGuy")
const student = new User("SomeStudentFails@1")

student.id = 5

console.log(ryan.postGrades(student))

console.log(typeof Admin)

////////////////////////////////////////////////////////////////////////////////

// ------ declare
console.log('------ declare -----')

class TownHome {
  // constructor is the first method that is automaticall called on instantiation
  constructor(elevation = "rock", color, garage) {
    // console.log("I ran!")
    this.elevation = elevation || "rock"
    this.color = color
    this.garage = garage
    this.isAlarmSet = false
  }

  // instance method
  setAlarmToggle() {
    this.isAlarmSet = !this.isAlarmSet

    return this.isAlarmSet
  }

  // static (class method)

}

// console.log("I'm pre-instantiation")
const fiftyFivePilot = new TownHome("barn", "red", 2)
const fiftySevenPilot = new TownHome(null, "yellow", 1)
                                    // uses truthy system, can be null, 0, or undefined
console.log(fiftyFivePilot)

fiftyFivePilot.color = "blue"


console.log(fiftyFivePilot)
console.log(fiftyFivePilot.color)


fiftySevenPilot.setAlarmToggle()
console.log(fiftySevenPilot)