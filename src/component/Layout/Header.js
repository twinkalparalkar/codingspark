import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modalcart from './Modal';
import { useState,useContext } from 'react';
import CartContext from '../../store/cart-context';

function Header() {
  const cartCtx=useContext(CartContext)
  const linkStyle = {
    color: 'white',
    marginLeft:"80px"
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let Total=cartCtx.items.length
  return (
    <div>
      <Navbar bg="dark" >
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center" style={{marginLeft:'300px'}}>
              <Nav.Link href="#home" style={linkStyle}  >HOME</Nav.Link>
              <Nav.Link href="#link" style={linkStyle}  >STORE</Nav.Link>
              <Nav.Link href="/about" style={linkStyle}  >ABOUT</Nav.Link>
              <Button onClick={handleShow} style={{marginLeft:'300px',backgroundColor:"black",
              color:"white",border:'solid 3px white'}}>Cart</Button>
              <span style={{color:"white",marginLeft:'10px'}}>{Total}</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr style={{backgroundColor:"white",marginTop:"0px",height:"4px"}}/>
      <div style={{backgroundColor:"gray",marginTop:"-15px",height:"180px",width:"100%",color:"white",
      fontFamily:"Serif",fontSize:"100px", fontWeight:"bold"}}>
        <p >The Generics
        </p>
      
      </div>
      <Modalcart show={show} onHide={handleClose}/>
    </div>
  );
}

export default Header;
