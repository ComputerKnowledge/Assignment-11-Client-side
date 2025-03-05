import React, { useEffect, useState } from "react";
import Auth from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
  deleteUser,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase.init";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photoURL, setPhotoURL] = useState("");

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (updatedDate) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedDate);
  };
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const deleteAUser = () => {
    setLoading(true);
    return deleteUser(auth.currentUser);
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log(user?.email, user?.photoURL);
    });
    return () => {
      subscribe();
    };
  }, []);

  const allValue = {
    createUser,
    loginUser,
    updateUser,
    logOutUser,
    loginWithGoogle,
    deleteAUser,
    setPhotoURL,
    photoURL,
    user,
    loading,
  };
  return <Auth.Provider value={allValue}>{children}</Auth.Provider>;
};

export default AuthProvider;
