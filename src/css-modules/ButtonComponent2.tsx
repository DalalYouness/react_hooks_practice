import React from "react";
import { bachelorColors } from "./CssConfig";
const ButtonComponent2 = () => {
  const btnStyle = {
    backgroundColor: bachelorColors.primary,
  };
  return (
    <div>
      <button style={btnStyle}>btn2</button>
    </div>
  );
};

export default ButtonComponent2;
