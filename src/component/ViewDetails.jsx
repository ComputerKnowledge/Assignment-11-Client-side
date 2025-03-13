import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const fetchDetailsWithId = async () => {
    const res = await axios.get(`http://localhost:5000/assignments/${id}`);
    return res.data;
  };
  const { isPending, data } = useQuery({
    queryKey: ["singleAssignment"],
    queryFn: fetchDetailsWithId,
  });
  const handleAssignmentSubmit = () => {
    console.log("submission completed");
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
          <div className="modal-action flex flex-col">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-left">
                  {" "}
                  Google Docs Link
                </legend>
                <input
                  type="url"
                  placeholder="give google docs link"
                  name="googleUrl w-full"
                  className="input"
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-left">
                  Give a quick note
                </legend>
                <textarea
                  className="textarea h-24 w-full"
                  placeholder="Quick mote text"
                  name="assignmentDescription"
                ></textarea>
              </fieldset>
            </div>
            <form method="dialog" className="">
              <button
                onClick={handleAssignmentSubmit}
                className=" btn btn-soft btn-accent"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ViewDetails;
