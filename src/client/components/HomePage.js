/*
 * HomePage Component
 *
 * For testing purposes divided in two sub-components:
 *  ContextConnected - connect HomePage to application context
 *  HomePage - rendering Component
 */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Render HomePage Component
const HomePage = ({ title }) => (
  <div>
    <h1 className="homepage__title">Welcome to {title}.</h1>
  </div>
);

// Connect HomePage to application context
const ContextConnected = () => {
  const { appTitle } = useContext(AppContext);

  return (<HomePage title={appTitle} />);
}

export {
  HomePage,
  ContextConnected as default
};
