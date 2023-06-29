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
            <Expensedetail amount={props.item[0].amount}   title={props.item[0].title} date={props.item[0].date}></Expensedetail>
            <Expensedetail amount={props.item[1].amount}   title={props.item[1].title} date={props.item[2].date}></Expensedetail>
            <Expensedetail amount={props.item[2].amount}   title={props.item[1].title} date={props.item[2].date}></Expensedetail>

        </div>
    )
}
export default Expense;