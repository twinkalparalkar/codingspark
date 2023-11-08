import React,{ useRef, useState,useEffect } from "react";
import ExpenseList from "./ExpenseList";
import { Button } from "react-bootstrap"

function ExpenseForm(props){
    const [list1,setlist]=useState([])
    const [IsEdit,setEdit]=useState(false)
    const [ExpenseId,setId]=useState(null)
    const amount=useRef()
    const description=useRef()
    const category=useRef()
    
async function onSubmithandler(e){
        e.preventDefault()
        const enteredamount=amount.current.value
        const entereddescription=description.current.value
        const enteredcategory=category.current.value
        
        const data={
            amount:enteredamount,
            category:enteredcategory,
            description:entereddescription
        }
        setlist((prev)=>{
            return [...prev,data]
        })
        if(IsEdit===true){
            try{
                const res=await fetch(`https://react3-6931f-default-rtdb.firebaseio.com/expense/${ExpenseId}.json`, 
                {method:"PUT",
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
                });
                setEdit(false)
                if(!res.ok){throw new Error("Something went wrong ....Retrying")}
            }
            catch(error){
                console.log(error.message)
            }
        }
        else{
           await fetch("https://react3-6931f-default-rtdb.firebaseio.com/expense.json",
                {method:"POST",
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
                });
            }
        
        display()
        amount.current.value = '';
        description.current.value = '';
        category.current.value = 'food';
    }

    function EditData(id){
        const editedElement=list1.find((item) => item.id === id)
        setEdit(true)
        setId(id)
        
        amount.current.value = editedElement.amount;
        description.current.value = editedElement.description;
        category.current.value = editedElement.category;
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
                    id:key,
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
    const [isDarkTheme, setIsDarkTheme] = useState(false);

  const onToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const bodyStyle = isDarkTheme ? { background: 'black', color: 'white' } : {};

  const ondownloadHandler = () => {
    const list1String = JSON.stringify(list1);
    const blob = new Blob([list1String], { type: 'application/json' });
  
    // Get the download link element
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = URL.createObjectURL(blob);
  
    // Trigger a click event to prompt the download
    downloadLink.click();
  };
  
    return(
<div style={bodyStyle}>
<div style={{backgroundColor:"lightcoral",border:"Solid black 5px",width:"20%",height:"40%",margin:"10px 100px 10px 400px",padding:"25px"}}>
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
        {!IsEdit &&<input type="submit"/>}
        {IsEdit && <input type="submit" value='Edit'/>}
        <button onClick={props.onForm}>Cancel</button>
    </form>
    </div>
    <Button onClick={ondownloadHandler}>Download File of Expense</Button>
<a id="downloadLink" style={{ display: 'none' }} download="file1.csv"></a>
   <Button onClick={onToggleTheme}>Toggle Theme</Button>
        <ExpenseList list1={list1} display={display} EditData={EditData}/>
</div>
    )
}
export default ExpenseForm;