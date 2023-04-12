import { Component } from "react";
import { render } from "react-dom";
import "./styles.css";
import Count from "./Count";
import CountControls from "./CountControls";

/* 
State Management 
(to mutate the dom, we have to mutate the state)
Props
  - properties of an object
  - one way data binding (props travel down the tree)
*/

export default class App extends Component {
  constructor() {
    super();

    // Initial State should most likely be the same data type as the anticipated change (if you are anticipating the data (count in this case) is a int, keep it as an int)
    this.state = {
      count: 0
    }; // nothing scary about this, its just an object

    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    // this.state.count += 1; // don't do this, never directly mutate state
    // console.log(this.state);
    // this doesn't fully work, it updates the obj but its not updating the dom. Need to remember to WORK with react;

    /* 1st Param*/
    // Direct object
    // function [your new state relies on the previous value]

    /* 2nd Param (optional) */
    // Callback function that runs AFTER state has been state

    // setState guarantees and update, but not when it updates

    this.setState(
      (prevState) => ({
        count: prevState.count + 1
      }),
      () => {
        console.log("--------");
        console.log("anon func: ");
        console.log(this.state);
        console.log("--------");
      }
    );
    console.log("After the anon func:");
    console.log(this.state);
  }

  handleReset() {
    this.setState((prevState) => ({
      count: 0
    }));
  }

  render() {
    return (
      <div className="App">
        <Count count={this.state.count} name="James" age={22} />
        <CountControls
          handleClick={this.handleClick}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}
