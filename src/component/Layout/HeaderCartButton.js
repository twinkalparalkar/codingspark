import React from 'react';
import icon from '../../assets/carticon1.gif'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton=props=>{
    return (
        <div>
        <button className={classes.button}>
    <span > <img src={icon} className={classes.icon} alt="icon"/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>0</span>
    </button>
    </div>
    )
}
export default HeaderCartButton;