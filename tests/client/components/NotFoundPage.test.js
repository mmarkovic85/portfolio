/*
 * NotFoundPage Component test file
 */
import React from "react";
import renderer from "react-test-renderer";
import { NotFoundPage } from "../../../src/client/components/NotFoundPage";

test("Shoult render NotFoundPage component correctly", () => {
  // render NotFoundPage Component
  const rendered = renderer.create(
    <NotFoundPage url={"localhost:3000/about"} />
  );

  // Save/match snapshot of/to Component
  expect(rendered.toJSON()).toMatchSnapshot();
});
