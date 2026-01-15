import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersAdd from "./UsersAdd"; // make sure file name is exact
import UserApp from "./UserApp";
import UserTable from "./UserTable"; // import this, since you use it
import UserEdit from "./UserEdit";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserApp />}>
          <Route index element={<UserTable />} />
          <Route path="user/create" element={<UsersAdd />} />
          <Route path="user/:id/edit" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default UserRouter;
