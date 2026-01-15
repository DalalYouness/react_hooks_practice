import { useContext } from "react";
import { ContextName } from "./ContextName";

const ChildComponent = () => {
  const name = useContext(ContextName);
  return (
    <div>
      <h2>hy im child Component : {name}</h2>
    </div>
  );
};

export default ChildComponent;
