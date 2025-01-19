"use client";

import { FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container style={{ maxWidth: "1825px" }}>
          <Link to="/" className="logo">
            <span>ASR</span>TRAVEL
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown title="Vacation" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="#">
                  Vacation Packages
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">
                  Cruise
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">
                  Car Rental
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/Flights">
                Flights
              </Nav.Link>
              <Nav.Link as={Link} to="/Hotels">
                Hotels
              </Nav.Link>
              <Nav.Link as={Link} to="/CustomerService">
                Customer Service
              </Nav.Link>
              <Nav.Link as={Link} className="dis-MobileView" to="/UserProfile">
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="dis-none-inMobile">
            <div className="search-head">Explore New Places</div>
            <div className="input position-relative">
              <CiSearch className="position-absolute search-icon" />
              <FormControl type="text" placeholder="Search for a place" />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
