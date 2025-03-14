import React from "react";

const SinglePending = ({ data }) => {
  return (
    <div>
      <h2 className="mt-10">hello world</h2>
      <p>{data._id}</p>
      <p>{data.googleUrl}</p>
      <p>{data.assignmentDescription}</p>
      <p>{data.status}</p>
      <p>{data.takingUser}</p>
    </div>
  );
};

export default SinglePending;
