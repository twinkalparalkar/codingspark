import './Expense.css'
function Expense(t1){
    const item1="Food"
    return (
        <div className="card1">
        <h2>Expense Item:{t1.title}</h2>
            <ul>
                <li>{item1} Rs 10</li>
                
                <li> Petrol Rs {1+8} 100</li>
                
                <li> Movies Rs 200</li>
            </ul>
        </div>
        
    )
}
export default Expense;