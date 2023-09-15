import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
function ExpenseList(props){

    if (props.item.length === 0) {
        return <h3>No expense Found</h3>;
    }
    let oneElement=<p></p>
    if(props.item.length === 1){
     oneElement=<p>Only single Expense here. Please add more...</p>
    }
    
     return (
        <ul className="ul">
        {oneElement}
        {props.item.map((ex) => (
            <ExpenseItem key={
                    ex.id
                }
                title={
                    ex.title
                }
                amount={
                    ex.amount
                }
                date={
                    ex.date
                }/>
        ))
    }
        </ul>
     )
    
}
export default ExpenseList;