import classes from './Header.module.css'
import {Fragment} from 'react'
import mealsImage from '../../assets/th.jpg'
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    

    const onOpenCart=(IsCart)=>{
        console.log("kk",IsCart)
        props.OnCart(IsCart)
    }
    return (
        <Fragment>
            <header className={
                classes.header}>
                <h3>ReactMeals</h3>
                <HeaderCartButton OpenCart={onOpenCart}/>
            </header>
            <div >
                <img className={
                    classes['main-image']
                } src={mealsImage}
                    alt="full of food"/>
            </div>
        </Fragment>
    )
}
export default Header;
