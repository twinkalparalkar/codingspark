import icon from '../../assets/carticon1.gif'
import classes from './HeaderCartButton.css'
const HeaderCartButton=(props)=>{
    return <div  className={classes.button1}>
    <span className={classes.icon}> <img src={icon} alt="icon"/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>: 0</span>
    </div>
}
export default HeaderCartButton;