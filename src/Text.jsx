// import React from "react";
// import Swal from "sweetalert2/dist/sweetalert2.js";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";

const Text = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default Text;
