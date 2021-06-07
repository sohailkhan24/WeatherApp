import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ title }) => {
  return (
    <Navbar
      variant="light"
      expand="lg"
      style={{ backgroundColor: "#1409096e" }}
    >
      <Navbar.Brand className="h5 m-3 text-light" href="#">
        Weather
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-5 m-3 " style={{ maxHeight: "100px" }} navbarScroll>
          <Nav.Link className="h6 mt-2  text-light" href="#">
            DB Data
          </Nav.Link>
          <Nav.Link className="h6 mt-2  text-light" href="#">
            Weather Data
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.defaultProps = {
  title: "Index Rate",
};

export default Header;
