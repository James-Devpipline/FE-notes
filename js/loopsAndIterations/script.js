/*
Iteration
- Iterators, Generators

*Loops with JS
Loops perform some process repetively until we say stop
  - traditional for
    - for(iterator ; condition ; incrimentor / decrementor) {}
  - for in
  - for of
  - while
  - do while
  - functional
*/

// - traditional for
//   - for(iterator ; condition ; incrimentor / decrementor) {}
const students = ["mitchell", "jake", "kerely", "john"]
const cohort4 = {
  students: [...students],
  avg: 3.0
}
for (i in cohort4) {
  console.log(i)
}

for (let i = 0; i < students.length; i++){
  console.log(students[i].toUpperCase())
}

// for (i in students) {
//   console.log(students[i].toUpperCase())
// }

for (const key in cohort4 ) {
  console.log(`KEY: ${key}, Val: ${cohort4[key]}`)
}

for (const student of students) {
  console.log(student)
}
// works as this works towards arrays as they are interable

// for (const key of cohort4) {
//   console.log(student)
// }
//    this returns an error as the object is not iterable



////////// - do while

let e = 0;

while (e < students.length) {
  console.log(students[e].toUpperCase())
  e++
}

// while e is less than the lengh of students, do this

let a = 0;

do { 
  console.log(students[a].toUpperCase())
  a = students.length + 5
} while (a < students.length)


///////// Callback function
function logCapitalStudents(student) {
  console.log(student.toUpperCase())
}

students.forEach(logCapitalStudents)

function forEach(arr, cb) {
  for (const i in arr) {
    cb(arr[i], i)
  }
}

forEach(students, (student) => console.log(student))