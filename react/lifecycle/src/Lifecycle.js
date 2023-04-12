import { Component } from "react";

/*
Component Lifecycle
  - Three Phases
    - Mounting: When the exported function is invoked (The app is mounted in index.js like <App /> )
      - calls the constructor method if available
      - render() -> paints the dom
      - componentDidMount()
    - Updating -> state, props
    - Unmounting -> cleanup
*/

export default class Lifecycle extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
    console.log("1) Constructor Run");
  }

  componentDidMount() {
    console.log("3) component did mount, happens once and never again");
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  shouldComponentUpdate() {
    console.log("UPDATE: before render");
    return true;
  }

  componentWillUnmount() {
    console.log("Cleans up asynchronous tasks before destroying comp");
  }

  handleClick() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    // this.setState({ count: 90 }) // DON'T DO THIS, SET STATE TRIGGERS A RE RENDER, AND IT WILL DO THIS FOREVER
    console.log("2-∞: Rendered!");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Add to Count</button>
      </div>
    );
  }
}
