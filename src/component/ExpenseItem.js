import './ExpenseItem.css'
import ExpenseDate from'./ExpenseDate'
function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            
            <div className="expense-name">
                <h2> {
                    props.title
                }</h2>
            </div>
            <div className="expense-amount">
                <h2>Rs.{
                    props.amount
                } </h2>
            </div>

        </div>
    )

}
export default ExpenseItem;
