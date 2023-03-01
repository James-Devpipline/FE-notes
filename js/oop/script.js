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