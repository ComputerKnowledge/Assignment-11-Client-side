import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { Navigate, Link, useNavigate, useParams } from "react-router-dom";
import Auth from "../context/AuthContext";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const { user } = useContext(Auth);
  const { id } = useParams();
  const navigate = useNavigate();
  const takingUser = user.email;
  const examinee = user.displayName;
  // console.log(id);
  const fetchDetailsWithId = async () => {
    const res = await axios.get(`http://localhost:5000/assignments/${id}`, {
      withCredentials: true,
    });
    return res.data;
  };
  const { isPending, data } = useQuery({
    queryKey: ["singleAssignment"],
    queryFn: fetchDetailsWithId,
  });
  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    // console.log("submission completed");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    axios
      .post("http://localhost:5000/assignmentSubmit/", {
        ...data,
        takingUser,
        examinee,
        status: "pending",
      })
      .then((res) => {
        Swal.fire("You have taken this assignment.\nGood Luck!");
        document.getElementById("my_modal_1").close();
        navigate("/assignments");
      });
  };
  if (isPending) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  // console.log(data);
  return (
    <div>
      <h3>View the details of the assignments.</h3>
      <div>
        <h2 className="mt-10">hello world</h2>
        <p>{data._id}</p>
        <p>{data.assignmentTitle}</p>
        <p>{data.assignmentDescription}</p>
        <p>{data.totalMarks}</p>
        <p>{data.thumbnail}</p>
        <p>{data.dueDate}</p>
        <div className="space-x-4"></div>
      </div>

      <button
        className="btn btn-soft btn-accent"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Take Assignment
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
            <form onSubmit={handleAssignmentSubmit}>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-left">
                    {" "}
                    Google Docs Link
                  </legend>
                  <input
                    type="url"
                    placeholder="give google docs link"
                    name="googleUrl"
                    className="input w-full"
                    required
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-left">
                    Give a quick note
                  </legend>
                  <textarea
                    className="textarea h-24 w-full"
                    placeholder="Quick mote text"
                    name="quickNote"
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

export default ViewDetails;
