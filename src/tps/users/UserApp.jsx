import { useState } from "react";
import UserTable from "./UserTable";
import UsersAdd from "./UsersAdd";

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
  /*
    TODO:
       1 - endi le formulaire li howa composant
       child dyal app composant li fih state
       dyal users
       2 - bghit mnin nwrk f submit nbdl f state bach le composant
       parent ydir re-render
       3 - data ghada doz man end child l parent
       4 - donc bach child yqdr ydwi mea lparent
       ghaykhs l parent ywjd lih une callback une ref
       5 - child khayakhod chno kayn f refs wi sift f l on click
       man l callback li waslah
       6 - parent ydir setUsers
  */
  return (
    <div className="container my-3 mx-auto">
      <UsersAdd userId={lastId + 1} onAddUser={addUser} />
      <hr />
      <UserTable users={users} />
    </div>
  );
};

export default UserApp;
