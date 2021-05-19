import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ title }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="h1 m-3" href="#">
        Weather
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-5 m-3 " style={{ maxHeight: "100px" }} navbarScroll>
          <Nav.Link href="#">Weather Data</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.defaultProps = {
  title: "Index Rate",
};

export default Header;

// const Header = (props) => {
//     return (
//       <header>
//         <h1>{props.title}</h1>
//       </header>
//     );
//   };

// {
/* <Header title='Hello'/> */
// }
