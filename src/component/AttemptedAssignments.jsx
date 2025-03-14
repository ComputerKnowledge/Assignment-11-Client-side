import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import Auth from "../context/AuthContext";

const AttemptedAssignments = () => {
  const { user } = useContext(Auth);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:5000/assignmentSubmit/${user.email}`
    );
    return res.data;
  };
  const { isPending, data } = useQuery({
    queryKey: ["attemptedAssignment"],
    queryFn: fetchData,
  });
  if (isPending) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  console.log(data);
  return (
    <div>
      <h3>hey you have Attempted to these assignments.</h3>
      {data?.map((data) => (
        <div key={data._id}>
          <h2 className="mt-10">hello world</h2>
          <p>{data._id}</p>
          <p>{data.googleUrl}</p>
          <p>{data.assignmentDescription}</p>
          <p>{data.status}</p>
          <p>{data.takingUser}</p>
        </div>
      ))}
    </div>
  );
};

export default AttemptedAssignments;
