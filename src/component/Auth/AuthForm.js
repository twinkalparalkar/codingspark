import { useState,useRef } from "react"

const AuthForm=()=>{
    const [isLogin,setIsLogin]=useState(true)
    const [isLoading,setIsLoading]=useState(false)
   const emailInputRef=useRef()
   const passwordInputRef=useRef() 

    const switchAuthModuleHandler=()=>{
        setIsLogin((prev)=>!prev)
    }
    const submitHandler=(event)=>{
        event.preventDefault()

        const enteredemail=emailInputRef.current.values
        const enteredpassword=passwordInputRef.current.values

        if(isLogin){

        }else{
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRVIyXbVzipmwmNR2fXSRzPmGbnDqbQIU',
            {
                method:"POST",
                body:JSON.stringify({
                    email:enteredemail,
                    password:enteredpassword,
                    returmSecureToken:true
                }),
                headers:{ 'Content-Type':'application/json'}
            }
            ).then(res=>{
                setIsLoading(true)
                if(res.ok){

                }else{
                    return res.json().then(data=>{
                        let errorMessage
                        if(data && data.error && data.error.message){
                            errorMessage=data.error.message
                        }
                        alert(errorMessage)
                        console.log(data)
                    })
                }
            })
        }
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