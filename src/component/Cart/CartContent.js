import classes from './CartContent.module.css'
import CartContext from '../../store/cart-contex'
import {useContext} from 'react'
import { useState } from 'react'
function CartContent(props) {
    const [totalamount,settotalamount]=useState(0)
    const items = useContext(CartContext).items
    console.log("kjhh", items,totalamount)
    
    const ChangeAmountHandler=()=>{
        settotalamount(50)
    }

    const closeCartHandler = () => {
        props.OnCancel(false)
    }

    return (
        <div className={
            classes.backdrop
        }>
            <ul className={
                classes.modal
            }>
                {
                items.map((item) => (
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
                        <button onClick={ChangeAmountHandler}>-</button>
                        <button onClick={ChangeAmountHandler}>+</button><hr/></li>
                ))
            }
                <div className={
                    classes.header
                }>Total Amount  $39.00
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
