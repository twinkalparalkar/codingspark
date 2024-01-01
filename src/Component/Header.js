
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from './Header.module.css'
import Cart from "./Cart";


const Header = () => {
  return (
    <Navbar expand="lg"  className={classes.nav}>
      <Container >
        <h3 style={{marginLeft:"100px"}}>ReactMeals</h3>
        
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"50%"}}>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={classes.text}>Home</Nav.Link>
            <NavDropdown title="Dropdown" className={classes.text} >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Cart/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
