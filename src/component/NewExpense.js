import ExpenseForm from "./ExpenseForm";

let NewExpense=(props)=>{
    const saveformdataHandler=(enterexpensedata)=>{
        const expenseData={
          ...enterexpensedata,
          id:Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
      }
    
    return (

       <div> 
       <ExpenseForm onSaveForm={saveformdataHandler}/>
       </div>
        
        )
}
export default NewExpense;