
import Expense from './component/Expense';
// import  ExpenseForm from './component/ExpenseForm'
import { useState } from 'react';
import NewExpense from './component/NewExpense';
const ex=[
  {id:1,title:"book1",amount:600,date:"2023-02-03"},
  {id:2,title:"book2",amount:601,date:"2023-02-03"},
  {id:3,title:"book3",amount:700,date:"2023-02-03"}
]
let App=() =>{
  const [expense1,setexpense]=useState(ex)

  const addExpenseHandler=(expense)=>{
    setexpense((prev)=>{
      return [expense,...prev]
    })
  }
  console.log(expense1)

  // const saveformdataHandler=(enterexpensedata)=>{
  //   const expenseData={
  //     ...enterexpensedata,
  //     id:Math.random().toString()
  //   }
  //   console.log(expenseData)
    
  // }
  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expense item={expense1}/>
      
    </div>
    
  );
}

export default App;

  // <ExpenseForm onSaveForm={saveformdataHandler}/>
// <Expense title={ex[0].title} amount={ex[0].amount}></Expense>
        // <Expense title={ex[1].title} amount={ex[1].amount}></Expense>
        // <Expense title={ex[2].title} amount={ex[2].amount}></Expense>
// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>