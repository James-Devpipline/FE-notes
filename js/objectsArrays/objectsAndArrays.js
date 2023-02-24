// Object, Array
const age = 35
const label = "street"

const myObject = {
  'firstName': 'james',
  lastName: 'hales',
  "last name": "",
  contact: {
    lastName: "other",
    phone: "1234567890",
    [label]: "123 butthead str"
  },
  age,
  greeting: function(first, last) {
    return `Welcome, ${first} ${last}`
  }
}

console.log(myObject)

// console.log(myObject.greeting(myObject.firstName, myObject.lastName))
console.log(myObject.contact["street"])
console.log(myObject.lastName)
console.log(myObject.contact[label])
console.log(myObject.contact.phone)

// console.log(myObject)

// myObject.age = 70;

// myObject.newKey = "howdy"

// myObject[label] = "howdy"

// delete myObject.greeting

// console.log(myObject)

