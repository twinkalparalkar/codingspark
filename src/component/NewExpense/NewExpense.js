import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const ExpenseData=(enteredExpenseData)=>{
        const expenseData={...enteredExpenseData,
        id:Math.random()
         }
    props.onAddHandler(expenseData)
    console.log("new",expenseData)
        }
        
    return (
        <div>
        <ExpenseForm onSaveExpenseData={ExpenseData}/>
        </div>
    )
}

export default NewExpense;