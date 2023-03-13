/* 
Review 3/13/2023

Asynchronouse Development with JavaScript

fetch
  - Requesting resources from a web server
  - http request/response model
  - fetch returns promise that resolves to Response object (promise chains .then, .finally, .catch)
  - <Resopnse>.then((response) => {res.json()})

JSON Interface
  - parse (used to take apart JSON data)
  - stringify (used to send JSON data)
promises
resolve
reject
async
await

try catch blocks
throw new error
json

HTTP Server status codes
CRUDDA -> Create Read Update Delete Deactivate Activate
HTTP Methods
  - POST -> sends a body. 201 (the request has succeeded and has led to the creation of a resource). send data to server
  - GET -> no body. 200 (all good). Ask for something from the server (Read)
  - DELETE -> no body. 200. (Delete/Destroy)
  - PUT -> body, 200, whole data set(Update)
  - PATCH -> body, 200 piece of data set (Update)
  (forgot password routes are good to using PATCH)

*/

// POST, PUT, PATCH

document.body.addEventListener("click", () => {
  alert("OUCHE!!!!");
});
