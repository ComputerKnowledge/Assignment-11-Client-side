import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SinglePending from "./SinglePending";

const PendingAssignment = () => {
  const [finish, setFinish] = useState(false);
  const [finishAll, setFinishAll] = useState(false);
  const [assignment, setAssignment] = useState(true);
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
    return <span className="loading loading-bars loading-xl"></span>;
  }
  if (data.length === 0) {
    return <div>Nothing to do here !</div>;
  }

  return (
    <div>
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
