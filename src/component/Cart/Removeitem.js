// import { useState } from 'react'
import { useContext } from "react"

import CartContext from "../../store/cart-contex"
function Removeitem(props){
    
    const cartctx = useContext(CartContext)
    const RemoveHandler=(e)=>{
        e.preventDefault()

        console.log(props.item.id,cartctx.items,props)
        cartctx.removeItem(props.item.id)
        props.onRefresh()

    }
    
    return (
        <button onClick={RemoveHandler}>-</button>
    )
}
export default Removeitem