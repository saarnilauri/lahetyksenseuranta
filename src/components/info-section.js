import React from "react";
import Container from "./container";
import BackgroundImage from "gatsby-background-image";
import SomeBox from "./some-box";
import PersonBox from "./person-box";
import PodcastBox from "./podcast-box";

const InfoSection = ({ person, bgImage }) => (
  <BackgroundImage Tag="section" className="bg-gray-200" fluid={bgImage.fluid}>
    <div className="bg-gradient-to-r from-white via-transparent to-white w-full py-10">
      <Container>
        <div className="grid md:grid-cols-3 gap-5 lg:gap-10 items-stretch">
          <PersonBox person={person} />
          <SomeBox person={person} />
          <PodcastBox />
        </div>
      </Container>
    </div>
  </BackgroundImage>
);

export default InfoSection;
