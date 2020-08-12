import React from "react";
import renderer from "react-test-renderer";
import AboutPage from "../../../src/client/components/AboutPage";

test("Should render AboutPage component correctly", () => {
  const rendered = renderer.create(
    <AboutPage />
  );

  expect(rendered.toJSON()).toMatchSnapshot();
});
