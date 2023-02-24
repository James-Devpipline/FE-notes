// Objects (vs primitives)
  // object
  // array

// first method that runs when you initiate your class (rewatch lecture from 02/23/2023 to finish these notes, about 14 min into the video)

const constructedArray = new Array("1","two","three")

const arrayLiteral = [3]
const mixed = [35, "ryan", () => "howdy"]

console.log(constructedArray)
console.log(arrayLiteral)
console.log(arrayLiteral)


const todos = [
  {
    id: 1,
    title: "teach class",
    done: false
  },
  {
    id: 2, 
    title: "show how to access nested values",
    done: false
  }
]

console.log(todos[1].done)

todos[1].done = !todos[1].done //this is to toggle it as the ! means not

console.log(todos[1].done)

todos[1].done = true // this can be done if we already know what it will be at the time

console.log(todos[1].done)

const arr = ["first", "second"]

// arr[0] = "jake" // reasigns that index
arr.push("left") // adds to end of the array
arr.push("right")

const poppedName = arr.pop() // removes from end of array

console.log(arr)
console.log(poppedName)

// Front of Array

arr.unshift("blue", "red") // adds to front of array

arr.shift() // opposite of pop, removes from front

console.log(arr)

arr.splice(2, 0, "spliced into the mix")

console.log(arr)

const splicedVal = arr.splice(2,1,"get spliced")
console.log(arr)
console.log(splicedVal)

const splicedValMix = arr.splice(arr.indexOf("1"), 2, "wowowowowow")

console.log(splicedValMix)
console.log(arr)

console.log(arr.slice(0,2))



const arrOne = ["ryan", "denise", "karely"]
const arrOneCopy = arrOne // this makes it the exact same as the other array in memory

arrOneCopy.push("olivia")
console.log(arrOneCopy)

console.log({id:1} === {id:1}) // Returns false, referencing other objects due to how its stored in memory
console.log(arrOneCopy === arrOne)

console.log("Copy: ", arrOneCopy)
console.log("Original: ", arrOneCopy)
// both of these are the exact same due to when arrOneCopy was created


// how to deep copy
const arrTwo = ["ryan", "denise", "karely"]
const arrTwoCopy = [...arrTwo]

arrTwo.push("olivia")

console.log("Copy: ", arrTwoCopy)
console.log("Original: ", arrTwo)
