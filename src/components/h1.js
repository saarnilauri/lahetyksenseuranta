import React from "react";

const H1 = ({ children, black }) => (
  <h1
    className={`text-${
      black ? "black" : "white"
    } text-lg lg:text-3xl uppercase font-bold mb-5`}
  >
    {children}
  </h1>
);

export default H1;
