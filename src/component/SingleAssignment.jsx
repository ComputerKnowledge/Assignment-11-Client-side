import React from "react";

const SingleAssignment = ({ data }) => {
  //   console.log(data);
  //   console.log("hello world");
  return (
    <div>
      <h2 className="mt-10">hello world</h2>
      <p>{data._id}</p>
      <p>{data.assignmentTitle}</p>
      <p>{data.assignmentDescription}</p>
      <p>{data.totalMarks}</p>
      <p>{data.thumbnail}</p>
      <p>{data.dueDate}</p>
    </div>
  );
};

export default SingleAssignment;
