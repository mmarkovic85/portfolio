import React from "react";
import renderer from "react-test-renderer";
import Header from "../../../src/client/components/Header";

const NavbarPlaceholder = () => (<div>navbar placeholder</div>);

test("Should render Header component correctly", () => {
  const rendered = renderer.create(
    <Header navbar={NavbarPlaceholder} />
  );

  expect(rendered.toJSON()).toMatchSnapshot();
});
