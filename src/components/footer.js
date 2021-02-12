import React from "react";
import Container from "./container";

const Footer = () => (
  <div className="bg-red-500 py-10 mt-10">
    <Container>
      <p className="px-10 text-white text-xs text-center md:text-right">
        <span className="bg-gray-700 py-2 px-2 inline-block">
          Copyright - Lauri Saarni - 2021
        </span>
      </p>
    </Container>
  </div>
);

export default Footer;
