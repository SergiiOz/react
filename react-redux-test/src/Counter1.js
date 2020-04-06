import React from "react";
import { connect } from "react-redux";
// import { SUB, ADD, NUM_10, ADD_NUMBER } from "./redux/actions/actionTypes";
import { num_10, add, sub, add_number } from "./redux/actions/actions";

class Counter1 extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: "20px",
          marginTop: "20px",
          border: "1px solid green",
          borderRadius: "5px",
        }}
      >
        <h1>Counter1 ({this.props.counter})</h1>
        <hr />
        <div>
          <button onClick={this.props.onAdd}>Add 1</button>
          <button onClick={this.props.onSub}>Sub 1</button>
          <button onClick={this.props.onNum}>Add 10</button>
        </div>
        <hr />
        <div>
          {/* one version with bind */}
          {/* this.props.onAddNumber.bind(this, 15) */}
          {/* second version with arrow function */}
          <button onClick={() => this.props.onAddNumber(15)}>Add 15</button>
          <button onClick={this.props.onAddNumber.bind(this, -17)}>
            Sub 17
          </button>
        </div>
      </div>
    );
  }
}

//State
function mapStateToProps(state) {
  console.log("state", state);
  return {
    counter: state.counter1.counter,
  };
}

//dispatch
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    //refactoring
    // onNum: () => dispatch({ type: "NUM_10", value: 10 }),
    //create in directory actionTypes variable NUM_10
    // onNum: () => dispatch({ type: NUM_10, value: 10 }),
    //create in directory action - this functions num_10() return type: "NUB_10" and value: 10
    onNum: () => dispatch(num_10()),
    onAddNumber: (number) => dispatch(add_number(number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
