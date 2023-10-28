import Contextapi from "./context-api"
import React, { useState,useEffect } from "react";

function ContextProvider(props){
    const [token, setToken] = useState(null); 
    const IsLoggedIn=!!token

    const login=(token1)=>{
        setToken(token1)
        
    }

    const logout=()=>{
        setToken(null)
    }

    useEffect(() => {
        // This code will run whenever 'token' changes
        console.log("Token has been updated:", token);
      }, [token]);
    
    const Contextapi1={
        token:token,
        IsLoggedIn:IsLoggedIn,
        login:login,
        logout:logout
    }
    return (
    <Contextapi.Provider value={Contextapi1}>
    {props.children} 
    </Contextapi.Provider>
    )
}

export default ContextProvider;