import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Auth from "../context/AuthContext";

const SinglePending = ({ data }) => {
  const { user } = useContext(Auth);
  const handleModal = () => {
    if (data.takingUser === user.email) {
      return alert("hello world");
    }
    document.getElementById("my_modal_1").showModal();
  };
  const handleMarking = (e) => {
    e.preventDefault();
    // console.log("marking");
    const formData = new FormData(e.target);
    const newData = Object.fromEntries(formData.entries());
    const D = { ...data, ...newData };
    D.status = "completed";
    axios
      .put(`http://localhost:5000/assignmentSubmit/${data._id}`, { ...D })
      .then((res) => {
        // console.log(res);
      });
    document.getElementById("my_modal_1").close();
  };
  // if (false) {
  //   return <div>No Pending assignment right now!</div>;
  // }
  return (
    <div>
      <h2 className="mt-10">hello world</h2>
      <p>{data._id}</p>
      <p>{data.googleUrl}</p>
      <p>{data.quickNote}</p>
      <p>{data.status}</p>
      <p>{data.takingUser}</p>
      <p>{data.examinee}</p>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-soft btn-accent" onClick={handleModal}>
        Give mark
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="text-right">
            <button
              onClick={() => document.getElementById("my_modal_1").close()}
              className="btn btn-soft btn-accent"
            >
              X
            </button>
          </div>
          <form action="" onSubmit={handleMarking}>
            <Link
              target="_blank"
              to="https://docs.google.com/document/d/15kpdtq1Iz5B04ijQ661QEFgUNQFkYTXDZOBtoxBK0zE/edit?tab=t.0"
            >
              google docs link
            </Link>
            <br />

            <p>{data.quickNote}</p>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">Give Mark</legend>
              <input
                type="number"
                className="input w-full"
                placeholder="give mark"
                name="mark"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">
                Give Feedback
              </legend>
              <textarea
                className="textarea h-24 w-full"
                placeholder="give your feedback here"
                name="feedback"
              ></textarea>
            </fieldset>

            <div className="modal-action">
              <button
                // onClick={() => document.getElementById("my_modal_1").close()}
                className="btn btn-soft btn-accent"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default SinglePending;
