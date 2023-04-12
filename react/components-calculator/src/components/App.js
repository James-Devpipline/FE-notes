// moved to components to show that App.js can be in either components or not

import { Component } from "react";
import { evaluate } from "mathjs";

// ^^ IMPORTING CLASS COMPONENT FROM REACT ^^

import Button from "./Button";
import Input from "./Input";

/*
Componenets - reusable building blocks of react apps
  - Functional (presentational, dumb (meaning they don't house any logic, doesn't tie into the life cycle, made to present data))

  - Class based Components (if its not a class, its not a class based componenets)
    - State
    - lifecycle methods

*/

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

console.log(Component);
// POLYMORPHISM USED FOR THIS CLASS BASED COMPONENT \/ \/ \/ \/ \/ \/
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
    this.ops = [
      ["7", "8", "9", "/"],
      ["4", "5", "6", "*"],
      ["1", "2", "3", "+"],
      ["^", "0", ".", "-"]
    ];

    this.handleOpClick = this.handleOpClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleEqualClick = this.handleEqualClick.bind(this);

    // this allows this.setState below to not error out. Comment it out to see some a fun error!
  }

  handleOpClick(val) {
    this.setState((previousState) => {
      return {
        input: previousState.input + val
      };
    });
  }

  handleClearClick() {
    this.setState({
      input: ""
    });
  }

  handleEqualClick() {
    this.setState((previousState) => {
      return {
        input: evaluate(previousState.input)
      };
    });
  }

  renderButtons() {
    return this.ops.map((row, index) => {
      return (
        <div key={index} className="row">
          {row.map((char) => {
            return (
              <Button key={char} handleClick={this.handleOpClick}>
                {char}
              </Button>
            );
          })}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <Input input={this.state.input} />

        {this.renderButtons()}

        <div className="row">
          <Button handleClick={this.handleClearClick} label="clear-btn">
            Clear
          </Button>
          <Button handleClick={this.handleEqualClick} label="equal-btn">
            =
          </Button>
        </div>
      </div>
    );
  }
}
