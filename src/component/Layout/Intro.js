import classes from "./Intro.module.css"
function Intro(){
    return (
        <div className={classes.frame} >
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious<br/> lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients,just-in-time and of course by<br/> experienced chefs!</p>
        </div>
    )
}

export default Intro;