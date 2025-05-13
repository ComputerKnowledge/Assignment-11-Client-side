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
    <div className="navbar bg-base-100 shadow-sm p-0">
      <div className="navbar-start m-0">
        <div className="dropdown m-0 space-x-2">
          <div
            tabIndex={0}
            role="button"
            className="lg:btn lg:btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />{" "}
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow m-0 text-left"
          >
            {link}
          </ul>
        </div>
        <a className="sm:text-xl font-bold">Assignment Group</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{link}</ul>
      </div>
      <div className="navbar-end space-x-2 ">
        <input
          type="checkbox"
          value=""
          className="hidden sm:toggle sm:theme-controller sm:mr-4 "
          onClick={handleTheme}
        />
        {user ? (
          <>
            <div className="dropdown ">
              <div tabIndex={0} role="button" className="">
                <div className="relative group ">
                  <img
                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-full "
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
                className="menu p-2 menu-sm dropdown-content text-left bg-base-100 rounded-box z-1 mt-3 w-48  shadow left-[-100px] sm:right-[-100px]"
              >
                <div className="space-y-4">
                  <NavLink to="/createAssignments">Create Assignments</NavLink>
                  <br></br>
                  <NavLink to="/attemptedAssignments">
                    My Attempted Assignments
                  </NavLink>
                </div>
              </ul>
            </div>
            <a
              className="btn btn-soft btn-info sm:ml-4 btn-xs sm:btn"
              onClick={handleLogOut}
            >
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
