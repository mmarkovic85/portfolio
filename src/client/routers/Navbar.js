import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/projects">Projects</Link>
  </nav>
);

export {
  Navbar as default
};
