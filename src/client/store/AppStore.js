/*
 * Application Store Component
 *
 * Component in which application state is stored with useState hook, and
 * delivered to rest of components with Context Provider.
 */
import React, { useEffect, useState } from "react";
import { AppContextProvider } from "../context/AppContext";
import AppRouter from "../routers/AppRouter";

const AppStore = () => {
  // >>> Application state
  const [appDomainAddress, setAppDomainAddress] = useState("");
  const [appTitle, setAppTitle] = useState("");
  // <<< Application state

  // >>> Lifecycle methods example with useEffect hook
  const componentWillUnmount = () => {
    // unsubscribe
    setAppDomainAddress("");
    setAppTitle("");
  };

  const componentDidMount = () => {
    // subscribe
    setAppDomainAddress("localhost:3000");
    setAppTitle("React-Node Boilerplate");

    return componentWillUnmount;
  };

  useEffect(componentDidMount, []);
  // <<< Lifecycle methods

  return (
    <AppContextProvider value={{
      appDomainAddress,
      appTitle
    }}>
      <AppRouter />
    </AppContextProvider>
  );
};

export default AppStore;
