import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import Auth from "../context/AuthContext";

const AttemptedAssignments = () => {
  const { user } = useContext(Auth);

  const fetchData = async () => {
    const res = await axios.get(
      `https://assignment-11-theta-three.vercel.app/assignmentSubmit/${user.email}`,
      { withCredentials: true }
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
  if (data?.length === 0) {
    return (
      <div className="text-2xl font-black my-20">
        you have not attempted any assignment yet!
      </div>
    );
  }
  // console.log(data);
  return (
    <div>
      <h3 className="text-xl font-black my-4 sm:text-3xl lg:text-4xl">
        Your attempted assignments.
      </h3>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Total mark</th>
              <th>Your mark</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, idx) => (
              <tr key={data._id}>
                {/* <h2 className="mt-10">hello world</h2>
          <p>{data._id}</p>
          <p>{data.googleUrl}</p>
          <p>{data.assignmentDescription}</p>
          <p>{data.status}</p>
          <p>{data.takingUser}</p>
          <p>{data.mark && `you have get ${data.mark} in this assignment`}</p> */}

                <td>{idx + 1}</td>
                <td>{data.assignmentTitle}</td>
                <td>{data.totalMarks}</td>
                <td>{data.mark ? data.mark : "not yet"}</td>
                <td>{data.status}</td>
                <td>{data.feedback || "Not yet"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttemptedAssignments;
