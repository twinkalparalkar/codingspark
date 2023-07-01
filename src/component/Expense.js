import { useState } from 'react';
import './Expense.css'
import  Expensedetail from './Expensedetail'

import  ExpenseFilter from './ExpenseFilter'

let Expense=(props)=>{
    // const item1="Food"
    if (!props.item || props.item.length === 0) {
        return null; // or handle the empty case appropriately
    }
    // console.log(props.item)

    const [filterdYear,setFilterYear]=useState('2020')
    const filteredHandler=(selected)=>{
        setFilterYear(selected)
    }
    console.log("kk",filterdYear)
    const filteredExpense=props.item.filter(ex=>{
        return ex.date.getFullYear().toString()===filterdYear
    })

    let expenseContent = <p>No expense found</p>;

if (filteredExpense.length > 0) {
  expenseContent = filteredExpense.map(expense => (
    <Expensedetail
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date.toString()}
    />
  ));

  if (filteredExpense.length === 1) {
    expenseContent = [
      ...expenseContent,
      <p key="additional-text">Only single Expense here. Please add more...</p>
    ];
  }
}
    console.log(expenseContent,typeof(expenseContent))
    return (
        <div className="card1">
            <ExpenseFilter selected={filterdYear} onChangeFilter={filteredHandler}/>
            {expenseContent}
            
        </div>
    )
}
export default Expense;

