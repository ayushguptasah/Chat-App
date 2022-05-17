import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  const brandStyle = {
    color: "#149e59",
    textDecoration: "none",
    marginTop: "10px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  };
  const logoText = {
      marginLeft: "10px",
      fontSize: "35px",
      fontFamily: "Nunito"
    };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
          <Navbar.Brand>
            <Link style={brandStyle} to="/">
              <img src="logo.png" alt="logo" />
              <span style={logoText}>ChatApp</span>
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat">
                Chat
              </Link>
            </li>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
