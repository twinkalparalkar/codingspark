import {useState} from 'react'
import './ExpenseForm.css'
let ExpenseForm=(props)=>{
    const [title,enteredtitle]=useState('')
    const [amount,enteredamount]=useState('')
    const [date,entereddate]=useState('')

    // const [userInput, setUserInput]=useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // })

    const changetitle=(event)=>{
        // setUserInput((prev)=>{
        //     return {...prev,title:event.target.value}
        // })
        // setUserInput({
        //     ...userInput,
        //     title:event.target.value
        // })
        enteredtitle(event.target.value)
        // console.log(event.target.value)
    }
   
    const changeamount=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     amount:event.target.value
        // })
        enteredamount(event.target.value)
        console.log(event.target.value)
    }
   
    const changedate=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     date:event.target.value
        // })
        entereddate(event.target.value)
        // console.log(event.target.value)
    }

    const  submitHandler=(event)=>{
        event.preventDefault()
        const expenseData={
            title:title,
            amount:amount,
            date:new Date(date)
        }
        console.log(expenseData)
        props.onSaveForm(expenseData)
        enteredtitle('')
        enteredamount('')
        entereddate('')
    }
    return (
        <form className='Form' onSubmit={submitHandler}>
        <div>
            <div className='title'>
            <label>Title</label>
            <input type="text" value={title} onChange={changetitle}/>
            </div>

            <div className='amount'>
            <label>Amount</label>
            <input type="number" value={amount} onChange={ changeamount}/>
            </div>

            <div className='date'>
            <label>Date</label>
            <input type="date" max="2023-12-31" value={date} onChange={changedate}/>
            </div>
        </div>
        <div className='action'>
        <button type="submit" >Add Expense</button></div>
        </form>
        )
}
export default ExpenseForm;