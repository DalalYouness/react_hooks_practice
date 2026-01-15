// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import FormValidationBeginner from "./tps/FormValidationBeginner";
// import MyRootApp from "./route/pages/MyRootApp";
// import ButtonComponent1 from "./css-modules/ButtonComponent1";
// import ButtonComponent2 from "./css-modules/ButtonComponent2";
// import Component1 from "./commicWithChildAndParent/Component1";
// import MainComponent from "./contextApi/MainComponent";
// import ListCars from "./cars/ListCars";
//import Calcul from "./useCallBack/Calcul";
// import ParentComponent from "./useMemo/ParentComponent";
// import MyReducerComponent from "./useReducer/MyReducerComponent";
import FormWithReducer from "./useReducer/FormWithReducer.jsx";
import Users from "./customhooks/fetchdataexemple/Users.jsx";
import Posts from "./customhooks/fetchdataexemple/Posts.jsx";
import SearchUsers from "./customhooks/searchuserexemple/SearchUsers.jsx";
import UserApp from "./tps/users/UserApp.jsx";
createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <div>
    <UserApp />
  </div>
);
