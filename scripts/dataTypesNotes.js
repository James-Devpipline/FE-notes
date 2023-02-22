/* 
JS Data types

- Dynamic typing and Weakly typed
  - No particular type of a variable
  - can be reassigned to any type
  - implicit conversion


Two Main Types:
- primitive types
  - Lowest form of data that we work with in the language
  - Immutable

  Types:
   - Null -> None
   - Undefined -> un-initizalized variable
   - Boolean -> true, false
   - Number 
     - Precision
     - floats, integers, NaN
   - String -> combination of characters. "", '', ``
   
   - BigInt -> cast to ignore the safe max int size data
   - Symbol -> unique keys
  
- objects
  Types:
   - Collections
     - arrays
     - objects    
*/

// Type casting
console.log("100" + 42) // "10042"
console.log("42" + 100) // "42100"
console.log("100" - 42) // 58

const age = 35;
console.log(String(age))
console.log(age.toString())

console.log(typeof age)

const ageTwo = '35';
console.log(Number(ageTwo))
console.log(parseInt(ageTwo))
console.log(parseFloat(ageTwo))
console.log(+ageTwo)
console.log(parseInt("1234567890 is pretty rad, call me!"))
console.log(parseInt("oh, my bad. THe num is 1234567890 is pretty rad, call me!"))
console.log(Number(true))
console.log(Number(false))

// Some basic string methods
const str = "The quick brown fox jumps fox over the lazy dog";

console.log(str.length)
console.log(str[2]) // e
console.log(str[str.length - 1]) // g
console.log(str.charAt(2)) // e
console.log(str.concat(" over and over again.")) 
console.log(str.includes("fox"))
console.log(str.startsWith("The quick black"))
console.log(str.endsWith("d"))

console.log(str.repeat(5))
// console.log(str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/))
// console.log('123-456-7890'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/))

console.log(str.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/))
console.log('Hey howdy, 123-456-7890'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/))

console.log(str.indexOf('fox')) // 16
console.log(str.lastIndexOf('fox')) // 26
console.log(str.replace('fox', 'vampire')) 

const newString = str.replaceAll('fox', 'dog');

console.log(newString)
const foxIndex = str.indexOf("fox")
const foxString = str.slice(4, foxIndex)

console.log(foxString)
console.log(foxString.trim())

console.log(foxString.toUpperCase())
console.log(foxString.toLowerCase())

/* 
JS Operators 
- Arithmetic
+ - add
- - subtract
/ - divide
* - multiply
% - modulus (remainder)
** - exponent

- Assignment
- Incrementors and Decrementors
++val;
val++;

--val;
val--;

- Compound Assignment
+=
-=
*=
**=
%=
/=
*/

let num = 10

num %= 5

console.log(num)



