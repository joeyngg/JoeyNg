import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" fixed="top" className="custom-navbar">
      <Container className="d-flex justify-content-start">
        <Navbar.Brand href="#hero" className="me-4">
          <img 
            src="/images/logo.png" 
            alt="Joey Ng Logo" 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex flex-row">
            <Nav.Link as={Link} to="about" smooth={true} duration={500} className="nav-item-custom">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500} className="nav-item-custom">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
