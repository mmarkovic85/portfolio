/*
 * Application
 *
 * Main file for React App
 */
import "core-js/stable";// Polyfill
import "regenerator-runtime/runtime";// Polyfill
import React from "react";
import ReactDOM from "react-dom";
import "normalize-css/normalize.css";// Reset browser css
import "./styles/styles.scss";
import AppStore from "./store/AppStore";

ReactDOM.render(
  <AppStore />,
  document.getElementById("app")
);
