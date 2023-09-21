import CartContext from "./cart-contex";
import React, {useState} from "react";

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]); // Use a more descriptive variable name, like cartItems

    const addItemHandler = (item) => {
        const existingList = cartItems.filter((item1) => (item1.id === item.id))

        if (existingList.length === 0) {
            setCartItems((prevCartItems) => [
                ...prevCartItems,
                item
            ])
        } else {
            existingList[0].quantity += 1
        }
    };

    const removeItemHandler = (id) => { // Implement your logic for removing items from the cart here
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
