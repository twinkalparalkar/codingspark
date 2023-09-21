import './MealItem.css'
import MealItemForm from './MealItemForm';

const MealItem=(props)=>{
    return(
        <div>
        {props.items.map((meal)=>(
            <li key={meal.id}> 
        <h4><b>{meal.name}</b></h4>
        <p><i>{meal.description}</i></p>
        <p className="price">${meal.price}</p>
        
        <MealItemForm item1={meal}/><hr/>
        </li>
        
        ))}
        
        </div>
    )
}
export default MealItem;