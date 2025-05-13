import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SinglePending from "./SinglePending";

const PendingAssignment = () => {
  const [finish, setFinish] = useState(false);
  const [finishAll, setFinishAll] = useState(false);
  const [assignment, setAssignment] = useState(true);
  const fetchAssignments = async () => {
    const res = await axios.get(
      "https://assignment-11-theta-three.vercel.app/assignmentSubmit",
      {
        withCredentials: true,
      }
    );
    // console.log("hello world");
    // console.log(res);
    return res.data;
  };

  const { isPending, data } = useQuery({
    queryKey: ["submission"],
    queryFn: fetchAssignments,
  });
  const handleMove = (id) => {
    // console.log("Inside the handleMove");
    if (!finish) {
      setFinish(true);
      const newData = data.filter((data) => data._id !== id);
      setAssignment(newData);
    } else {
      const newData = assignment.filter((data) => data._id !== id);

      setAssignment(newData);
    }
  };

  if (isPending) {
    return (
      <span className="text-center loading loading-bars loading-xl mt-32"></span>
    );
  }
  if (data.length === 0) {
    return (
      <div className="text-2xl font-black my-32">
        No Pending assignment is available now!
      </div>
    );
  }

  return (
    <div className="mt-24 text-center">
      {finish
        ? assignment?.map((data) => (
            <SinglePending
              key={data._id}
              onDelete={handleMove}
              P_assignment={data}
            ></SinglePending>
          ))
        : data?.map((data) => (
            <SinglePending
              key={data._id}
              onDelete={handleMove}
              P_assignment={data}
            ></SinglePending>
          ))}
    </div>
  );
};

export default PendingAssignment;
