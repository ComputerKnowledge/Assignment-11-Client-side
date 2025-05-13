import { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //something will be done here.
    Swal.fire("This form is not functional yet.");
  };
  return (
    <div
      id="contact"
      className=" mx-auto bg-base-100 rounded-lg shadow-md sm:my-10"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold my-4 sm:my-8">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="">
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Name"
            required
          />
        </div>

        <div className="">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="">
          <textarea
            name="message"
            className="textarea textarea-bordered h-32 w-full"
            placeholder="Leave you message here..."
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
