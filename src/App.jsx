import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [showNav, setshowNav] = useState(false);
  const handleShowNav = () => {
    setshowNav(!showNav);
  };
  return (
    <div>
      <div className="header-cmp p-2 flex items-center bg-green-500 h-[60px]">
        <GiHamburgerMenu onClick={handleShowNav} />
      </div>
      <SideBar show={showNav} />
    </div>
  );
}

export default App;
