import { useSelector, useDispatch } from 'react-redux';

const CounterRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log(counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const toggleCounter = () => {
    // You can implement the logic to toggle the counter here
  }

  return (
    <div>
      <h1>Redux Counter</h1>
      <div>Counter Value: {counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounter}>Toggle counter</button>
    </div>
  );
}

export default CounterRedux;
