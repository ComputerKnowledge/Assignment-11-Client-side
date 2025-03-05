import React, { useContext } from "react";
import Auth from "../context/AuthContext";

const Register = () => {
  const { createUser, updateUser } = useContext(Auth);
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const { displayName, photoURL, email, password } = data;
    const updatedDate = {
      displayName,
      photoURL,
    };

    createUser(email, password).then((res) => {
      console.log(res);
      updateUser(updatedDate).then((res) => {
        console.log(res);
      });
    });
    e.target.reset();
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="displayName"
                  placeholder="Name"
                />
                <label className="fieldset-label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  name="photoURL"
                  placeholder="Photo URL"
                />
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />{" "}
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />{" "}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
