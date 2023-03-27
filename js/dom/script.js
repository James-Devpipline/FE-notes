/* 
Browser JS

DOM 
  - Document Object Model

.. el(element), #

Select elements (query)
Create Elements (dom nodes[html elements, text])
Append to those elements [properties, children]
Add Elements to the DOM
Remove elements from the DOM
Listen for specific browser events (IE: click, scroll, mouseenter, mouseleave.....)
some good documentation \/
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
*/

// const parentDiv = document.createElement("div");
// const ChildH1 = document.createElement("h1");
// const parentChildText = document.createTextNode("Hello World");

// parentDiv.classList.add("class-one");
// parentDiv.appendChild(parentChildText);
// console.dir(parentDiv);

// document.body.appendChild(parentDiv);
// usually wouldn't do it like this, sometimes might, would usually be querying an element

/////////////// keep things by themselves until it makes sense, keep html to html, and js to js, until you need them to mix ///////////////

// const div = {
//   class: "class-one",
//   children: ["Hellow World"],
// };

/* 
Query Selector:
  getElementById => Fetch's by id
  querySelector => generic selector. grabs only first instance
  querySelectorAll => generic selector. All instances, returned in a node list
  getElementByClassName => grabs all instances that match the given class list. HTML Collection
*/

/////////////////////// Dom Selectors. .class, #id, element
const rootEl = document.getElementById("root");
// not plural because you should only have one element with the same ID
const rootElSelector = document.querySelector("#root");
// don't do this as its not explicitly grabbing the specific info you want
const firstDiv = document.querySelector("h1");
const allParagraphs = document.querySelectorAll("p");
const allContentWrappers = document.getElementsByClassName("content-wrapper");
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
const firstDivP = allContentWrappers[0].querySelector("p");
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

console.log(firstDiv);
console.log(allParagraphs);
console.log(root); // this works because root is now a global variable with <div id="root"> in the HTML
console.log(allContentWrappers);
console.log(firstDivP);

console.log("\n \n \n");
allParagraphs.forEach((node) => console.log(node));
// this doesn't return an error as this is iterable

// allContentWrappers.forEach((el) => console.log(el));
// this returns an error "script.js:61 Uncaught TypeError: allContentWrappers.forEach is not a function" as this funciton is not iterable, because forEach is an array method

Array(...allContentWrappers).forEach(console.log); // this works as its typecasting it to an array

console.log("\n \n \n");

// console.log(rootElSelector);

// console.dir(rootEl);
//// review video for what he said at 2:07pm and note that down

// class list general funcitonality
/* 
Check class list
add a class
remove a class
toggle a class
*/

const rootEl2 = document.getElementById("root");
const firstChildDiv2 = rootEl.querySelector("div");

console.dir(firstChildDiv2); // under classList. This dir shows what is accessable

setTimeout(() => {
  firstChildDiv2.classList.add("red");
  firstChildDiv2.classList.remove("remove-me-im-useless");
  firstChildDiv2.classList.toggle("hide");

  // if (firstChildDiv2.classList.include("hide")) {
  //   firstChildDiv2.classList.remove("hide");
  // } else {
  //   firstChildDiv2.classList.add("hide");
  // }
  // this is what toggle was doing
}, 3000);

/* 
Create elements / nodes

createElement => html element
createTextNode => text node

*/
const rootEl3 = document.getElementById("root");
const div = document.createElement("div");
const paraOneDiv = document.querySelector(".content-wrapper");
// cant be reused, if you need another div then you need to make another div
// const divTwo = document.createElement("div");
// const divThree = document.createElement("div");
const header = document.createElement("h1");
const headerText = document.createTextNode("Hey howdy, how you durn???");

div.appendChild(header);
header.appendChild(headerText);

console.log(div);
console.log(header);
console.log(headerText);

rootEl3.appendChild(div);

setTimeout(() => {
  div.remove();

  // console.log(div); // this shows that its still in memory, it just isn't on the dom
  paraOneDiv.appendChild(div);
  // paraOneDiv.classList.add("blue"); // the more appropriate way (see what ryan says at 3:54pm during the video on 03/14/23)
  paraOneDiv.style.color = "blue";
  // properties from css can be used in java script however they just need to be camalCased, instead of seperated by a -
  //  example: background-color in JS would be backgroundColor
}, 4000);
