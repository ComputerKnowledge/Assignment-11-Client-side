import React from "react";

const ErrorElement = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-error text-5xl sm:text-6xl md:text-8xl mb-4 sm:mb-8">
        ⚠️
      </div>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-error mb-2">
        Error Occurred
      </h3>
      <p className="text-base sm:text-1xl md:text-2xl">Something went wrong!</p>
    </div>
  );
};

export default ErrorElement;
