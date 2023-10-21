import CartContext from "./cart-context";
import React, {useState,useEffect,useCallback} from "react";
let logoutTimer;
const calculateRenmaining =(expirationTime)=>{
    const currentTime= new Date().getTime()
    const adjExpirationTime=new Date(expirationTime).getTime()

    const remainingDuration=adjExpirationTime-currentTime
    return remainingDuration
}
const retrieveStoreToken=()=>{
    const storedToken=localStorage.getItem('token')
    const storedExpirationDate=localStorage.getItem('expirationTime')

    const remainingTime=calculateRenmaining(storedExpirationDate)

    if(remainingTime<=3600){
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null;
    }
    return {
        token:storedToken,
        duration:remainingTime}
}

const CartProvider = (props) => {
    const tokenData=retrieveStoreToken()
    let initialToken
    if(tokenData){
    initialToken=tokenData.token;
    }
    const [cartItems, setCartItems] = useState([]); 
    const [token, setToken] = useState(initialToken); 
    const userIsLoggedIn=!!token;
    // console.log("local",initialToken)
    const logoutHandler=useCallback(()=>{
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
    },[]  )
    const loginHandler=(token,expirationtime)=>{
        setToken(token)
        localStorage.setItem('token',token)
        localStorage.setItem('expirationTime',expirationtime)
        const remainingTime=calculateRenmaining(expirationtime)
        logoutTimer= setTimeout(logoutHandler,remainingTime);
        
    }
       
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
       
    useEffect(()=>{
        if(tokenData){
            console.log(tokenData.duration)
            logoutTimer=setTimeout(logoutHandler,tokenData.duration);
        }
    },[tokenData, logoutHandler])
    const cartContext = {
        items: cartItems,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    };
   
    return (
        <CartContext.Provider value={cartContext}>
            {props.children} 
        </CartContext.Provider>
    );
};

export default CartProvider;


