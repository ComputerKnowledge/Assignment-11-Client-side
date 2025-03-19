import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../context/AuthContext";
import Swal from "sweetalert2";

const SinglePending = ({ P_assignment, onDelete }) => {
  const [data, setData] = useState(P_assignment);

  const { user } = useContext(Auth);
  const handleModal = () => {
    if (data.takingUser === user.email) {
      return Swal.fire("No one can check his own assignments.");
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
    axios
      .put(`http://localhost:5000/assignmentSubmit/${data._id}`, { ...D })
      .then((res) => {
        Swal.fire(`You give mark to ${data.examinee}'s assignment.`);
        onDelete(id);
        document.getElementById("my_modal_1").close();
      });
  };
  // if (false) {
  //   return <div>No Pending assignment right now!</div>;
  // }
  // console.log(data.googleUrl);
  return (
    <div>
      <div>
        <h2 className="mt-10">hello world</h2>
        <p>{data._id}</p>
        <p>{data.googleUrl}</p>
        <p>{data.quickNote}</p>
        <p>{data.status}</p>
        <p>{data.takingUser}</p>
        <p>{data.examinee}</p>
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
