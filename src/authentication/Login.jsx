import React, { useContext } from "react";
import Auth from "../context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(Auth);
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const data = Object.fromEntries(formData.entries());
    const { email, password } = data;
    // console.log(data);
    e.target.reset();
    loginUser(email, password).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
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
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
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

export default Login;
