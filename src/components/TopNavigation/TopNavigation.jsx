import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import whiteLogo from "../../asset/image/logo_white.png";
import blackLogo from "../../asset/image/logo_black.png";

class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [whiteLogo], // object
      navBarBack: "navBackground",
      navBarItem: "navItem",
      navVariant: "dark",

      pageTitle: props.title,
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBarLogo: [blackLogo],
        navBarBack: "navBackgroundScroll",
        navBarItem: "navItemScroll",
        navVariant: "light",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: "navTitle",
        navBarLogo: [whiteLogo],
        navBarBack: "navBackground",
        navBarItem: "navItem",
        navVariant: "dark",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>

        <Navbar
          className={this.state.navBarBack}
          collapseOnSelect
          fixed="top"
          expand="lg"
          variant={this.state.navVariant}
        >
          <Navbar.Brand className={this.state.navBarTitle}>
            <Link
              exact
              activeStyle={{ color: "#ffd900" }}
              className={this.state.navBarItem}
              to="/"
            >
              <img src={this.state.navBarLogo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link>
                <Link
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={this.state.navBarItem}
                  to="/"
                >
                  HOME
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={this.state.navBarItem}
                  to="/about"
                >
                  ABOUT
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={this.state.navBarItem}
                  to="/service"
                >
                  SERVICE
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={this.state.navBarItem}
                  to="/course"
                >
                  COURSES
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={this.state.navBarItem}
                  to="/portfolio"
                >
                  PORTFOLIO
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  exact
                  activeStyle={{ color: "#ffd900" }}
                  className={this.state.navBarItem}
                  to="/contact"
                >
                  CONTACT US
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
