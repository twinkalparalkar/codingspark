import Card from '../UI/Card';
import './ExpenseForm.css'
import React, {useState} from 'react'

function ExpenseForm(props) {
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:"",
    // })

    // const TitleChangehandler = (e) => {
    //     setUserInput((preState)=>{
    //         return{...preState,
    //         enteredTitle:e.target.value
    //     }})
    // }
    const [enteredtitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('')

    const TitleChangehandler = (e) => {
        setTitle(e.target.value)
    }
    const AmountChangehandler = (e) => {
        setAmount(e.target.value)
    }
    const DateChangehandler = (e) => {
        setDate(e.target.value)
    }
    
    const SubmitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            Title:enteredtitle,
            Amount:enteredAmount,
            Date:new Date(enteredDate)
        }
        console.log(expenseData)
    }

    return (
        <Card>
            <form onSubmit={SubmitHandler} className='form'>
                <label>Expense Title:</label>
                <input type="text"
                    onChange={TitleChangehandler}/><br/>
                <label>Expense Amount:</label>
                <input type="number"
                    onChange={AmountChangehandler}/><br/>
                <label>Expense Date:</label>
                <input type="date" min="2023-01-01" max="2030-12-31"
                    onChange={DateChangehandler}/><br/>

                <input type="submit" className='submit'/>
            </form>
        </Card>
    )
}
export default ExpenseForm;
