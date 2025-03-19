import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../context/AuthContext";

const SingleAssignment = ({ data, onDelete, idx }) => {
  const { user } = useContext(Auth);

  // console.log(user.email, data.email);
  // console.log(data);
  const handleDelete = (id) => {
    console.log(id);
    if (user.email == data.createdBy) {
      axios.delete(`http://localhost:5000/assignments/${id}`).then((res) => {
        console.log(res);
        onDelete(id);
      });
    } else {
      console.log("you will not able to delete this assignment");
    }
  };

  return (
    <div>
      <h2 className="mt-10 text-5xl">hello world {idx + 1}</h2>
      <p>{data._id}</p>
      <p>{data.assignmentTitle}</p>
      <p>{data.assignmentDescription}</p>
      <p>{data.totalMarks}</p>
      <p>{data.thumbnail}</p>
      <p>{data.dueDate}</p>
      <p>{data.createdBy}</p>
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
