import React, { useContext } from "react";
import Auth from "../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(Auth);
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const data = Object.fromEntries(formData.entries());
    const { email, password } = data;
    // console.log(data);
    e.target.reset();
    loginUser(email, password).then((res) => {});
  };
  const handleGoogleLogin = () => {
    loginWithGoogle().then((res) => {
      // console.log(res);
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content block">
        <h1 className="text-4xl font-bold mb-8">Log in now !</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <p className="pt-4">
                Didn't register yet?{" "}
                <Link to="/register" className="text-red-400">
                  Resister
                </Link>{" "}
                here.
              </p>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full btn btn-soft"
              >
                google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
