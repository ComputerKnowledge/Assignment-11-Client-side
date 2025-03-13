import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import SingleAssignment from "./SingleAssignment";
import { useLoaderData } from "react-router-dom";

const Assignment = () => {
  // const data = useLoaderData();
  // console.log(data);

  const fetchAssignments = async () => {
    const res = await axios.get("http://localhost:5000/assignments");
    // console.log("hello world");
    // console.log(res);
    return res.data;
  };
  const { isPending, data } = useQuery({
    queryKey: ["assignments"],
    queryFn: fetchAssignments,
  });
  // console.log(data);
  if (isPending) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  return (
    <div>
      <h1>Hello form assignment page.</h1>

      {data?.map((data) => (
        <SingleAssignment data={data} key={data._id}></SingleAssignment>
      ))}
    </div>
  );
};

export default Assignment;
