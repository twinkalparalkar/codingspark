import { useState } from 'react';
import './Expense.css'
import  Expensedetail from './Expensedetail'

import  ExpenseFilter from './ExpenseFilter'

let Expense=(props)=>{
    // const item1="Food"
    if (!props.item || props.item.length === 0) {
        return null; // or handle the empty case appropriately
    }
    console.log(props.item[0])

    const [filterdYear,setFilterYear]=useState('2020')
    const filteredHandler=(selected)=>{
        setFilterYear(selected)
    }
    return (
        <div className="card1">
            <ExpenseFilter selected={filterdYear} onChangeFilter={filteredHandler}/>
            {props.item.map(expense=><Expensedetail
                key={expense.id}
                title={expense.title}  amount={expense.amount}  date={expense.date}/>)}

            
        </div>
    )
}
export default Expense;