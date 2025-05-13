import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Auth from "../context/AuthContext";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const UpdatePage = () => {
  const { user } = useContext(Auth);
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchDetailsWithId = async () => {
    const res = await axios.get(
      `https://assignment-11-theta-three.vercel.app/assignments/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  };
  const { isPending, data } = useQuery({
    queryKey: ["singleAssignment"],
    queryFn: fetchDetailsWithId,
  });
  const createdBy = data?.createdBy;
  // console.log(user.email, data?.createdBy);
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log("update this");
    const formData = new FormData(e.target);
    const newData = Object.fromEntries(formData.entries());
    const totalData = { ...newData, createdBy };
    // console.log(totalData);
    // console.log(data);
    if (user.email == data?.createdBy) {
      axios
        .put(
          `https://assignment-11-theta-three.vercel.app/assignments/${data._id}`,
          totalData
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Assignment has been updated.",
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "No field has been updated.",
              showConfirmButton: false,
              timer: 2000,
            });
          }
          navigate("/assignments");
        });
    }
  };
  // console.log(data?.dueDate);

  const handleOnChange = () => {
    // console.log("hello world");
  };

  if (isPending) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  // console.log(data);
  return (
    <div>
      <h3 className="text-xl font-black my-4 sm:text-3xl lg:text-4xl">
        {" "}
        Updata the assignment.
      </h3>
      <div>
        <form onSubmit={handleUpdate}>
          <fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">
                Assignment Title
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
                name="assignmentTitle"
                defaultValue={data.assignmentTitle}
                onChange={handleOnChange}
              />
            </fieldset>
            <fieldset className="fieldset">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-left">
                  Assignment Description
                </legend>
                <textarea
                  className="textarea h-24 w-full"
                  placeholder="Bio"
                  name="assignmentDescription"
                  defaultValue={data.assignmentDescription}
                  onChange={handleOnChange}
                ></textarea>
              </fieldset>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">Total Marks</legend>
              <input
                type="number"
                className="input w-full"
                placeholder="Type here"
                name="totalMarks"
                defaultValue={data.totalMarks}
                onChange={handleOnChange}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">Thumbnail</legend>
              <input
                type="url"
                className="input w-full"
                placeholder="Type here"
                name="thumbnail"
                defaultValue={data.thumbnail}
                onChange={handleOnChange}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">
                Difficulty Level
              </legend>
              <select
                defaultValue="Pick one option"
                className="select w-full"
                name="difficultyLevel"
              >
                <option disabled={true}>{data.difficultyLevel}</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-left">Due Date</legend>
              <DatePicker
                selected={data.dueDate}
                className="input w-full"
                name="dueDate"
              />
            </fieldset>
            <button className="btn w-full btn-neutral my-4">Update</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
