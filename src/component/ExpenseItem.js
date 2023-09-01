import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div className="expense-date">
                <h4>{props.date.toISOString()}</h4>
            </div>
            <div className="expense-name">
                <h2> {props.title}</h2>
            </div>
            <div className="expense-amount">
                <h2>Rs.{props.amount} </h2>
            </div>

        </div>
    )

}
export default ExpenseItem;
