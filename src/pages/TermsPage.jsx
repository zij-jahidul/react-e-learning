import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TermsDescription from "../components/TermsDescription/TermsDescription";

class TermsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms And Condition " />
        <PageTop pageTitle="Terms And Condition" />
        <TermsDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default TermsPage;
