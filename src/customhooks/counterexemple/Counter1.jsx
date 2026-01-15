import useCounter from "../hooks/useCounter";

function Counter1() {
  const [counter, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h3>Counter 1: {counter}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter1;
