import "./styles.css";
import React, { Component } from "react";
//import { render } from "react-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
      // console.log('shubham');
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>{this.state.count}</h1>
          <button onChange={this.setState}>button</button>
        </div>
      </>
    );
  }
}

export default App;
