// import Button from "react-bootstrap/esm/Button";
import Carticon from '../assets/carticon.png'
import classes from './Cart.module.css'
const Cart = () => {
  return (
    <button className={classes.button1}>
    <img alt="carticon" src={Carticon}  className={classes.icon1}/>
        Your cart
    <span className={classes.quantity1}>0</span>
    </button>
  )
}
export default Cart;
