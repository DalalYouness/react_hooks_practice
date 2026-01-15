import { useState } from "react";

const Component1 = () => {
  const [name, setname] = useState<string>("ahmed");
  const changeName = (newName: string) => {
    setname(newName);
  };
  return (
    <div>
      <h1>je suis parent {name}</h1>
      <Component2 name={name} changeName={changeName} />
    </div>
  );
};

const Component2 = ({ name, changeName }) => {
  const handleClick = () => {
    // Logic to change the parent's name
    changeName("kamal");
  };
  return (
    <div>
      <h2>je suis child {name}</h2>
      <button onClick={handleClick}>change parent</button>
    </div>
  );
};

export default Component1;
