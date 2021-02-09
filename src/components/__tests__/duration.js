import React from "react";
import renderer from "react-test-renderer";

import Duration from "../duration";

describe("Duration", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Duration className="test" seconds={3600}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
