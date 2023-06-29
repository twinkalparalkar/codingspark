import {useState} from 'react'
import './ExpenseForm.css'
let ExpenseForm=()=>{
    const [title,enteredtitle]=useState('')
    const [amount,enteredamount]=useState('')
    const [date,entereddate]=useState('')
    
    const changetitle=(event)=>{
        enteredtitle(event.target.value)
        console.log(event.target.value)
    }
   
    const changeamount=(event)=>{
        enteredamount(event.target.value)
        console.log(event.target.value)
    }
   
    const changedate=(event)=>{
        entereddate(event.target.value)
        console.log(event.target.value)
    }
    return (
        <form className='Form'>
        <div>
            <div className='title'>
            <label>Title</label>
            <input type="text" onChange={changetitle}/>
            </div>

            <div className='amount'>
            <label>Amount</label>
            <input type="number" onChange={ changeamount}/>
            </div>

            <div className='date'>
            <label>Date</label>
            <input type="date" max="2023-12-31" onChange={changedate}/>
            </div>
        </div>
        <div className='action'>
        <button type="submit" >Add Expense</button></div>
        </form>
        )
}
export default ExpenseForm;