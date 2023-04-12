import { Component, useEffect, useState } from "react";

import "./styles.css";

/* 
Utilizing React Hooks

allow functional components to tie into Reacts more advanced functionality

functional programming vs OOP
components vs regular utils vs hooks

built in hooks:
  - useState
  - useEffect
  - useReducer
  - UseContext

custom hooks:
  - screen size changes -useWindowSize (that name is custom)

useEffect:
  - Dependencies are values being called inside of your effect that are dynamic (meaning, able to update the dom)
*/

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [person, setPerson] = useState({});

  useEffect(() => {
    console.log(`I'm in the effect. Count is ${count}`);

    return () => console.log("Cleaning count effect");
  }, [color]);

  // review what ryan said about the linter giving a warning above at around 4pm for the lecture on 04/11

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch("https://swapi.tech/api/people/1", { signal })
      .then((res) => res.json())
      .then((data) => {
        setPerson(data.result.properties);
      })
      .catch((err) => {
        console.error("Get Person Error: ", err);
      });

    return () => controller.abort();
    // ^^ CLEANUP
  }, []);

  // useEffect(() => {
  //   const listener = () => console.log("You clicked the window!!!");

  //   window.addEventListener("click", listener);

  //   return () => {
  //     console.log("I've cleaned up this effect");
  //     window.removeEventListener("click", listener);
  //   };
  // });
  /* 
    useEffect(() => {}) -> runs effect after every single render
    useEffect(() => {}, []) -> runs effect after firest render (on mount) and never again
    useEffect(() => {}, []) -> runs effect if dependencies have changed
    useEffect(() => {
      return () => { // cleanup stuff }
    }, []) -> runs effect same as above notes, but will run cleanup before running the effect and unmounting
  */

  return (
    <div>
      <h4 style={{ color }}>{count}</h4>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
      <button
        onClick={() =>
          setColor((prevColor) => (prevColor === "red" ? "blue" : "red"))
        }
      >
        Change color
      </button>
      <div>Name: {person.name || "Not Found"}</div>
    </div>
  );
}

export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <h1>App</h1>

      <button onClick={() => setToggle((prevToggle) => !prevToggle)}>
        {toggle ? "Unmount" : "Mount"}
      </button>

      {toggle && <Counter />}
    </div>
  );
}
