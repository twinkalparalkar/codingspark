
import Expense from './component/Expense';
import  ExpenseForm from './component/ExpenseForm'

let App=() =>{
  const ex=[
    {id:1,title:"book1",amount:600,date:"2023-02-03"},
    {id:2,title:"book2",amount:601,date:"2023-02-03"},
    {id:3,title:"book3",amount:700,date:"2023-02-03"}
  ]

  const saveformdataHandler=(enterexpensedata)=>{
    const expenseData={
      ...enterexpensedata,
      id:Math.random().toString()
    }
    console.log(expenseData)
    
  }
  return (
    <div className="App">
        
        <Expense item={ex}/>
        <ExpenseForm onSaveForm={saveformdataHandler}/>
    </div>
    
  );
}

export default App;

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