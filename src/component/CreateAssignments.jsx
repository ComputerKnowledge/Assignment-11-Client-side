// import React, { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import Auth from "../context/AuthContext";

const CreateAssignments = () => {
  const { user } = useContext(Auth);
  const createdBy = user.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const totalData = { ...data, createdBy };
    // console.log(totalData);
    // console.log(data);

    // axios.get("http://localhost:5000/").then((res) => console.log(res.data));
    axios
      .post("http://localhost:5000/assignments", totalData)
      .then((res) => console.log(res.data.insertedId));
    // fetch("http://localhost:5000/").then((res) =>
    //   res.json().then((data) => console.log(data))
    // );
  };
  return (
    <div>
      <h3>hey create new Assignments.</h3>
      <form onSubmit={handleSubmit}>
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
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-left">Thumbnail</legend>
            <input
              type="url"
              className="input w-full"
              placeholder="Type here"
              name="thumbnail"
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
              <option disabled={true}>Pick one option</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-left">Due Date</legend>
            <input
              type="date"
              className="input w-full"
              placeholder="Type here"
              name="dueDate"
            />
          </fieldset>
          <button className="btn w-full btn-neutral mt-4">
            Add Assignment
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAssignments;
