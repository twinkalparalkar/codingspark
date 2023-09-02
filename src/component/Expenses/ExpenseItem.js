import './ExpenseItem.css'
import ExpenseDate from'./ExpenseDate'
import Card from '../UI/Card';
function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            
            <div className="expense-name">
                <h2> {props.title}</h2>
            </div>
            <div className="expense-amount">
                <h2>Rs.{props.amount} </h2>
            </div>
        </Card>
    )

}
export default ExpenseItem;
