import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div className="expense-date">
                <h4>March 6 2021</h4>
            </div>
            <div className="expense-name">
                <h2>Food</h2>
            </div>
            <div className="expense-amount">
                <h2>Rs 120</h2>
            </div>

        </div>
    )

}
export default ExpenseItem;
