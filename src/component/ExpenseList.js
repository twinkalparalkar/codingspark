import {  useState,useEffect } from "react"
import { Button } from "react-bootstrap"

function ExpenseList(props){
  const [Preminum,setPremiunm]=useState(false)

    const total=props.list1.map((item)=>{
      return item.amount})
  
    let total_amount=0
    for(const k in total){
      total_amount+=parseInt(total[k])
    }
  

   
    useEffect(() => {
      if (total_amount > 10000) {
        setPremiunm(true);
      }
    }, [total_amount]);
  
    
    console.log(total_amount,total)
    async function onEditHandler(e){
        e.preventDefault()

        const expenseId = e.target.parentElement.getAttribute('data-id'); 
        props.EditData(expenseId)
    }
    async function onDeleteHandler(e){
        e.preventDefault()
        const expenseId = e.target.parentElement.getAttribute('data-id'); 
        // console.log(expenseId)
        try{
            const res=await fetch(`https://react3-6931f-default-rtdb.firebaseio.com/expense/${expenseId}.json`, {
                method: 'DELETE', 
              });
            if(!res.ok){throw new Error("Something went wrong ....Retrying")}
            props.display()
        }
        catch(error){
            console.log(error.message)
        }
    }
  
    
    return(
        <ul>
       
        {Preminum &&<Button>Activate Preminum</Button>}
        
        <h1>List of Expenses</h1>
        {props.list1.map((item) => (
          <li key={item.id} data-id={item.id}>
            <strong>Amount:</strong> {item.amount}, <strong>Category:</strong> {item.category}, 
            <strong>Description:</strong> {item.description}
            <button onClick={onEditHandler}> Edit </button>
            <button onClick={onDeleteHandler}> Delete</button>
          </li>
        ))}
      </ul>
    )
}
export default ExpenseList;