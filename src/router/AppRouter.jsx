import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import AllCoursesPage from "../pages/AllCoursesPage";
import AboutPage from "../pages/AboutPage";
import AllServicePage from "../pages/AllServicePage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/service" element={<AllServicePage />} />
          <Route exact path="/course" element={<AllCoursesPage />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRouter;
