
import classes from './ErrorModal.module.css'
const ErrorModal=props=>{
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}>
        <div className={classes.modal}>
        <header className={classes.header}>
        <h2>{props.title}</h2></header>
        <div className={classes.content}>
        <p>{props.message}</p>
        </div>
        <footer >
        <button className={classes.actions} onClick={props.onConfirm}>Okay</button>
        </footer>
        </div>
        </div>
    )
}
export default ErrorModal