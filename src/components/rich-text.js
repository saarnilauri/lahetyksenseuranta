import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import H1 from "./h1";

const Paragraph = ({ children }) => (
  <p className="text-left mb-2">{children}</p>
);
const HEAD1 = ({ children }) => <H1 black>{children}</H1>;
const H2 = ({ children }) => (
  <h2 className="font-bold text-2xl uppercase mb-5">{children}</h2>
);
const H3 = ({ children }) => (
  <h3 className="font-bold text-xl mb-2">{children}</h3>
);
const Quote = ({ children }) => (
  <blockquote className="text-italic text-lg my-2">{children}</blockquote>
);

const Bold = ({ children }) => <span className="text-bold">{children}</span>;
const Italic = ({ children }) => (
  <span className="text-italic">{children}</span>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold key={`${text}-key`}>{text}</Bold>,
    [MARKS.ITALIC]: (text) => <Italic key={`${text}-key`}>{text}</Italic>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HEADING_1]: (node, children) => <HEAD1>{children}</HEAD1>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.QUOTE]: (node, children) => <Quote>{children}</Quote>,
  },
};

const RichText = ({ raw }) => {
  return <div>{documentToReactComponents(JSON.parse(raw), options)}</div>;
};

export default RichText;
