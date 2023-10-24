import { useContext } from "react"

import CartContext from "../../store/cart-contex"


function Additem(props){
    const cartctx = useContext(CartContext)
    const AdditemHandler=(e)=>{
        e.preventDefault()
        cartctx.addItem({...props.item,quantity: props.item.quantity+1})
        console.log("aaa",cartctx,props)
        props.onRefresh()
    }
    return (
        <button onClick={AdditemHandler}>+</button>
    )
}
export default Additem