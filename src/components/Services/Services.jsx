import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import designIcon from "../../asset/image/design.png";
import eCommerceIcon from "../../asset/image/e-commerce.png";
import webIcon from "../../asset/image/web.png";

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">MY SERVICES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img
                  className="eCommerceIcon"
                  src={eCommerceIcon}
                  alt="service-one"
                />
                <h2 className="serviceName">E-Commerce</h2>
                <p className="serviceDescription">
                  I will design and develop e-commerce online store website.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img
                  className="designIcon"
                  src={designIcon}
                  alt="service-two"
                />
                <h2 className="serviceName">Web Design</h2>
                <p className="serviceDescription">
                  Qualified web design and attractive effects which catches
                  visitor’s Eye.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="webIcon" src={webIcon} alt="service-three" />
                <h2 className="serviceName">Web Development</h2>
                <p className="serviceDescription">
                  Clean and fresh issue free code to make your website dynamic
                  perfectly.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
