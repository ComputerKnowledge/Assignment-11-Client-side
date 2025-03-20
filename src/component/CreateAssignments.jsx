import axios from "axios";
import { useContext, useState } from "react";
import Auth from "../context/AuthContext";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// const Swal = require("sweetalert2");
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.css";

const CreateAssignments = () => {
  const { user } = useContext(Auth);
  const createdBy = user.email;
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const totalData = { ...data, createdBy };
    // console.log(totalData);
    // console.log(data);

    // axios.get("https://assignment-11-theta-three.vercel.app/").then((res) => console.log(res.data));
    axios
      .post(
        "https://assignment-11-theta-three.vercel.app/assignments",
        totalData
      )
      .then((res) => {
        // console.log(res.data.insertedId);

        Swal.fire({
          position: "top",
          icon: "success",
          title: "Assignment created successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        e.target.reset();
      });
    // fetch("https://assignment-11-theta-three.vercel.app/").then((res) =>
    //   res.json().then((data) => console.log(data))
    // );
  };
  return (
    <div>
      <h3 className="text-xl font-black my-4 sm:text-3xl lg:text-4xl">
        Create new assignments here.
      </h3>
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
            <DatePicker
              selected={startDate}
              className="input w-full"
              name="dueDate"
              onChange={(date) => setStartDate(date)}
            />
          </fieldset>
          <button className="btn w-full btn-neutral my-4">
            Add Assignment
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAssignments;
