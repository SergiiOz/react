import React, { Component } from "react";
// import { connect } from "react-redux";
import "./App.css";
import Counter2 from "./Counter2";
import Counter1 from "./Counter1";

class App extends Component {
  // state = {
  //   counter: 0,
  // };

  // updateCounter(value) {
  // this.setState({
  //   counter: this.state.counter + value,
  // });
  // }

  render() {
    console.log("App", this.props);

    return (
      <div className="App">
        <Counter1 />

        <Counter2 />
      </div>
    );
  }
}

export default App;
