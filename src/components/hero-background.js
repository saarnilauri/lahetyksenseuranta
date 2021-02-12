import React from "react";
import BackgroundImage from "gatsby-background-image";

const HeroBackground = ({ bgImage, children }) => {
  return (
    <BackgroundImage
      Tag="section"
      className="bg-gray-900 relative border-b-2 border-white mb-10"
      fluid={bgImage}
    >
      {children}
    </BackgroundImage>
  );
};

export default HeroBackground;
