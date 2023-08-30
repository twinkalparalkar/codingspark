import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate=new Date(2021,7,7)
    const expenseAmount=120
    const expensetitle="Food"
    return (
        <div className="expense-item">
            <div className="expense-date">
                <h4>{expenseDate.toISOString()}</h4>
            </div>
            <div className="expense-name">
                <h2> {expensetitle}</h2>
            </div>
            <div className="expense-amount">
                <h2>Rs.{expenseAmount} </h2>
            </div>

        </div>
    )

}
export default ExpenseItem;
