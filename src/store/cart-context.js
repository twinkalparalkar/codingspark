import React from "react";


const CartContext = React.createContext({
    item:[],
    addItem:(item)=>{},
    removeItem:(id)=>{},
    message:"Thank you"
})

export default CartContext;