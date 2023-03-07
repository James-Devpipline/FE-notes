/*
Asynchronous JavaScript

- promises
- Async functions
- Await

https://swapi.tech/documentation
*/

let people;

fetch("https://swapi.tech/api/people")
  .then((res) => res.json())
  .then((data) => {
    console.log("From Within Fetch: ", data.results);
    people = data.results;
  });

console.log("AFTER the fetch: ", people); // this happens before the fetch above

let peepole;

setTimeout(() => {
  people = ["john", "shawn", "denise"];
  console.log(peepole);
}, 3000);

// JS Event Loop

// promises
// promises states -> pending, fulfilled, rejected
// promises chaining -> promise, .then(cb), .catch(error cb), .finally(cb)
let shouldResolve = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve("howdy");
    } else {
      reject("I'm not supposed to resolve, sorry");
    }
  }, 2000);
});

myPromise
  .then((greeing) => {
    return greeting[0].toUpperCase() + greeting.slice(1);
  })
  .then((formattedGreeting) => {
    console.log(formattedGreeting);
    return "Boy, that was crazy. Oh yeah: " + formattedGreeting;
  })
  .then(console.log)
  .catch((err) => console.log(err));
