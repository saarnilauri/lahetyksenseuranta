import React from "react";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";

import TextBox, { TextBoxBody, TextBoxPadder, TextBoxTitle } from "./text-box";

const PersonBox = ({ person, title = "Henkilö podcastin takana", noLink }) => (
  <TextBox>
    <TextBoxTitle>{title}</TextBoxTitle>
    <TextBoxBody>
      <TextBoxPadder>
        <Img
          fluid={person.image.fluid}
          alt={person.name}
          className="z-0 rounded-full w-40 md:w-20 lg:w-40 mb-5 border-gray-500 border-2 mx-auto"
        />
        <h4 className="font-bold text-lg text-gray-900 mb-5 text-center">
          {person.name}
        </h4>
        <div className="mb-5 md:text-xs lg:text-base">
          <ReactMarkdown>{person.shortBio.shortBio}</ReactMarkdown>
        </div>
        {!noLink && (
          <Link
            to="/tarina/"
            className="hover:bg-gray-900 py-2 px-3 font-semibold hover:text-white bg-gray-600 text-gray-100"
          >
            Lue lisää<span className="sr-only"> Laurista</span>
          </Link>
        )}
      </TextBoxPadder>
    </TextBoxBody>
  </TextBox>
);

export default PersonBox;
