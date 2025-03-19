import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import SingleAssignment from "./SingleAssignment";
import { useLoaderData } from "react-router-dom";
import Auth from "../context/AuthContext";

const Assignment = () => {
  // const data = useLoaderData();
  const { user } = useContext(Auth);
  // console.log(data);
  const [assignment, setAssignment] = useState([]);
  const [finish, setFinish] = useState(false);

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
  // setAssignment(data);
  // const handleDelete = (id) => {
  //   console.log(id);
  //   if (user.email == data.createdBy) {
  //     axios.delete(`http://localhost:5000/assignments/${id}`).then((res) => {
  //       console.log(res);
  //       setAssignment(assignment.filter((assignment) => assignment._id !== id));
  //     });
  //   } else {
  //     console.log("you will not able to delete this assignment");
  //   }
  // };
  // console.log(data);
  const handleDelete = async (id) => {
    // console.log(id);

    if (!finish) {
      setFinish(true);
      const newData = data.filter((data) => data._id !== id);
      // console.log(newData.length);
      setAssignment(newData);
    } else {
      const newData = assignment.filter((data) => data._id !== id);
      // console.log(newData.length);
      setAssignment(newData);
    }
  };
  // console.log(assignment);
  // const newData = handleDelete("0");
  // console.log(newData?.length);

  if (isPending) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  return (
    <div>
      <h1>Hello form assignment page.</h1>

      {finish
        ? assignment?.map((data, idx) => (
            <SingleAssignment
              onDelete={handleDelete}
              data={data}
              idx={idx}
              key={data._id}
            ></SingleAssignment>
          ))
        : data?.map((data, idx) => (
            <SingleAssignment
              onDelete={handleDelete}
              data={data}
              idx={idx}
              key={data._id}
            ></SingleAssignment>
          ))}
    </div>
  );
};

export default Assignment;
