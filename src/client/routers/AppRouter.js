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

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ProjectsPage from "../components/ProjectsPage";
import SkillsPage from "../components/SkillsPage";
import NotFoundPage from "../components/NotFoundPage";

// Application Router Component
const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/skills" component={SkillsPage} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </Router>
);

export default AppRouter;
