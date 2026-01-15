import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-black p-3 flex justify-content-between gap-3 90000:text-center">
        <ul className="flex list-none">
          <li className="mr-3">
            <Link to="/composant-1" className="text-white">
              component1
            </Link>
          </li>
          <li>
            <Link to="/composant-2" className="text-white">
              component2
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
