import React from "react";
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends React.Component {
  state = {
    counter: 0
  };
  // addCounter = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // };

  decrCounter = () => {
    if (this.state.counter > 0) {
      // this.setState({
      //   counter: this.state.counter - 1
      // });

      //более правильное изменение state (prevState это предыдущее состояние state)
      this.setState(prevState => {
        return {
          counter: prevState.counter - 1
        };
      });
    }
  };

  render() {
    return (
      //if we don't want use <div> wrapper
      //for wrapp our content we can use React.Fragment or hight-order component (auxiliary)
      <Auxiliary>
        <h2 style={{ color: "green" }}>Counter {this.state.counter}</h2>

        {/* add new component Counter2 */}
        {/* we create clickedContext in App.js and 
        remove from counter clickedC2={this.props.clickedCounter2}*/}
        <Counter2 />
        {/* <Counter2 clickedC2={this.props.clickedCounter2} /> */}

        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button onClick={this.decrCounter}>-</button>
      </Auxiliary>
    );
  }
}
