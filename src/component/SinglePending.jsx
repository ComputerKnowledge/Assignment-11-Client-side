import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../context/AuthContext";
import Swal from "sweetalert2";

const SinglePending = ({ P_assignment: data, onDelete }) => {
  // console.log(data);
  const { user } = useContext(Auth);
  const handleModal = () => {
    if (data.takingUser === user.email) {
      return Swal.fire({
        position: "top",
        icon: "error",
        title: "No one can marks own's assignment.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    document.getElementById("my_modal_1").showModal();
  };
  const handleMarking = (e, id) => {
    e.preventDefault();
    // console.log("marking");
    const formData = new FormData(e.target);
    const newData = Object.fromEntries(formData.entries());
    const D = { ...data, ...newData };
    D.status = "completed";
    // console.log(D);
    axios
      .put(
        `https://assignment-11-theta-three.vercel.app/assignmentSubmit/${data._id}`,
        { ...D }
      )
      .then((res) => {
        Swal.fire({
          position: "top",
          icon: "info",
          title: `You give mark to ${data.examinee}'s assignment.`,
          showConfirmButton: false,
          timer: 2000,
        });
        onDelete(id);
        document.getElementById("my_modal_1").close();
      });
  };
  // if (false) {
  //   return <div>No Pending assignment right now!</div>;
  // }
  // console.log(data.googleUrl);
  return (
    <div className="my-8">
      <div className="text-xl font-semibold">
        <p className="mt-10">
          Evaluate {data.examinee}'s {data.assignmentTitle} assignment
        </p>
        <p>Click on the button to see assignment link and details</p>
      </div>
      <button className="btn btn-soft btn-accent" onClick={handleModal}>
        Give mark
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="text-right">
            <button
              onClick={() => document.getElementById("my_modal_1").close()}
              className=" btn btn-soft btn-accent "
            >
              X
            </button>
          </div>
          <div className="modal-action flex flex-col">
            <form onSubmit={(e) => handleMarking(e, data._id)}>
              <div className="">
                <Link to={data.googleUrl} target="_blank">
                  See Assignment :{" "}
                  <span className="text-blue-500 ">google docs link</span>
                </Link>
                <p className="bg-black mt-4 p-2 rounded-2xl">
                  {data.quickNote}
                </p>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-left">
                    {" "}
                    Give mark
                  </legend>
                  <input
                    type="number"
                    placeholder="give mark"
                    name="mark"
                    className="input w-full"
                    required
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-left">
                    Give a feedback
                  </legend>
                  <textarea
                    className="textarea h-24 w-full"
                    placeholder="give feedback here"
                    name="feedback"
                    required
                  ></textarea>
                </fieldset>
              </div>

              <div>
                <button className="mt-4 btn btn-soft btn-accent">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SinglePending;
