import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg="3" md={6} sm={12} className="p-5 text-center">
              <h2 className="footerName text-center">Follow Us </h2>

              <div className="social-container">
                <Link className="facebook social" to="/">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </Link>
                <Link to="/" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </Link>
                <Link to="/" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Link>
              </div>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Address </h2>
              <p className="footerDescription">
                6522 Baltimore National Pike CantonsVilla, California USA
                <br></br>
                <FontAwesomeIcon icon={faEnvelope} /> Email : Support@ele.com
                <br></br>
                <FontAwesomeIcon icon={faPhone} /> Phone : 434343434<br></br>
              </p>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Information </h2>
              <Link className="footerLink" to="/">
                About Me
              </Link>
              <br></br>
              <Link className="footerLink" to="/">
                Company Profile
              </Link>
              <br></br>
              <Link className="footerLink" to="/">
                Contact Us
              </Link>
              <br></br>
            </Col>

            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Policy </h2>
              <Link className="footerLink" to="/">
                Refund Policy
              </Link>
              <br></br>
              <Link className="footerLink" to="/">
                Terms And Condition
              </Link>
              <br></br>
              <Link className="footerLink" to="/">
                Privacy Policy
              </Link>
              <br></br>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="text-center copyrightSection">
          <Link className="copyRightLink" to="/">
            © Copyright 2022 by Zij, All Rights Reserved
          </Link>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
