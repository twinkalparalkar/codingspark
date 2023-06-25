
import Expense from './component/Expense';
function App() {
  const ex=[
    {id:1,title:"book1"},
    {id:2,title:"book2"},
    {id:3,title:"book3"}
  ]

  return (
    <div className="App">
      
  
        <Expense title={ex[0].title}></Expense>
        <Expense title={ex[1].title}></Expense>
        <Expense title={ex[2].title}></Expense>
        
    </div>
    
  );
}

export default App;


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