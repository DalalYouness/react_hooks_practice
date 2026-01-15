import React, { useState } from "react";

const StateWittUseState = () => {
  let [count, setCount] = useState(0);

  const handleIncr = () => {
    setCount(count++);
  };

  const handleDecr = () => {
    setCount(count--);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={handleIncr}>Increment</button>
      <button onClick={handleDecr}>Decrement</button>
    </div>
  );
};

export default StateWittUseState;
