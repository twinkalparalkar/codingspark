import classes from './CartContent.module.css'
import CartContext from '../../store/cart-contex'
import {useContext} from 'react'
import Removeitem from './Removeitem'
import Additem from './Additem'
function CartContent(props) {
    const cartContext = useContext(CartContext)

    
    let total=0
    cartContext.items.map((item)=>(
            total+=(item.price*item.quantity)
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
            <ul className={
                classes.modal
            }>
                {
                    cartContext.items.map((item) => (
                    <li key={
                        item.id
                    }>
                        <b>{
                            item.name
                        }</b><br/>
                        <span className={
                            classes.price
                        }>
                            {
                            item.price
                        }</span>&emsp;<span className={
                            classes.quantity
                        }>x{
                            item.quantity
                        }</span>&emsp;&emsp;&emsp;
                        <Removeitem  item={item} onRefresh={RefreshQuantity}/>
                        <Additem item={item} onRefresh={RefreshQuantity}/>
                        <hr/></li>
                ))
            }
                <div className={
                    classes.header
                }>Total Amount  ${total}
                </div>

                <button onClick={closeCartHandler}
                    className={
                        classes.cancel
                }>Cancel</button>
                <button className={
                    classes.order
                }>Order
                </button>
            </ul>
        </div>

    )
}
export default CartContent
