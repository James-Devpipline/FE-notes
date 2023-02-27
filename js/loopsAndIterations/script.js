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

// for (let i = 0; i < students.length; i++){
//   console.log(students[i].toUpperCase())
// }

// for (i in students) {
//   console.log(students[i].toUpperCase())
// }

for (const key in cohort4 ) {
  console.log(`KEY: ${key}, Val: ${cohort4[key]}`)
}