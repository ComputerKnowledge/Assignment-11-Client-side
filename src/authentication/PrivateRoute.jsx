import React, { useContext } from "react";
import Auth from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Auth);
  const location = useLocation();
  // console.log(location);
  if (user) {
    return children;
  }
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
