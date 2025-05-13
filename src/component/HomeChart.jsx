import React, { useState } from "react";
import { Chart } from "react-google-charts";

const HomeChart = () => {
  const [totalAssignments, setTotalAssignments] = useState(null);
  const [totalAttempted, setTotalAttempted] = useState(null);
  const [totalPending, setTotalPending] = useState(null);
  const [totalEvaluated, setTotalEvaluated] = useState(null);
  fetch("http://localhost:5000/assignments")
    .then((res) => res.json())
    .then((data) => {
      setTotalAssignments(data.length);
    });
  fetch("http://localhost:5000/assignmentSubmit1")
    .then((res) => res.json())
    .then((data) => {
      setTotalAttempted(data.length);
      // console.log(data);
      // const pA = data.filter((d) => d.status === "pending");
      // const A = data.filter((d) => d.status === "pending");
      setTotalPending(data.filter((d) => d.status === "pending").length);
      setTotalEvaluated(data.filter((d) => d.status === "completed").length);
    });

  const data = [
    ["Element", "number", { role: "style" }],
    ["Total assignments", totalAssignments, "#b87333"], // RGB value
    ["Total attempted assignments", totalAttempted, "silver"], // English color name
    ["Total pending assignments", totalPending, "gold"],
    ["Total evaluated assignments", totalEvaluated, "color: #e5e4e2"], // CSS-style declaration
  ];
  return (
    <div>
      <h3 className=" text-3xl sm:text-4xl md:text-5xl  font-bold mt-16">
        Some statistic of student activity
      </h3>
      <Chart
        chartType="ColumnChart"
        className="mt-10"
        width="100%"
        height="100%"
        data={data}
      />
    </div>
  );
};

export default HomeChart;
