import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import {useHistory} from 'react-router-dom'

function ProfileForm(){
    const history=useHistory()
    const newPasswordRef=useRef();
    const authctx=useContext(CartContext)
    console.log(authctx.token)
    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredNewpassword=newPasswordRef.current.value
    
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAdjPXJDLJb2Q6jYJ3_THQv4HlQM-6JZ1U',
        {
            method:'POST',
            body:JSON.stringify({
                idToken:authctx.token,
                password:enteredNewpassword,
                returnSecureToken:false
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            history.replace('/')
            //suceeds
        })
    }

return(
    <form onSubmit={submitHandler}><br/><br/>
    <label>New Password</label>
    <input type='password' id='new-password' minLength='7' ref={newPasswordRef}/>
    <button>Change Password</button>
    </form>
    )
}
    
export default ProfileForm;