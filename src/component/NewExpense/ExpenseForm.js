import Card from '../UI/Card';
import './ExpenseForm.css'
import React, {useState} from 'react'

function ExpenseForm(props) {
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
    
    return (
        <Card>
            <form className='form'>
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
