import { useMemo, useState } from "react";

const ParentComponent = () => {
  const [count, setcount] = useState(0);

  const handleClick = () => {
    setcount(count + 1);
  };

  console.time("myArray");
  const myMemoValue = useMemo(() => {
    let myArray;
    myArray ??= 0;

    for (let i = 0; i < 100000; i++) {
      myArray += i;
    }

    return myArray;
  }, []);
  console.timeEnd("myArray");

  return (
    <div>
      <strong>array value: </strong>
      <span>{myMemoValue}</span>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default ParentComponent;
