import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Auth from "../context/AuthContext";

const Navbar = () => {
  const { user, deleteAUser, logOutUser } = useContext(Auth);
  // const handleDelete = () => {
  //   deleteAUser().then((res) => {
  //     console.log(res);
  //   });
  // };
  const handleLogOut = () => {
    logOutUser().then((res) => console.log(res));
  };

  const link = (
    <>
      <NavLink to="/">home</NavLink>
      <NavLink to="/assignments">Assignments</NavLink>
      <NavLink to="/pendingAssignments">Pending Assignments</NavLink>
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
        <a className="btn btn-ghost text-xl">{user?.email}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{link}</ul>
      </div>
      <div className="navbar-end">
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
            <Link to="/createAssignments">Create Assignments</Link>
            <Link to="/attemptedAssignments">My Attempted Assignments</Link>
          </ul>
        </div>
        <a className="btn btn-primary ml-4" onClick={handleLogOut}>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Navbar;
