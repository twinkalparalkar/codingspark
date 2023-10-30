import { useRef, useState } from "react";

function ExpenseForm(props){
    const [list1,setlist]=useState([])
    const amount=useRef()
    const description=useRef()
    const category=useRef()
    
    const onSubmithandler=(e)=>{
        e.preventDefault()
        const enteredamount=amount.current.value
        const entereddescription=description.current.value
        const enteredcategory=category.current.value
    console.log(enteredamount,enteredcategory,entereddescription)

    const data={
        id:Math.random(),
        amount:enteredamount,
        category:enteredcategory,
        description:entereddescription
    }
    setlist((prev)=>{
        return [...prev,data]
    })
    console.log(list1)
    }

    return(
<div>
<div style={{backgroundColor:"white",border:"Solid black 5px",width:"20%",height:"40%",margin:"10px 100px 10px 400px",padding:"25px"}}>
    <h2>Add Expense</h2>    
<form onSubmit={onSubmithandler}>
        <label>Amount:</label><input type="number" ref={amount}/>
        <label>description</label><input type="text" ref={description}/>
        <label>category:</label>
        <select ref={category}>
        <option>food</option>
        <option>Petrol</option>
        <option>Salary</option>
        </select><br/><br/>
        <input type="submit"/>
        <button onClick={props.onForm}>Cancel</button>
    </form>
    </div>
    <ul>
  <h1>List of Expenses</h1>
  {list1.map((item) => (
    <li key={item.id}>
      <strong>Amount:</strong> {item.amount}, <strong>Category:</strong> {item.category}, <strong>Description:</strong> {item.description}
    </li>
  ))}
</ul>

</div>
    )
}
export default ExpenseForm;