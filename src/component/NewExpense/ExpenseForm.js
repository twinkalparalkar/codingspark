import Card from '../UI/Card';
import './ExpenseForm.css'
function ExpenseForm(props) {
    const changehandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <Card>
            <form className='form'>
                <label>Expense Title:</label>
                <input type="text"
                    onChange={changehandler}/><br/>
                <label>Expense Amount:</label>
                <input type="number"/><br/>
                <label>Expense Date:</label>
                <input type="date" min="2023-01-01" max="2030-12-31"/><br/>
                
                <input type="submit" className='submit'/>
            </form>
        </Card>
    )
}
export default ExpenseForm;
