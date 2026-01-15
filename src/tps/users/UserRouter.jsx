import { BrowserRouter } from "react-router-dom";
import UsersAdd from "./UsersAdd";

const UserRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UserTable />} />
        <Route path={"/user/create"} element={<UsersAdd />} />
        <Route path={"/user/:id/edit"} element={}/>
      </Routes>
    </BrowserRouter>
  );
};

export default UserRouter;
