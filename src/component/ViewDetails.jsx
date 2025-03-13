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
      <button className="btn btn-soft btn-accent">Take Assignment</button>
    </div>
  );
};

export default ViewDetails;
