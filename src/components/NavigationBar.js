import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  const location = useLocation();
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    setNavVisible(true);
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className={`animated-navbar ${navVisible ? "visible" : ""}`}
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          Zoological Park
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
              <span className="underline"></span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
              <span className="underline"></span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
              <span className="underline"></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
