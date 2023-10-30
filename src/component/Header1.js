import React, { useContext } from "react";
import { Nav,Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Contextapi from "../store/context-api";

function Header1() {
    const contctx=useContext(Contextapi)
    const onLogout=()=>{
        contctx.logout()
    }
  return (
    <div style={{ backgroundColor: "white" }}>
    <Navbar>
      <Nav>
        <h1>MyWebLink</h1>
        <Nav.Link>
          <NavLink to="/home">Home</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/product">Products</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/about">About us</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/auth" onClick={onLogout}>Logout</NavLink>
        </Nav.Link>
      </Nav>
      </Navbar>
    </div>
  );
}

export default Header1;
