import { useState } from "react";
import UserTable from "./UserTable";
import UsersAdd from "./UsersAdd";
import UserLayout from "./UserLayout";

// const INITIAL_VALUES = [
//   {
//     id: 1,
//     fullName: "youness dalal",
//     country: "maroc",
//   },
//   {
//     id: 2,
//     fullName: "mohammed fares",
//     country: "maroc",
//   },
//   {
//     id: 3,
//     fullName: "othmane marini",
//     country: "qatar",
//   },
// ];

const UserApp = () => {
  const [users, setusers] = useState([]);
  const [lastId, setlastId] = useState(0);

  const addUser = (user) => {
    setusers((prevState) => [...prevState, user.payload]);
    setlastId((prevState) => prevState + 1);
  };
  return (
    <div className="container my-3 mx-auto">
      <UserLayout />
    </div>
  );
};

export default UserApp;
