import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

type TCollapseProps = {
  setExpanded: (value: boolean) => void;
};
const NavbarCollapse = ({ setExpanded }: TCollapseProps) => {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
          Home
        </Nav.Link>

        <NavDropdown title="Vacation" id="collapsible-nav-dropdown">
          <NavDropdown.Item as={Link} to="#" onClick={() => setExpanded(false)}>
            Vacation Packages
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="#" onClick={() => setExpanded(false)}>
            Cruise
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="#" onClick={() => setExpanded(false)}>
            Car Rental
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link as={Link} to="#" onClick={() => setExpanded(false)}>
          Flights
        </Nav.Link>
        <Nav.Link as={Link} to="#" onClick={() => setExpanded(false)}>
          Hotels
        </Nav.Link>
        <Nav.Link as={Link} to="#" onClick={() => setExpanded(false)}>
          Customer Service
        </Nav.Link>
        <Nav.Link
          as={Link}
          className="dis-MobileView"
          to="#"
          onClick={() => setExpanded(false)}
        >
          Profile
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavbarCollapse;
