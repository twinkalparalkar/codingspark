import './ExpenseDate.css'
function ExpenseDate(props) {

    return (
        <div className="expense-date">
            <div>{
                props.date.toLocaleString('en-US', {month: 'long'})
            }</div>
            <div>{
                props.date.getFullYear()
            }</div>
            <div>{
                props.date.toLocaleString('en-US', {day: '2-digit'})
            }</div>
        </div>
    )

}
export default ExpenseDate;
