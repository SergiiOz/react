import { ADD, SUB, NUM_10, ADD_NUMBER } from "../actions/actionTypes";

const initialState = {
  counter: 0,
};

export default function counter1(state = initialState, action) {
  switch (action.type) {
    // case "ADD":
    case ADD:
      return {
        counter: state.counter + 1,
      };
    case SUB:
      return {
        counter: state.counter - 1,
      };
    case NUM_10:
      return {
        counter: state.counter + action.value,
      };
    case ADD_NUMBER:
      return {
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
}

//we will import in rootReducer.js
