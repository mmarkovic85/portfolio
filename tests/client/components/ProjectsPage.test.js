import React from "react";
import renderer from "react-test-renderer";
import ProjectsPage from "../../../src/client/components/ProjectsPage";

test("Should render ProjectsPage component correctly", () => {
  const rendered = renderer.create(
    <ProjectsPage />
  );

  expect(rendered.toJSON()).toMatchSnapshot();
});
