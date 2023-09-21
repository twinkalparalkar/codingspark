import React,{useState} from 'react';
import {useContext} from 'react';
import icon from '../../assets/carticon1.gif'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-contex';

const HeaderCartButton=props=>{
    const [IsCart,setCart]=useState(false)
    const openCartHandler=()=>{
        setCart(true)
        console.log("ss",IsCart)
        props.OpenCart(IsCart)
    }

    const cartContext=useContext(CartContext)
    
   
   const numberofItem= cartContext.items?.length || 0;
   console.log("ppp",numberofItem,cartContext)
    return (
        <div>
        <button className={classes.button} onClick={openCartHandler}>
    <span > <img src={icon} className={classes.icon} alt="icon"/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberofItem}</span>
    </button>
    </div>
    )
}
export default HeaderCartButton;