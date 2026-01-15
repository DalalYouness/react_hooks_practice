import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import { ContextName } from "./ContextName";

const MainComponent = () => {
  const [Name, setName] = useState("salah");
  return (
    <ContextName.Provider value={Name}>
      <div>
        <h1>hy im main component : {Name}</h1>
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
      </div>
    </ContextName.Provider>
  );
};

export default MainComponent;
