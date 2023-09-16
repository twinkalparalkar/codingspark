// import logo from './logo.svg';
// import './App.css';

import React,{ useState } from "react";
import Expenses from "./component/Expenses/Expenses";
// import ExpenseForm from "./component/NewExpense/ExpenseForm";
import NewExpense from "./component/NewExpense/NewExpense";
const dummy_expenses = [
    {
        id: 'e1',
        title: "Food",
        amount: 200,
        date: new Date(2021, 3, 7)
    }, {
        id: 'e2',
        title: "movie",
        amount: 400,
        date: new Date(2022, 7, 7)
    }, {
        id: 'e3',
        title: "travelling",
        amount: 800,
        date: new Date(2021, 2, 7)
    }, {
        id: 'e4',
        title: "home",
        amount: 300,
        date: new Date(2021, 7, 7)
    }
]
function App() {
    const [expense_data,setExpense]= useState(dummy_expenses)

    const addexpenseHandler=(expense)=>{
        setExpense((prev)=>{
            return [...prev,expense]})
    }
    return (
        <div className="App">
            <header className="App-header">
            <NewExpense onAddHandler={addexpenseHandler}/>
                <h1>Expense Items !!</h1>
                <Expenses items={expense_data}/>

            </header>
        </div>
    );
}
export default App;
