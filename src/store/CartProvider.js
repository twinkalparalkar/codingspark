import CartContext from "./cart-contex";
import React, {useState} from "react";

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]); // Use a more descriptive variable name, like cartItems
 
        const addItemHandler = (item) => {
            const updatedCartItems = [...cartItems];
            const existingItemIndex = updatedCartItems.findIndex((cartItem) => cartItem.id === item.id);
        
            if (existingItemIndex !== -1) {
                if(item.LargeNumber!==0){
                    updatedCartItems[existingItemIndex].LargeNumber += 1;
                }else if(item.MediumNumber!==0){
                    updatedCartItems[existingItemIndex].MediumNumber += 1;
                }else if(item.SmallNumber!==0){
                    updatedCartItems[existingItemIndex].SmallNumber += 1;
                }
                // Item already exists in cart, increment quantity
               
            } else {
                // Item doesn't exist in cart, add it
                updatedCartItems.push({ ...item });
            }
        
            setCartItems(updatedCartItems); // Update the cart state
        };
        
        const removeItemHandler = (id) => {
            const updatedCartItems = [...cartItems];
            const itemIndex = updatedCartItems.findIndex((item) => item.id === id);
            
            if (itemIndex !== -1) {
                if (updatedCartItems[itemIndex]) {
                    updatedCartItems.splice(itemIndex, 1); // Remove the item
                } 
            }
            setCartItems(updatedCartItems); // Update the cart state
        };
        
    const cartContext = {
        items: cartItems, // Change 'item' to 'items' for consistency
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {
            props.children
        } </CartContext.Provider>
    );
};

export default CartProvider;
