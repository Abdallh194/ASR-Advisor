import { FormControl, Nav } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";

const ExplorePlaces = () => {
  return (
    <Nav className="dis-none-inMobile">
      <div className="search-head">Explore New Places</div>
      <div className="input position-relative">
        <CiSearch
          className="position-absolute search-icon"
          aria-label="Search Icon"
        />
        <FormControl type="text" placeholder="Search for a place" />
      </div>
    </Nav>
  );
};

export default ExplorePlaces;
