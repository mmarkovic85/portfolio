/*
 * Application Context Component
 */
import React from "react";

// Create Application Context
const AppContext = React.createContext();

// Provider for Application Context
const AppContextProvider = ({ value, children }) => (
  <AppContext.Provider
    value={value}
    children={children}
  />
);

export {
  AppContextProvider,
  AppContext
};
