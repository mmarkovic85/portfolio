/*
 * NotFoundPage Component
 *
 * For testing purposes divided in two sub-components:
 *  ContextConnected - connect NotFoundPage to application context
 *  NotFoundPage - rendering Component
 */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Render NotFoundPage Component
const NotFoundPage = ({ url }) => (
  <div>
    <h1 className="not-found-page__title">Error 404</h1>
    <p>The requested URL "{url}" was not found!</p>
  </div>
);

// Connect NotFoundPage to application context
const ContextConnected = ({ location: { pathname } }) => {
  const { appDomainAddress } = useContext(AppContext);

  return (
    <NotFoundPage
      url={appDomainAddress + pathname}
    />
  );
}

export {
  NotFoundPage,
  ContextConnected as default
};
