/*
Asynchronous JavaScript

- promises    (allows java script to run things in the background while doing other tasks)
- Async functions
- Await

- Fetch

Microservice vs Monolithic
RESTful Routing
(Representational State Transfer)
HTTP request/response
CRUD - Create, Read, Update, Delete / Destroy
HTTP Verbs (Methods):
  - GET -> Ask for something from the server. Reaching out and asking for something. 
  - POST -> Sending data to the backend (creation route [new record])
  - PUT / PATCH (Update methods) -> Update. Put updates entire resource, patch updates pieces of a resource
  - DELETE -> Destroys things :) 
(cant send a request body with a get request)


(If you were to look at your pants and they had a hole in them, post is sending your measurments to the tailor for new pants
Put would mean you were putting on a whole new pair of pants, patch means you would patch that hole)


Representational State Transfer

https://swapi.tech/documentation

JS Event Loop (research a little bit of this later)

JSON -> JavaScript Object Notation
JSON Documenation https://www.json.org/json-en.html
*/

let people;

fetch("https://swapi.tech/api/people?name=skywalker")
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
      reject(new Error("I'm not supposed to resolve, sorry"));
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

const promiseCallback = (greeting) => ({
  formatted: greeting[0].toUpperCase() + greeting.slice(1),
  greeting,
});

myPromise
  .then(promiseCallback)
  .then((data) => {
    console.log(data); // this prints the previous return above from the prev promise
    return "Boy, that was crazy. Oh yeah: " + data.formatted;
  })
  .then((finalData) => {
    console.log(finalData);
    throw new Error(
      "Eh, end of the line and you should've been off a long time ago"
    );
  })
  .catch((err) => console.error("My custom Error Log: ", err))
  .finally(() => console.log("oof, doesn't matter to me ooweee"));

console.log(">>>>>> This is after the promise in the natural flow of code");

console.log("Then me Second");
console.log(myPromiseFunc());
console.log("Then me Fourh, below where the example function is called");

// .then takes in the resolved value from the previous promise
// .catch takes in the rejection
// .finaly executes a callback whether the promise resolve or rejects
// 3 stages: pending, fulfilled, rejected

///////// pizza time! /////////

function makePizza(toppings = []) {
  return new Promise((resolve, reject) => {
    const bakeTime = 1000 + toppings.length * 300;

    if (toppings.includes("banana")) {
      reject(new Error("What are you doing??? No sir!")); // this does not break the program as it is not throwing an error like reject(throw new Error("What are you doing??? No sir!"))
    }

    setTimeout(() => {
      resolve(`
      Your pizza is complete, enjoy the following toppings:
      ${toppings.join(", ")}`);
    }, bakeTime);
  });
}

const meatPromise = makePizza(["pepperoni", "sausage", "canadian bacon"]);
const veggiePromise = makePizza(["pepper", "olives"]);
const hawaiinPromise = makePizza(["pineapple", "canadian bacon"]);
const abominationPromise = makePizza([
  "banana",
  "peppers",
  "mushroom",
  "pepperoni",
]);

// console.log(meatPromise)
// console.log(veggiePromise)
// console.log(hawaiinPromise)
// console.log(abominationPromise) these won't work as it does not use promise chaining

const resolvedPizza = (pizza) => console.log(pizza);
const rejectedPizza = (err) => console.error("Make Pizza Error: ", err.message);

meatPromise.then(resolvedPizza).catch(rejectedPizza);

veggiePromise.then(resolvedPizza).catch(rejectedPizza);

hawaiinPromise.then(resolvedPizza).catch(rejectedPizza);

abominationPromise.then(resolvedPizza).catch(rejectedPizza);

Promise.all([meatPromise, veggiePromise, hawaiinPromise, abominationPromise])
  .then((pizzas) => {
    console.log(pizzas);
  })
  .catch(rejectedPizza);

// promise.all documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

Promise.allSettled([
  meatPromise,
  veggiePromise,
  hawaiinPromise,
  abominationPromise,
])
  .then((pizzas) => {
    console.log(pizzas);
    pizzas.forEach((pizza) => {
      if (pizza.status === "rejected") {
        throw new Error("Ah cheese!!!!");
      }
    });
  })
  .catch(rejectedPizza);

// promise.all breaks all once one rejection is met, while promise.allsettled runs through all promises and then returns both the rejected errors and the all the fullfilled promises (the fullfilled promises are inside one big object)

///////// Api Response stuff /////////
console.log("///////// Api response stuff /////////");

const myOtherPromise = () =>
  new Promise((res, rej) =>
    setTimeout(
      () => res("Some Data has been resolved, can continue logging"),
      4000
    )
  );

async function main() {
  console.log("starting req...");
  const apiResponse = await fetch("https://swapi.tech/api/planets");
  console.log("Stripping Json");
  const data = await apiResponse.json();
  console.log(apiResponse);
  console.log("Finished!!!");
  console.log(data);
  console.log("Wait to resolve before logging this");

  const promiseData = await myOtherPromise();

  console.log(promiseData);

  // document.body.innerText = document.createTextNode(promiseData.url)
  console.log(promiseData);

  // apiResponse
  //   .then(res => res.json())
  //   .then(console.log)
  // this throws a typeerror error
}

main();

// fetch('https://httpbin.org/get')
//   .then(res => res.json())
//   .then(console.log)

async function greeting() {
  try {
    await myOtherPromise();
    throw new Error("Howdy Error");
    // return "Howdy"
  } catch (e) {
    throw new Error(e);
  }
}

greeting()
  .then((data) => console.log(data))
  .catch((err) => console.error("Lazy greeting error: ", err.message));

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function lazyLoop() {
  for (let i = 0; i < 10; i++) {
    await sleep(1000);
    console.log(i);
  }
}

lazyLoop();

const prom = new Promise((resolve, reje) => {
  try {
    resolve();
  } catch (e) {
    reje();
  }
});

fetch("https://swapi.tech/api/people?name=r2", {
  method: "POST",
})
  .then((res) => res.text())
  .then((data) => document.body.appendChild(document.createTextNode(data)))
  .catch((err) => console.log("Swapi"));

///////// JSON -> JavaScript Object Notation

// const objectExample = {
//   "key": 1,
//   unstringedKey: "ryan",
//   Symbol("key1"): () => this.unstringedKey,
// }

// The bit of code Ryan deletes at 3:49pm for the lecture on 03/09/23

const loginData = {
  email: "ryan@curtis.com",
  password: "1234",
};

console.log(loginData.toString());

const stringifiedData = JSON.stringify(loginData);

console.log(stringifiedData);

fetch("https://httpbin.org/post", {
  method: "POST",
  body: JSON.stringify(loginData),
  headers: {
    "content-type": "application/form-data",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// .then(res => {
//   if(res.statusCode >= 200 || res.statusCode < 400) {
//     res.json()
//   }
// })
