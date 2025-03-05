import React from "react";
import Auth from "./AuthContext";

const AuthProvider = ({ children }) => {
  const allValue = {
    name: "nathing",
  };
  return <Auth.Provider value={allValue}>{children}</Auth.Provider>;
};

export default AuthProvider;
