/*
Asynchronous JavaScript

- promises
- Async functions
- Await

https://swapi.tech/documentation
*/

// let people;

// fetch("https://swapi.tech/api/people")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("From Within Fetch: ", data.results);
//     people = data.results;
//   });

// console.log("AFTER the fetch: ", people); // this happens before the fetch above

// let peepole;

// setTimeout(() => {
//   people = ["john", "shawn", "denise"];
//   console.log(peepole);
// }, 3000);

// // JS Event Loop

// // promises
// // promises states -> pending, fulfilled, rejected
// // promises chaining -> promise, .then(cb), .catch(error cb), .finally(cb)
// let shouldResolve = true;

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (shouldResolve) {
//       resolve("howdy");
//     } else {
//       reject("I'm not supposed to resolve, sorry");
//     }
//   }, 2000);
// });

// myPromise
//   .then((greeing) => {
//     return greeting[0].toUpperCase() + greeting.slice(1);
//   })
//   .then((formattedGreeting) => {
//     console.log(formattedGreeting);
//     return "Boy, that was crazy. Oh yeah: " + formattedGreeting;
//   })
//   .then(console.log)
//   .catch((err) => console.log(err));

// pizza!

function makePizza(toppings = []) {
  return new Promise((resolve, reject) => {
    const bakeTime = 1000 + toppings.length * 100;

    if (toppings.includes("bannana")) {
      reject(new Error("what are you doing? No sir!"));
    }

    setTimeout(() => {
      resolve(`
      Your pizza is completed, enjoy the following toppings:
      ${toppings.join(", ")}
      `);
    }, bakeTime);
  });
}

const meatPromise = makePizza(["pepperoni", "sausage", "canadian bacon"]);
const veggiePromise = makePizza(["peppers", "olives", "pineapple"]);
const hawaiinPromise = makePizza([
  "pineapple",
  "olives",
  "muhshroom",
  "green peppers",
]);
const rejectPromise = makePizza(["bannana", "olives"]);

console.log(meatPromise);
console.log(hawaiinPromise);
console.log(rejectPromise);

const resolvedPizza = (pizza) => console.log(pizza);
const rejectedPizza = (err) => console.error("Make pizza Error: ", err.message);

meatPromise.then(resolvedPizza).catch(rejectedPizza);

hawaiinPromise.then(resolvedPizza).catch(rejectedPizza);

rejectPromise.then(resolvedPizza).catch(rejectedPizza);
