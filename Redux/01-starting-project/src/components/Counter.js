import { Component } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import classes from "./Counter.module.css";

export default function Counter() {
  const dispatch = useDispatch();
  //React auto set up a subscription to the store and will update the component whenever the state changes and auto unsubscribe if the component is removed from the DOM
  const counter = useSelector((state) => state.counter);

  const incrementHandler = (amount) => {
    dispatch({ type: "INCREMENT", amount: amount });
  };

  const decrementHandler = (amount) => {
    dispatch({ type: "DECREMENT", amount: amount });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => decrementHandler(5)}>Decrement by 5</button>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increment by 5</button>
      </div>
    </main>
  );
}

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
