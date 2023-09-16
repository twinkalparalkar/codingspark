import React,{useState} from 'react'
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
            <label>Username</label><br/>
            <input type="text" value={enteredUsername} onChange={ChangeUsernameHandler} /><br/>
            <label>Age (Year)</label><br/>
            <input type="text" value={enteredAge} onChange={ChangeAgeHandler} /><br/>
            <input type="submit" value="Add User"/><br/>
            </form>
        </div>
    )
}
export default UserForm