import React,{useState} from 'react';
import icon from '../../assets/carticon1.gif'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton=props=>{
    const [IsCart,setCart]=useState(false)
    const openCartHandler=()=>{
        setCart(true)
        console.log("ss",IsCart)
        props.OpenCart(IsCart)
    }
   
    return (
        <div>
        <button className={classes.button} onClick={openCartHandler}>
    <span > <img src={icon} className={classes.icon} alt="icon"/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>0</span>
    </button>
    </div>
    )
}
export default HeaderCartButton;