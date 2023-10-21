import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modalcart from './Modal';
import {NavLink} from 'react-router-dom'
import { useState,useContext } from 'react';
import CartContext from '../../store/cart-context';

function Header() {
  const cartCtx=useContext(CartContext)
  const isLoggedIn=cartCtx.isLoggedIn;

  const logoutHandler=()=>{
  cartCtx.logout()
  }
  const linkStyle = {
    color: 'white',
    marginLeft:"50px"
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
            <Nav className="justify-content-center" style={{marginLeft:'180px'}}>
              {!isLoggedIn &&(<Nav.Link>
                <NavLink to="/auth" style={linkStyle} >LOGIN</NavLink>
              </Nav.Link>)
            }
            {isLoggedIn &&(<Nav.Link>
            <NavLink to="/home" style={linkStyle} >HOME</NavLink>
          </Nav.Link>)}
          {isLoggedIn &&( <Nav.Link>
                <NavLink to="/product" style={linkStyle} >STORE</NavLink>
              </Nav.Link>)}
              {!isLoggedIn &&(<Nav.Link>
                <NavLink to="/about" style={linkStyle} >ABOUT</NavLink>
              </Nav.Link>)}
              {!isLoggedIn &&( <Nav.Link>
              <NavLink to="/contact" style={linkStyle} >CONTACT US</NavLink>
              </Nav.Link>)}
              {isLoggedIn &&(
                <Nav.Link>
              <NavLink to="/profile" style={linkStyle} >Change Password</NavLink>
              </Nav.Link>
              )}
              {isLoggedIn &&(
                <Nav.Link>
              <NavLink to="/auth" onClick={logoutHandler} style={linkStyle} >LOGOUT</NavLink>
              </Nav.Link>
              )}
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
