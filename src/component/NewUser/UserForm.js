import React,{useState} from 'react'

import './UserForm.css'
function UserForm(props){
    const [enteredUsername,setUsername]=useState('')
    const [enteredAge,setAge]=useState('')

    const ChangeUsernameHandler=(e)=>{
        setUsername(e.target.value)
        
    }
    const ChangeAgeHandler=(e)=>{
        setAge(e.target.value)
    }

    let user={}
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if(enteredAge<0){
            console.log("Invalid Age whic is less then 0")
            return;
        }
        if(enteredAge==="" || enteredUsername===""){
            console.log("Invalid input")
            return;
        }

        user["username"]=enteredUsername
        user['age']=enteredAge
        // console.log(enteredAge,enteredUsername,user)
        setUsername('')
        setAge('')
        props.OnSaveUserData(user)
        
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
            <label htmlFor='Username'>Username</label><br/>
            <input id="username" type="text" value={enteredUsername} onChange={ChangeUsernameHandler} /><br/>
            <label htmlFor='Age'>Age (Year)</label><br/>
            <input  id="age" type="number" value={enteredAge} onChange={ChangeAgeHandler} /><br/>
            <input type="submit" className='button'value="Add User"/><br/>
            </form>
        </div>
    )
}
export default UserForm