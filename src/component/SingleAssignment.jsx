import React from "react";
import { Link } from "react-router-dom";

const SingleAssignment = ({ data }) => {
  //   console.log(data);
  //   console.log("hello world");
  const handleDelete = (_id) => {
    console.log(_id);
  };
  return (
    <div>
      <h2 className="mt-10">hello world</h2>
      <p>{data._id}</p>
      <p>{data.assignmentTitle}</p>
      <p>{data.assignmentDescription}</p>
      <p>{data.totalMarks}</p>
      <p>{data.thumbnail}</p>
      <p>{data.dueDate}</p>
      <div className="space-x-4">
        <button className="btn btn-soft btn-accent">
          <Link to={`/viewDetails/${data._id}`}> View</Link>
        </button>
        <button className="btn btn-soft btn-accent">
          <Link to={`/updatePage/${data._id}`}>Update</Link>
        </button>
        <button
          onClick={() => handleDelete(data._id)}
          className="btn btn-soft btn-accent"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleAssignment;
