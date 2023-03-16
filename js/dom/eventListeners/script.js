/* 
Event Listeners

Inline -> html elements. prefixed with "on". ie: "onclick"
element.addEventListener -> event type, handler

cleanup listeners
element.removeEventListener -> event type, handler 
*/

function myAlert() {
  alert("Warning, idk!!!");
}

// [a, b, c].forEach(alertWarning);

// const customWindow = {
//   alert: function () {},
// };

// customWindow.alert = function () {};
////////////// don't do this, it overrides globals, refer to lecture on 03/15/23 at 3:55pm

const btn = document.getElementById("toggleBtn");
const clearBtn = document.getElementById("removeBtn");

// const handleBtnClick = (event) => {
//   if (event.target.innerText === "On") {
//     event.target.innerText = "Off";
//   } else {
//     event.target.innerText = "On";
//   }
// };

// console.log(btn);

// btn.addEventListener("click", function (event) {
//   console.log(this);
// });
// btn.addEventListener("click", function (event) {
//   console.log(event);
// });

////////////// to fix these notes rewatch the lecture from 03/15/23 at 4:25 for the clear listener
// btn.addEventListener("click", (event) => {
//   // console.log(this);
//   if (event.target.innerText === "On") {
//     event.target.innerText = "Off";
//   } else {
//     event.target.innerText = "On";
//   }
// });
///////// changing it to a arrow function changes the scope

// document.addEventListener("click", function (event) {
//   if (event.target.innerText === "On") {
//     event.target.innerText = "Off";
//   } else {
//     event.target.innerText = "On";
//   }
// });
/////// this targets everything to change it to say either on or off

const handleBtnClick = (event) => {
  if (event.target.innerText === "On") {
    event.target.innerText = "Off";
  } else {
    event.target.innerText = "On";
  }
};

btn.addEventListener("click", handleBtnClick);

clearBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleBtnClick);
});
