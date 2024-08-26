import { createStore } from "redux";

const iniialState = { counter: 0, showCounter: true };

const counterReducer = (state = iniialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + action.amount };
  }
  if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - action.amount };
  }

  if (action.type === "TOGGLE") {
    return { ...state, showCounter: !state.showCounter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
