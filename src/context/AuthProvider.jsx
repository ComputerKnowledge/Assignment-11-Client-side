import React, { useState } from "react";
import Auth from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
  deleteUser,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase.init";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, useLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (updatedDate) => {
    return updateProfile(auth.currentUser, updatedDate);
  };
  const deleteAUser = () => {
    return deleteUser(auth.currentUser);
  };
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const allValue = {
    createUser,
    loginUser,
    updateUser,
    deleteAUser,
    loginWithGoogle,
    user,
    loading,
  };
  return <Auth.Provider value={allValue}>{children}</Auth.Provider>;
};

export default AuthProvider;
