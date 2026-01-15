import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/user/create"}>
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default UserLayout;
