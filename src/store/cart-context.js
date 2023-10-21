import React from "react";


const CartContext = React.createContext({
    item:[],
    addItem:(item)=>{},
    removeItem:(id)=>{},
    message:"Thank you",
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export default CartContext;