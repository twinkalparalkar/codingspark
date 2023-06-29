// import {useState} from 'react'
import './ExpenseForm.css'
let ExpenseForm=()=>{
    
    const aftertype=(event)=>{
        console.log(event.target.value)
    }
    return (
        <form className='Form'>
        <div>
            <div className='title'>
            <label>Title</label>
            <input type="text" onChange={aftertype}/>
            </div>

            <div className='amount'>
            <label>Amount</label>
            <input type="number" onChange={aftertype}/>
            </div>

            <div className='date'>
            <label>Date</label>
            <input type="date" max="2023-12-31" onChange={aftertype}/>
            </div>
        </div>
        <div className='action'>
        <button type="submit" >Add Expense</button></div>
        </form>
        )
}
export default ExpenseForm;