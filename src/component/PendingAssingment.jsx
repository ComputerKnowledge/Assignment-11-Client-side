import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import SinglePending from "./SinglePending";

const PendingAssignment = () => {
  const fetchAssignments = async () => {
    const res = await axios.get("http://localhost:5000/assignmentSubmit", {
      withCredentials: true,
    });
    // console.log("hello world");
    // console.log(res);
    return res.data;
  };

  const { isPending, data } = useQuery({
    queryKey: ["submission"],
    queryFn: fetchAssignments,
  });

  if (isPending) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  if (data.length === 0) {
    return <div>Nothing to do here !</div>;
  }

  return (
    <div>
      {data?.map((data) => (
        <SinglePending key={data._id} P_assignment={data}></SinglePending>
      ))}
    </div>
  );
};

export default PendingAssignment;
