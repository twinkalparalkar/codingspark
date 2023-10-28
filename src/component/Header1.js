import {Nav, NavLink} from "react-bootstrap"
function Header(){
    return (
<div style={{backgroundColor:"white"}}>

<Nav>
<h1>MyWebLink</h1>
    <NavLink to="/home">Home</NavLink>     
    <NavLink to="/product">Products</NavLink>     
    <NavLink to="/about">About us</NavLink>        
</Nav>
</div>
    )
}

export default Header;