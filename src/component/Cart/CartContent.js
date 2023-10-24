import classes from './CartContent.module.css'
import CartContext from '../../store/cart-contex'
import {useContext} from 'react'
import Removeitem from './Removeitem'
import Additem from './Additem'
function CartContent(props) {
    const cartContext = useContext(CartContext)
    const items=cartContext.items
    let total=0
    const element=cartContext.items.map((item)=>(
           console.log(item)
          
        ))

    const closeCartHandler = () => {
        props.OnCancel(false)
    }

    const RefreshQuantity = () => {
        // Calculate the total again after an item is removed
        let newTotal = 0;
        cartContext.items.forEach((item) => {
            newTotal += item.price * item.quantity;
        });
        total = newTotal;
    };
    return (
        <div className={
            classes.backdrop
        }>
            <div className={classes.modal}>
                
            {items.map((item)=>(
                <li>{item.tshirtName} ---
                <span>{item.LargeNumber!=0 && <span>{item.LargeNumber}L</span>}
                {item.MediumNumber!=0 && <span>{item.MediumNumber}M</span>}
                {item.SmallNumber!=0 && <span>{item.SmallNumber}S</span>}</span>
                ---<span>{item.Price}</span>
                <Removeitem item={item} onRefresh={RefreshQuantity}/>
                </li>
            ))}
                <div className={classes.header}>Total Amount  ${total}
                </div>

                <button onClick={closeCartHandler}className={classes.cancel}>Cancel</button>
                <button className={classes.order}>Place Order</button>
            </div>
        </div>

    )
}
export default CartContent
