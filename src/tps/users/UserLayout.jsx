import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to={""}>users</Link>
          </li>
          <li className="nav-item">
            <Link to={""}>add user</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default UserLayout;
