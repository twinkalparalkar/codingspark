import CartContext from "./cart-contex";
import React, {useState} from "react";

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]); // Use a more descriptive variable name, like cartItems

    const addItemHandler1 = (item) => {
        
        const existingList = cartItems.filter((item1) => (item1.id === item.id))
        if (existingList.length === 0) {
            setCartItems((prevCartItems) => [
                ...prevCartItems,
                item
            ])
        } else {
            existingList[0].quantity += 1
        }};
        
        const addItemHandler = (item) => {
            const updatedCartItems = [...cartItems];
            const existingItemIndex = updatedCartItems.findIndex((cartItem) => cartItem.id === item.id);
        
            if (existingItemIndex !== -1) {
                // Item already exists in cart, increment quantity
                updatedCartItems[existingItemIndex].quantity += 1;
            } else {
                // Item doesn't exist in cart, add it
                updatedCartItems.push({ ...item, quantity: 1 });
            }
        
            setCartItems(updatedCartItems); // Update the cart state
        };
        
        const removeItemHandler = (id) => {
            const updatedCartItems = [...cartItems];
            const itemIndex = updatedCartItems.findIndex((item) => item.id === id);
            
            if (itemIndex !== -1) {
                if (updatedCartItems[itemIndex].quantity === 1) {
                    updatedCartItems.splice(itemIndex, 1); // Remove the item
                } else {
                    updatedCartItems[itemIndex].quantity -= 1; // Decrement quantity
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
