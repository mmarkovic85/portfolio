/*
 * Application Router Component
 *
 * Client-side router made using react-router-dom
 */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";

// Application Router Component
const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={Homepage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
