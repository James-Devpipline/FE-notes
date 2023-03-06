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
  }, 3000000);

console.log("AFTER the fetch: ", people); // this happens before the fetch above
