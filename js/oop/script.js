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

static methods, instance methods
(instance attributes vs class attributes)

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
  // static generalContract = '
  //   You agree to this stuff
  //   '
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
  static getFacts() {
    return `
    Townhomes used to be a great passive income oppertunity.
    Then the boomers ruined it
    `
  }

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

console.log(TownHome.getFacts())


// ------- rapid fire bit

class Fish {
  constructor (firstName, lastName="Fish", skeleton="bone", eyelids=false) {
    this.firstName = firstName
    this.lastName = lastName
    this.skeleton = skeleton
    this.eyelids = eyelids
  }

  swim() {
    return `${this.firstName || "Fish"} swim forwards`
  }

  swimBackwards() {
    return `${this.firstName || "Fish"} swim backwards`
  }
}

// Inheritance
class Trout extends Fish {
  
}

const bob = new Trout("Bob", "Fishers")

console.log(bob.firstName)
console.log(bob.lastName)
console.log(bob.eyelids)
console.log(bob.swim())
console.log(bob.swimBackwards())


// Subclass (child class) that has it's own attributes
class ClownFish extends Fish {
  liveWithAnemone() {
    return "The Clownfish is coexisting with the sea anemone"
  }
}

const casey = new ClownFish("Casey")

console.log(casey.firstName)
console.log(casey.lastName)
console.log(casey.eyelids)
console.log(casey.swim())
console.log(casey.swimBackwards())
console.log(casey.liveWithAnemone())
// console.log(bob.liveWithAnemone())

// Polymorphism (many forms)
class Shark extends Fish {
  // Overrid constructor and swimBackwards methods, but inherits the swim method
  constructor(firstName, lastName="Shark", skeleton="cartilage", eyelids=true) {
    super();

    this.firstName = firstName
    this.lastName = lastName
    this.skeleton = skeleton
    this.eyelids = eyelids
  }

  // Polymorphism
  swimBackwards() {
    return `${this.firstName} cannot swim backwards, but can sink backwards`
  }
}

const sammy = new Shark("Sammy")
console.log(sammy.firstName)
console.log(sammy.lastName)
console.log(sammy.swim())
console.log(sammy.swimBackwards())