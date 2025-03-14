import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import SinglePending from "./SinglePending";

const PendingAssignment = () => {
  const fetchAssignments = async () => {
    const res = await axios.get("http://localhost:5000/assignmentSubmit");
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
  console.log(data);

  return (
    <div>
      {data?.map((data) => (
        <SinglePending key={data._id} data={data}></SinglePending>
      ))}
    </div>
  );
};

export default PendingAssignment;
