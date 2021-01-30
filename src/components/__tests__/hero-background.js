import React from "react";
import renderer from "react-test-renderer";

import HeroBackground from "../hero-background.js";

describe("HeroBackground", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HeroBackground>Test</HeroBackground>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
