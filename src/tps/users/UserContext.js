import { createContext } from "react";

const UserContext = createContext({
  users: [],
  lastId: 0,
});

export default UserContext;
