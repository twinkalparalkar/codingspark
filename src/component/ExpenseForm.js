import React,{ useRef, useState,useEffect } from "react";

function ExpenseForm(props){
    const [list1,setlist]=useState([])
    const amount=useRef()
    const description=useRef()
    const category=useRef()
    
    async function onSubmithandler(e){
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
    const response= await fetch("https://react3-6931f-default-rtdb.firebaseio.com/expense.json",
            {method:"POST",
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
            });
    console.log(response)
    // https://react3-6931f-default-rtdb.firebaseio.com/
    
    console.log(list1)
    }
    useEffect(()=>{
       display()
    },[])
    async function display(){
        try{
            const res=await fetch("https://react3-6931f-default-rtdb.firebaseio.com/expense.json")
            if(!res.ok){throw new Error("Something went wrong ....Retrying")}
            const data=await res.json()

            const loadedExpense=[]

            for(const key in data){
                loadedExpense.push({
                    id:data[key].id,
                    amount:data[key].amount,
                    description:data[key].description,
                    category:data[key].category
                }
                    
                )
            }
            setlist(loadedExpense)
            
        }
        catch(error){
            console.log(error.message)
        }
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