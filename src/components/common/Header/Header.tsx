import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import ExplorePlaces from "./ExplorePlaces";
import NavbarCollapse from "./NavbarCollapse";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar">
      <Container style={{ maxWidth: "1825px" }}>
        <Link to="/" className="logo">
          <span>ASR</span>TRAVEL
        </Link>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <NavbarCollapse setExpanded={setExpanded} />
        <ExplorePlaces />
      </Container>
    </Navbar>
  );
}

export default Header;
