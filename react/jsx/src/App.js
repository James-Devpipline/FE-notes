import React from "react";

import "./styles.css";
import Greeting from "./components/Greeting";

// const greetings = <h1>Hello World</h1>;

// console.log(greetings); // returns an obj

export default function App() {
  // JSX allows us to avoid doing stuff like this
  // const helloHeader = React.createElement("h1", null, "Hello Codesandbox)
  // const appDiv = React.createElement("div", {className: "App"}, helloHeader)
  // react.createElement("div", {className: "App"}
  //   React.createElement("h1", null, "Hello codesandbox")
  //   React.createElement{"h2", null, "Start editing to see some magic happen!"})
  // );

  const userActive = true;

  return (
    // <>
    //   <h1 className="app">oof</h1>
    //   <h1 className="app">oof</h1>
    //   <h1 className="app">oof</h1>
    //   <h1 className="app">oof</h1>
    // </>
    // <div className="app">
    //   <Greeting />
    // </div>

    <div className={`app-${userActive ? "active" : "inactive"}`}>
      <Greeting activeStatus={userActive} />
    </div>
  );
}
