// import logo from './logo.svg';
// import './App.css';

import Expenses from "./component/Expenses/Expenses";
// import ExpenseForm from "./component/NewExpense/ExpenseForm";
import NewExpense from "./component/NewExpense/NewExpense";
function App() {
    const expenses = [
        {
            id: 'e1',
            title: "Food",
            amount: 200,
            date: new Date(2021, 7, 7)
        }, {
            id: 'e2',
            title: "movie",
            amount: 400,
            date: new Date(2021, 7, 7)
        }, {
            id: 'e3',
            title: "travelling",
            amount: 800,
            date: new Date(2021, 7, 7)
        }, {
            id: 'e4',
            title: "home",
            amount: 300,
            date: new Date(2021, 7, 7)
        }
    ]
    return (
        <div className="App">
            <header className="App-header">
            <NewExpense/>
                <h1>Expense Items !!</h1>
                <Expenses items={expenses}/>

            </header>
        </div>
    );
}
export default App;
