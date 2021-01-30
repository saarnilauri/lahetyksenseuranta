import React from "react";
import renderer from "react-test-renderer";

import HeaderText from "../header-text.js";

describe("HeaderText", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HeaderText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
