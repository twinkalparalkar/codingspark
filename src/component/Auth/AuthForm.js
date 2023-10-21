import { useState,useRef,useContext } from "react"
import {useHistory} from 'react-router-dom'

import CartContext from "../../store/cart-context"

const AuthForm=()=>{
    const history=useHistory()
    const [isLogin,setIsLogin]=useState(true)
    const [isLoading,setIsLoading]=useState(false)
    const authctx=useContext(CartContext)

    const emailInputRef=useRef()
    const passwordInputRef=useRef() 

    const switchAuthModuleHandler=()=>{
        setIsLogin((prev)=>!prev)
    }
    
    const submitHandler=(event)=>{
        event.preventDefault()

        const enteredemail=emailInputRef.current.value
        const enteredpassword=passwordInputRef.current.value

        setIsLoading(true)
        let url;
        if(isLogin){
         url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdjPXJDLJb2Q6jYJ3_THQv4HlQM-6JZ1U'

        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdjPXJDLJb2Q6jYJ3_THQv4HlQM-6JZ1U'
        }
        fetch(
            url,
            {
                method:"POST",
                body:JSON.stringify({
                    email:enteredemail,
                    password:enteredpassword,
                    returnSecureToken:true
                }),
                headers:{ 
                    'Content-Type':'application/json'
                }
            }).then((res)=>{
                setIsLoading(false)
                if(res.ok){
                    return res.json()
                }else{
                    return res.json().then((data)=>{
                        let errorMessage='Authentication failed'
                        // alert(errorMessage)
                        throw new Error(errorMessage)
                    })
                }
            }).then(data=>{
                const expirationTime=new Date(new Date().getTime()+(+data.expiresIn*1000))
                authctx.login(data.idToken,expirationTime.toISOString())
                console.log(data,authctx,authctx.isLoggedIn)
                history.replace('/product')
            })
            .catch(err=>{
                console.log("eerr",err)
                alert(err.message)
            })
        
    }
    return (
<div>
    <h1>{isLogin? 'Login':'Sign Up'}</h1>
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="email">Your Email</label>
            <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div>
            <label htmlFor="password">Your Password</label>
            <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div>
            {!isLoading && <button>{isLogin ?'Login':'Create Account'}</button>}
            {isLoading && <p>Sending request...</p>}
            <button type='button' onClick={switchAuthModuleHandler}>
            {isLogin ?'Create new acount':'Login with existing account'}
            </button>
        </div>
    </form>
</div>
    )
}
export default AuthForm;