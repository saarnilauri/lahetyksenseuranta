import React from "react";
import renderer from "react-test-renderer";

import Footer from "../footer";

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer>Test</Footer>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
