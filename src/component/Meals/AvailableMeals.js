import './AvailableMeals.css'
import MealItem from './MealItem'
let DummyMeals=[
    {
        id:'f1',
        name:'Sushi',
        description:'Finnest fish and veggies',
        price:22.99        
    },
    {
        id:'f2',
        name:'Schnitzel',
        description:'A german speciality',
        price:22.99        
    },
    {
        id:'f3',
        name:'Poran Podi',
        description:'Maratha speciality',
        price:20.99        
    },
    {
        id:'f4',
        name:'Barbecue Burger',
        description:'American ,raw, meaty',
        price:21.99        
    }
]
function AvailableMeals(){

    
    return (
        <div className='frame'>
        <ul className='ul'>
        <MealItem items={DummyMeals}/>
        </ul>
        </div>
    )
}
export default AvailableMeals;