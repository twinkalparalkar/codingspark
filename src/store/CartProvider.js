import CartContext from "./cart-contex";
import React, { useState } from "react";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]); // Use a more descriptive variable name, like cartItems

  const addItemHandler = (item) => {
    // Use the state updater function to correctly update the state
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeItemHandler = (id) => {
    // Implement your logic for removing items from the cart here
  };

  const cartContext = {
    items: cartItems, // Change 'item' to 'items' for consistency
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
