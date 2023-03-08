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
});

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
      reject(new Error ("I'm not supposed to resolve, sorry"));
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

const promiseCallback = greeting => ({formatted: greeting[0].toUpperCase() + greeting.slice(1), greeting})

myPromise
  .then(promiseCallback)
  .then((data) => {
    console.log(data) // this prints the previous return above from the prev promise
    return "Boy, that was crazy. Oh yeah: " + data.formatted
  })
  .then(finalData => {
    console.log(finalData)
    throw new Error("Eh, end of the line and you should've been off a long time ago")
  })
  .catch((err) => console.error("My customer Error Log: ", err))
.finally(() => console.log("oof, doesn't matter to me ooweee"))

console.log(">>>>>> This is after the promise in the natural flow of code")


console.log("Then me Second");
console.log(myPromiseFunc());
console.log("Then me Fourh, below where the example function is called");

// .then takes in the resolved value from the previous promise
// .catch takes in the rejection
// .finaly executes a callback whether the promise resolve or rejects

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

