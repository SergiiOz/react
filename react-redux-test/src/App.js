import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Counter2 from "./Counter2";

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
        <h1>Счетчик {this.props.counter}</h1>
        <hr />
        <div>
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={this.props.onNum}>Добавить 10</button>
        </div>
        <hr />
        <div>
          {/* this.props.onAddNumber.bind(this, 15) */}
          <button onClick={() => this.props.onAddNumber(15)}>
            Добавить 15
          </button>
          <button onClick={this.props.onAddNumber.bind(this, -17)}>
            Вычесть 17
          </button>
        </div>

        <Counter2 />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    counter: state.counter1.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({ type: "ADD" }),
    onSub: () => dispatch({ type: "SUB" }),
    onNum: () => dispatch({ type: "NUM_10", value: 10 }),
    onAddNumber: (number) => dispatch({ type: "ADD_NUMBER", payload: number }),
  };
}

//for conntect redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
