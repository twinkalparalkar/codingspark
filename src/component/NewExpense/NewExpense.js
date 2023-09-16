import ExpenseForm from "./ExpenseForm";
import React ,{useState} from 'react'
// import Card from '../UI/Card';
import "./NewExpense.css"
const NewExpense=(props)=>{
    const [Isediting,setEditing]=useState(false)

    const ExpenseData=(enteredExpenseData)=>{
        const expenseData={...enteredExpenseData,
        id:Math.random()
         }
    props.onAddHandler(expenseData)
        }
    
    const startEditingHanlder=()=>{
        setEditing(true)
    }
    const stopEditingHanlder=()=>{
        setEditing(false)
    }

    return (
        
        <div className="ButtonContent">
        {!Isediting && <button className="submit" onClick={startEditingHanlder}>Add New Expense</button>}
        {Isediting && <ExpenseForm onSaveExpenseData={ExpenseData} onCancel={stopEditingHanlder}/>}
        </div>
        
    )
}

export default NewExpense;