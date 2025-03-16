// import React from "react";
// import Swal from "sweetalert2/dist/sweetalert2.js";
import Swal from "sweetalert2";

import React from "react";

const Text = () => {
  return <button onClick={() => Swal.fire("hello world")}>click</button>;
};

export default Text;
