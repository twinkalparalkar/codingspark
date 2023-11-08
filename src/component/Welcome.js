import {useState} from 'react'
import ProfileForm from './ProfileForm'
import {Configure} from "../Configure"
import {useHistory} from "react-router-dom"
// import { useContext } from "react";

// import Contextapi from "../store/context-api";
import { useSelector } from 'react-redux';
// import {authActions} from '../store/auth'
import ExpenseForm from './ExpenseForm';

function Welcome(){
    // const contctx=useContext(Contextapi)
    // const dispatch=useDispatch()
    const token=useSelector((state)=>state.auth.token)

    const history =useHistory()
    const [isProfile,setProfile]=useState(false)

    const [isForm,setForm]=useState(false)
    const onChangeProfileHandler=()=>{
        setProfile(!isProfile)
    }

    const onChangeFormHandler=()=>{
        setForm(!isForm)
    }
    const OnMailHandler = (e) => {
        e.preventDefault();
        
        console.log(token,Configure.firebase_key)
        // Construct the URL for sending the OOB code
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${Configure.firebase_key}&idToken=${token}`;
      
        fetch(url, {
          method: "POST",
          body: JSON.stringify({
            requestType:"VERIFY_EMAIL",
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            if (res.ok) {
              console.log("OK");
              return res.json();
            } else {
              return res.json().then((data) => {
                let errorMessage = 'Failed to send OOB code';
                throw new Error(errorMessage);
              });
            }
          })
          .then((data) => {
            history.replace('/home');
            alert('Profile completed 100%');
          })
          .catch((err) => {
            console.error('Error:', err);
            alert(err.message);
          });
      };
      
    
    return (
<div>
    <p>Welcome to App</p>
    {!isProfile && <button onClick={onChangeProfileHandler}>Your profile is incomplete ,Complete now.</button>}
    {isProfile && <ProfileForm onSubmit={onChangeProfileHandler}/>}

    <button onClick={OnMailHandler}>Verify Email id</button>
    
    {!isForm && <button onClick={onChangeFormHandler}>Add Daily Expense</button>}
    {isForm && <ExpenseForm onForm={onChangeFormHandler}/>}

   
</div>
    )
}

export default Welcome;