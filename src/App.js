// import logo from './logo.svg';
// import './App.css';
import ExpenseItem from "./component/ExpenseItem";
function App() {
    const expenses=[
        {id:'e1',title:"Food",amount:200,date:new Date(2021,7,7)},
        {id:'e2',title:"movie",amount:400,date:new Date(2021,7,7)},
        {id:'e3',title:"travelling",amount:800,date:new Date(2021,7,7)},
        {id:'e4',title:"home",amount:300,date:new Date(2021,7,7)}
    ]
    return (
        <div className="App">
            <header className="App-header">
                <h1>Expense Items !!</h1>
             <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
             <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
             <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
             <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>

            </header>
        </div>
    );
}
export default App;
