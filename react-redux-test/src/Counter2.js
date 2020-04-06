import React from "react";
import { connect } from "react-redux";
// import { ADD2 } from "./redux/actions/actionTypes";
import { add2 } from "./redux/actions/actions";

class Counter2 extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: "20px",
          marginTop: "20px",
          border: "1px solid blue",
          borderRadius: "5px",
        }}
      >
        <h1>Counter2 ({this.props.counter})</h1>
        <hr />
        <button onClick={() => this.props.onAdd2(1)}>Add 1</button>
        <button onClick={this.props.onAdd2.bind(this, -1)}>Sub 1</button>
      </div>
    );
  }
}

//State
function mapStateToProps(state) {
  console.log(state);
  return {
    counter: state.counter2.counter2,
  };
}

//Dispatch
function mapDispatchToProps(dispatch) {
  return {
    // onAdd2: (number) => dispatch({ type: ADD2, payload: number }),
    //we use actionCreators, function add2 return type: "ADD2", payload: number
    onAdd2: (number) => dispatch(add2(number)),
  };
}

//for connect redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
