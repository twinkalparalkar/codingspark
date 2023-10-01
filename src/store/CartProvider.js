import CartContext from "./cart-context";
import React, {useState} from "react";

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]); 
            
    const addItemHandler = (item) => {
        console.log("kk",item)
            const updatedCartItems = [...cartItems];
            const existingItemIndex = updatedCartItems.findIndex((cartItem) => cartItem.id === item.id);
        
            if (existingItemIndex !== -1) {
                updatedCartItems[existingItemIndex].quantity += 1;
            } else {
                updatedCartItems.push({ ...item, quantity: 1 });
            }
            setCartItems(updatedCartItems); 
           
        };
        
    const removeItemHandler = (id) => {
            const updatedCartItems = [...cartItems];
            const itemIndex = updatedCartItems.findIndex((item) => item.id === id);
            
            if (itemIndex !== -1) {
                if (updatedCartItems[itemIndex].quantity === 1) {
                    updatedCartItems.splice(itemIndex, 1);
                } else {
                    updatedCartItems[itemIndex].quantity -= 1; 
                }
            }
            setCartItems(updatedCartItems); 
        };
        
    const cartContext = {
        items: cartItems,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };
   
    return (
        <CartContext.Provider value={cartContext}>
            {props.children} 
        </CartContext.Provider>
    );
};

export default CartProvider;


