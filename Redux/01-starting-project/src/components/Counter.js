import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

export default function Counter() {
  const dispatch = useDispatch();
  //React auto set up a subscription to the store and will update the component whenever the state changes and auto unsubscribe if the component is removed from the DOM
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
    </main>
  );
}
