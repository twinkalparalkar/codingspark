import React from 'react'

const Contextapi=React.createContext({
    token:'',
    IsLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export default Contextapi;
