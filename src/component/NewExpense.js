import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveformdataHandler = (enterexpensedata) => {
    const expenseData = {
      ...enterexpensedata,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const formdisplay = (ex) => {
    setShowForm(true);
    console.log("formdisplay1");
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {!showForm && <button onClick={formdisplay}>Add Expense</button>}
      {showForm && <ExpenseForm onSaveForm={saveformdataHandler} />}
    </div>
  );
};

export default NewExpense;
