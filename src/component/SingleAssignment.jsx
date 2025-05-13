import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../context/AuthContext";
import Swal from "sweetalert2";

const SingleAssignment = ({ data, onDelete, idx }) => {
  const { user } = useContext(Auth);

  // console.log(user.email, data.email);
  // console.log(data);
  const handleDelete = (id) => {
    // console.log(id);
    if (user.email == data.createdBy) {
      axios
        .delete(
          `https://assignment-11-theta-three.vercel.app/assignments/${id}`
        )
        .then((res) => {
          // console.log(res);
          onDelete(id);
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Assignment deleted successfully.",
            showConfirmButton: false,
            timer: 2000,
          });
        });
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "No one can delete other's create assignment.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="card p-0 bg-base-100 w-96 shadow-sm border my-4">
      <figure>
        <img src={data.thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.assignmentTitle}</h2>
        <p className="text-left">
          This assignment was created by {data.createdBy} on {data.dueDate}
        </p>

        <div className="flex justify-evenly">
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
    </div>
    // <div>

    //   <h2 className="mt-10 text-5xl">{idx + 1}</h2>
    //   <p>{data._id}</p>
    //   <p>{data.assignmentTitle}</p>
    //   <p>{data.assignmentDescription}</p>
    //   <p>{data.totalMarks}</p>
    //   <p>{data.thumbnail}</p>
    //   <p>{data.difficultyLevel}</p>
    //   <p>{data.dueDate}</p>
    //   <p>{data.createdBy}</p>
    // <div className="space-x-4">
    //   <button className="btn btn-soft btn-accent">
    //     <Link to={`/viewDetails/${data._id}`}> View</Link>
    //   </button>
    //   <button className="btn btn-soft btn-accent">
    //     <Link to={`/updatePage/${data._id}`}>Update</Link>
    //   </button>
    //   <button
    //     onClick={() => handleDelete(data._id)}
    //     className="btn btn-soft btn-accent"
    //   >
    //     Delete
    //   </button>
    // </div>
    // </div>
  );
};

export default SingleAssignment;
