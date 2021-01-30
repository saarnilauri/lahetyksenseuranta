import React from "react";
import renderer from "react-test-renderer";

import Container from "../container";

describe("Container", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Container>Test</Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
