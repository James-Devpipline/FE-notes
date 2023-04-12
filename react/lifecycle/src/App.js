// import { Component } from "react";
// import Lifecycle from "./Lifecycle";

// import "./styles.css";
// // react lifecycle diagram https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// /*
// Component Lifecycle
//   - Three Phases
//     - Mounting: When the exported function is invoked (The app is mounted in index.js like <App /> )
//       - calls the constructor method if available
//     - Updating -> state, props
//     - Unmounting -> cleanup
// */

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       toggle: false
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => ({ toggle: !prevState.toggle }));
//   }

//   render() {
//     const { toggle } = this.state;
//     return (
//       <div className="App">
//         <button>{this.state.toggle ? "Unmount" : "Mount"}</button>
//
//         {toggle && <Lifecycle />}
//       </div>
//     );
//   }
// }

//

import { Component } from "react";

import Lifecylce from "./Lifecycle";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      toggle: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCount = this.handleCount.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  }

  handleCount() {
    this.setState((prevState) => ({ toggle: prevState.count + 1 }));
  }

  render() {
    const { toggle } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          {toggle ? "Unmount" : "Mount"}
        </button>
        {/* Conditional Rendering */}
        {toggle && <Lifecylce />}
        {toggle && <Lifecylce count={this.state.count} />}
      </div>
    );
  }
}

// {toggle && <Lifecycle />} {} shows conditional rendering
