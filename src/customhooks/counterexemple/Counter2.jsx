import { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter 2: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter2;
