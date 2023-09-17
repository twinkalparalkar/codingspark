import './AvailableMeals.css'
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
    let meals=DummyMeals.map((meal)=>{
       return <li>
        <h4><b>{meal.name}</b></h4>
        <p><i>{meal.description}</i></p>
        <p className="price">${meal.price}</p>
        <hr/>
        </li>
    })
    
    return (
        <div className='frame'>
        <ul className='ul'>
        {meals}
        </ul>
        </div>
    )
}
export default AvailableMeals;