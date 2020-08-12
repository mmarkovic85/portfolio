import React from "react";
import renderer from "react-test-renderer";
import Footer from "../../../src/client/components/Footer";

test("Should render Footer component correctly", () => {
  const rendered = renderer.create(
    <Footer />
  );

  expect(rendered.toJSON()).toMatchSnapshot();
});
