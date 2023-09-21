
import classes from './CartContent.module.css'
import CartContext from '../../store/cart-contex'
import { useContext } from 'react'

function CartContent(props){
    
    const items=useContext(CartContext).items
    console.log("kjhh",items)

    const closeCartHandler=()=>{
        props.OnCancel(false)
    }
    return(
        <div className={classes.backdrop}>
        <ul className={classes.modal}>
        {items.map((item)=>(
            <li key={item.id}>{item.name}  <span className={classes.price}>{item.price}</span></li>
        ))}
        <div className={classes.header}>Total Amount  $39.00
        </div>

        <button onClick={closeCartHandler} className={classes.cancel}>Cancel</button>
        <button className={classes.order}>Order
        </button>
        </ul>
        </div>
        
    )
}
export default CartContent