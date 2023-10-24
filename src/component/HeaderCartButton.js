import React,{useState} from 'react';
import {useContext} from 'react';
import icon from '../assets/carticon1.gif'
import classes from './HeaderCartButton.module.css'
import CartContext from '../store/cart-contex';

const HeaderCartButton=props=>{
    const [IsCart,setCart]=useState(false)
    const conctx=useContext(CartContext)

    const openCartHandler=()=>{
        setCart(true)
        props.OpenCart(IsCart)
    }

    
    return (
        <div className='h'>
        <button className={classes.button1} onClick={openCartHandler}>
    <span > <img src={icon} className={classes.icon} alt="icon"/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>{conctx.items.length}</span>
    </button>
    </div>
    )
}
export default HeaderCartButton;