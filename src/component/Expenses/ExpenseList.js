import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
function ExpenseList(props){

    if (props.item.length === 0) {
        return <h3>No expense Found</h3>;
    }
     return (
        <ul className="ul">
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