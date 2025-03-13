import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const UpdatePage = () => {
  const { id } = useParams();
  const fetchDetailsWithId = async () => {
    const res = await axios.get(`http://localhost:5000/assignments/${id}`);
    return res.data;
  };
  const { isPending, data } = useQuery({
    queryKey: ["singleAssignment"],
    queryFn: fetchDetailsWithId,
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update this");
  };
  const handleOnChange = () => {
    //do nothing.
  };

  if (isPending) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  // console.log(data);
  return (
    <div>
      <h3>Welcome to the update page.</h3>
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
                value={data.assignmentTitle}
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
                  value={data.assignmentDescription}
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
                value={data.totalMarks}
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
                value={data.thumbnail}
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
              <input
                type="date"
                className="input w-full"
                placeholder="Type here"
                name="dueDate"
                value={data.dueDate}
                onChange={handleOnChange}
              />
            </fieldset>
            <button className="btn w-full btn-neutral mt-4">Update</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
