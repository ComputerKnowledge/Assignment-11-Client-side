import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Auth from "../context/AuthContext";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const { user, deleteAUser, logOutUser } = useContext(Auth);
  // console.log(user?.photoURL);
  const handleLogOut = () => {
    logOutUser().then((res) => {
      // console.log(res);
    });
  };
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const link = (
    <>
      <NavLink to="/">home</NavLink>
      <NavLink to="/assignments">Assignments</NavLink>
      {user && <NavLink to="/pendingAssignments">Pending Assignments</NavLink>}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Assignment Group</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller mr-4"
              onClick={handleTheme}
            />
            <div className="dropdown">
              <div tabIndex={0} role="button" className="">
                <div className="relative group">
                  <img
                    className="w-12 h-12 rounded-full "
                    src={user?.photoURL}
                    alt=""
                  />
                  <div className="font-bold hidden group-hover:block absolute right-0 cursor-default">
                    {user?.displayName}
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu p-0 menu-sm dropdown-content text-left bg-base-100 rounded-box z-1 mt-3 w-52  shadow"
              >
                <div className="space-y-4">
                  <NavLink to="/createAssignments">Create Assignments</NavLink>
                  <NavLink to="/attemptedAssignments">
                    My Attempted Assignments
                  </NavLink>
                </div>
              </ul>
            </div>
            <a className="btn btn-soft btn-info ml-4" onClick={handleLogOut}>
              Log Out
            </a>
          </>
        ) : (
          <>
            <div className="space-x-1">
              <button className="btn btn-soft btn-info btn-xs sm:btn-md">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn btn-soft btn-info btn-xs sm:btn-md">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
