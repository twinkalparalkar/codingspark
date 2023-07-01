
import Expense from './component/Expense';
// import  ExpenseForm from './component/ExpenseForm'
import { useState } from 'react';
import NewExpense from './component/NewExpense';
const ex=[
  {id:1,title:"book1",amount:600,date:new Date("2020-02-03")},
  {id:2,title:"book2",amount:601,date:new Date("2020-02-03")},
  {id:3,title:"book3",amount:700,date:new Date("2022-02-03")}
]
let App=() =>{
  const [expense1,setexpense]=useState(ex)

  const addExpenseHandler=(expense)=>{
    setexpense((prev)=>{
      return [expense,...prev]
    })
  }
  console.log(expense1)

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expense item={expense1}/>
      
    </div>
    
  );
}

export default App;

