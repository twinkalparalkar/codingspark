import React, {useState} from 'react'

import './UserForm.css'
import ErrorModal from '../UI/ErrorModal'
function UserForm(props) {
    const [enteredUsername, setUsername] = useState('')
    const [enteredAge, setAge] = useState('')
    const [IsModal,setModal]=useState(false)

    const ChangeUsernameHandler = (e) => {
        setUsername(e.target.value)
    }
    const ChangeAgeHandler = (e) => {
        setAge(e.target.value)
    }

    const errorHandler = (e) => {
        setModal(null)
    }

    let user = {}
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (enteredAge === "" || enteredUsername === "") {
            console.log("Invalid input")
            setModal({
                title:'Invalid Input',
                message:'Please enter a valid name and age(non-emoty value.)'
            })
            return;
        }
        if (+ enteredAge < 1) {
            console.log("Invalid Age whic is less then 0")
            setModal({
                title:'Invalid Input',
                message:'Please enter a valid age(> 0).'
            })
            return;
        }
        

        user["username"] = enteredUsername
        user['age'] = enteredAge
        // console.log(enteredAge,enteredUsername,user)
        setUsername('')
        setAge('')
        props.OnSaveUserData(user)
    }
    return (
        <div>
            {IsModal &&<ErrorModal title={IsModal.title} message={IsModal.message}
            onConfirm={errorHandler}/>}
            <form onSubmit={onSubmitHandler}>
                <label htmlFor='Username'>Username</label><br/>
                <input id="username" type="text"
                    value={enteredUsername}
                    onChange={ChangeUsernameHandler}/><br/>
                <label htmlFor='Age'>Age (Year)</label><br/>
                <input id="age" type="number"
                    value={enteredAge}
                    onChange={ChangeAgeHandler}/><br/>
                <input type="submit" className='button' value="Add User"/><br/>
            </form>
        </div>
    )
}
export default UserForm
