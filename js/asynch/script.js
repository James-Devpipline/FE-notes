/*
Asynchronous JavaScript

- promises    (allows java script to run things in the background while doing other tasks)
- Async functions
- Await

https://swapi.tech/documentation

JS Event Loop (research a little bit of this later)
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

///////// Promises /////////
console.log("///////// Promises /////////");
// Promise states -> pending, fulfilled, rejected
// Promise chaining -> Promise, .then(callback), .catch(error callback), .finally(callback)

// Documentation on Promise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

function successfulPromise(data) {
  console.log(data);
}

function erroredPromise(err) {
  console.error(err.message);
}

// class Promise {
//   constructor(executor) {
//     this.executor = executor;
//   }
// }

let shouldResolve = false;

const myPromise = new Promise((resolve, reject) => {
  console.log("You should see me first");
  setTimeout(() => {
    if (shouldResolve) {
      resolve("howdy");
    } else {
      reject("I'm not supposed to resolve, sorry");
    } //can also create a new error with new Error("error text here")
  }, 2000);
});
// new is used to instantiate a new object. Generally is used like this, doesn't matter what the obj is
// below is what the above promise is basically doing
function myPromiseFunc() {
  console.log(
    "Then me Third (this console log is stored in the example function, lines above the second one)"
  );
  if (shouldResolve) {
    return "howdy from the example function";
  } else {
    return "oof from the example function";
  }
}

myPromise
  .then((greeting) => {
    return greeting[0].toUpperCase() + greeting.slice(1);
  })
  .then(() => {})
  .catch((err) => console.error(err));

console.log("Then me Second");
console.log(myPromiseFunc());
console.log("Then me Fourh, below where the example function is called");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ****************MAKE A PIZZA!******************

function makePizza(toppings = []) {
  return new Promise((resolved, reject) => {
    const bakeTime = 1000 + toppings.lenght * 100;

    if (toppings.includes("pineapple")) {
      reject(new Error("WHAT are you doing???"));
    }

    setTimeout(() => {
      resolved("Your pizza is done: ${toppings.join(", ")}", bakeTime);
    });

    const meatPromise = makePizza(["pepperoni", "sausage", "ham", "hamburger"]);
    const hawaiiPromise = makePizza(["pineapple", "olives", "ham"]);
    const veggiePromise = makePizza([
      "mushrooms",
      "peppers",
      "olives",
      "onion",
    ]);

    const resolvedPizza = (pizza) => console.log(pizza);
    const rejectPizza = (err) =>
      console.error("make pizza error:", err.message);

    meatPromise.then(resolvedPizza).catch(rejectPizza);
    // .then((pizza => {
    //   console.log(pizza);
    // })
    //   .catch((err) => console.error("make Pizza Error: ", err.message));

    veggiePromise.then(resolvedPizza).catch(rejectPizza);
    // .then((pizza => {
    //   console.log(pizza);
    // })
    //   .catch((err) => console.error("make Pizza Error: ", err.message));

    hawaiiPromise.then(resolvedPizza).catch(rejectPizza);
    // .then((pizza => {
    //   console.log(pizza);
    // })
    //   .catch((err) => console.error("make Pizza Error: ", err.message);
  });
}
