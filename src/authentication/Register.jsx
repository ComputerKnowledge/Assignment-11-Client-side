import React, { useContext } from "react";
import Auth from "../context/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        position: "top",
        icon: "error",
        title:
          "password must contain at least one uppercase one lowercase and 6 character long.",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        // console.log(res);
        updateUser(updatedDate).then((res) => {
          // console.log(res);
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
    e.target.reset();
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content block">
        <h1 className="text-4xl font-bold mb-8">Register now !</h1>
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
                  required
                />
                <label className="fieldset-label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  name="photoURL"
                  placeholder="Photo URL"
                  required
                />
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  required
                />{" "}
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  required
                />{" "}
                <button className="btn btn-neutral mt-4">Register</button>
                <p className="pt-4 text-sm">
                  Already registered? please{" "}
                  <Link to="/login" className="text-red-400">
                    login.
                  </Link>{" "}
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
