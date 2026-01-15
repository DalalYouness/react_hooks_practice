//import ButtonStyle from "./ButtonCss1.module.css";
import { bachelorColors } from "./CssConfig";

const ButtonComponent1 = () => {
  const btnStyle = {
    backgroundColor: bachelorColors.primary,
  };
  return (
    <div>
      {/* <button  className={ButtonStyle.btn}>btn1</button> */}
      <button style={btnStyle}>btn1</button>
    </div>
  );
};

export default ButtonComponent1;
