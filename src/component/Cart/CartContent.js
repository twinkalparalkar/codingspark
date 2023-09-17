import classes from './CartContent.module.css'
function CartContent(){
    return(
        <div className={classes.backdrop}>
        <div className={classes.modal}>
        Sushi
        <div className={classes.header}>Total Amount  $39.00
        </div>

        <button>Cancel</button>
        <button className={classes.modal.order}>Order
        </button>
        </div>
        </div>
        
    )
}
export default CartContent