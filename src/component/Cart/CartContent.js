
import classes from './CartContent.module.css'

function CartContent(props){
    

    const closeCartHandler=()=>{
        props.OnCancel(false)
    }
    return(
        <div className={classes.backdrop}>
        <div className={classes.modal}>
        Sushi
        <div className={classes.header}>Total Amount  $39.00
        </div>

        <button onClick={closeCartHandler} className={classes.cancel}>Cancel</button>
        <button className={classes.order}>Order
        </button>
        </div>
        </div>
        
    )
}
export default CartContent