import React from "react";
import bgImage from "../../static/header-bg-alt.jpg";

//style={{ backgroundImage: "url(" + bgImage + ")" }}
const HeroBackground = ({ children }) => (
  <div
    className="bg-gray-900 bg-center bg-cover bg-no-repeat hero-background relative bg-hero-lg border-b-2 border-white mb-10"
    style={{ backgroundImage: "url(" + bgImage + ")" }}
  >
    {children}
  </div>
);

export default HeroBackground;
