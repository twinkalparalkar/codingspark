import './Expense.css'
import  Expensedetail from './Expensedetail'
let Expense=(t1)=>{
    const item1="Food"
    return (
        <div className="card1">
        <h2>Expense Item:{t1.title}</h2>
           
            <div>
            <Expensedetail amount={t1.amount}   title={t1.title}></Expensedetail>
            </div>
        </div>
    )
}
export default Expense;