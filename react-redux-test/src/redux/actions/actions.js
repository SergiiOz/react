import { ADD, SUB, NUM_10, ADD_NUMBER, ADD2 } from "./actionTypes";

//this actionCreator

// use in Component Counter1
export function add() {
  return {
    type: ADD,
  };
}

export function sub() {
  return {
    type: SUB,
  };
}

export function num_10() {
  return {
    type: NUM_10,
    value: 10,
  };
}

export function add_number(number) {
  return {
    type: ADD_NUMBER,
    payload: number,
  };
}

// use in Component Counter2
export function add2(number) {
  return {
    type: ADD2,
    payload: number,
  };
}
