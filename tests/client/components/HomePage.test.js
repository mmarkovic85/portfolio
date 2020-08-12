/*
 * HomePage Component test file
 */
import React from "react";
import renderer from "react-test-renderer";
import { HomePage } from "../../../src/client/components/HomePage";

test("Should render HomePage component correctly", () => {
  // render HomePage Component
  const rendered = renderer.create(
    <HomePage title={"My App"} />
  );

  // Save/match snapshot of/to Component
  expect(rendered.toJSON()).toMatchSnapshot();
});
