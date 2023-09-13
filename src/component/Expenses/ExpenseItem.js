import React,{useState} from 'react'

import './ExpenseItem.css'
import ExpenseDate from'./ExpenseDate'
import Card from '../UI/Card';
function ExpenseItem(props) {
    // let title=props.title
    
    let [title,setTitle]=useState(props.title)
    const clickHandler=()=>{
        setTitle("Updated!")
        console.log(title)
    }

    let [expense,setExpense]=useState(props.amount)
    const clickHandler1=()=>{
        setExpense("$100")
        console.log(expense)
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            
            <div className="expense-name">
                <h2> {title}</h2>
            </div>
            <div className="expense-amount">
                <h2>{expense} </h2>
            </div>
            <button onClick={clickHandler}>Change title</button>
            <button onClick={clickHandler1}>Change Expense</button>
        </Card>
    )

}
export default ExpenseItem;
