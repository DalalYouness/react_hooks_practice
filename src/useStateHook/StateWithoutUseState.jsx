import React from "react";

const StateWithoutUseState = () => {
  let count = 0;

  const handleIncr = () => {
    count++;
    console.log(count); // preuve que count il change
  };

  const handleDecr = () => {
    count--;
    console.log(count);
  };
  return (
    <div>
      <span>{count}</span>
      <button onClick={handleIncr}>Increment</button>
      <button onClick={handleDecr}>Decrement</button>
    </div>
  );
};

export default StateWithoutUseState;

/*
fhad le cas rah mnin kandir click rah kat changea count mais makayna hta haja kat3lm
react anaho rah l count tbdlat lqima dyalo bach y3awd ydir re-rendering , fhad l7ala fin kaydkhol useState Hook
React ما كتعاودش ترسم component إلا جاها signal واضح:

"راشي حاجة تبدلات فcomponent state أو props"
*/
