import React from "react";
import renderer from "react-test-renderer";
import SkillsPage from "../../../src/client/components/SkillsPage";

test("Should render SkillsPage component correctly", () => {
  const rendered = renderer.create(
    <SkillsPage />
  );

  expect(rendered.toJSON()).toMatchSnapshot();
});
