import React from "react";
import { connect } from "react-redux";

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
          {/* this.props.onAddNumber.bind(this, 15) */}
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
    onAdd: () => dispatch({ type: "ADD" }),
    onSub: () => dispatch({ type: "SUB" }),
    onNum: () => dispatch({ type: "NUM_10", value: 10 }),
    onAddNumber: (number) => dispatch({ type: "ADD_NUMBER", payload: number }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
