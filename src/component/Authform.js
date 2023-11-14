import {  useRef, useState } from "react"
import {Configure} from "../Configure"
import {useHistory} from 'react-router-dom'
import { Link } from "react-router-dom"
// import Contextapi from "../store/context-api"
import {  useDispatch } from 'react-redux';
import {authActions} from '../store/auth'

import {Button,Form} from 'react-bootstrap'
function Authform(){

    const [IsAccount,setAccount]=useState(false)
    // const contctx=useContext(Contextapi)
    const dispatch=useDispatch()
    // const token=useSelector((state)=>state.auth.token)

    const history=useHistory()
    const AccountHandler=()=>{
        setAccount(!IsAccount)
    }
    const emailref=useRef()
    const passwordref=useRef()
    const confirmpasswordref=useRef()
    const input={
        marginBottom: "10px",
        borderRadius: "10px"
    }

const onSubmitHandler=(e)=>{
    e.preventDefault()
    const enteredemail=emailref.current.value
    const enteredpassword=passwordref.current.value
    if(!IsAccount){
        const enteredconfirmpassword=confirmpasswordref.current.value
        if( enteredconfirmpassword!==enteredpassword){
            alert("Confirm password is not Matching with password")
            return 
        }
    }
    console.log(enteredemail,enteredpassword)

    let url
    if(!IsAccount){
        url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${Configure.firebase_key}`
    }
    else{
        url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${Configure.firebase_key}`
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
                if(res.ok){
                    console.log("ok")
                    return res.json()
                }else{
                    return res.json().then((data)=>{
                        let errorMessage='Authentication failed'
                        // alert(errorMessage)
                        throw new Error(errorMessage)
                    })
                }
            }).then(data=>{
                console.log(data)
                // contctx.login(data.idToken)
                dispatch(authActions.login({mailofuser:data.email,token:data.idToken}))

                history.replace('/home')
               alert("Welcome To Expense Trackr")
               
            })
            .catch(err=>{
                console.log("eerr",err)
                alert(err.message)
            })
        }
    return (
<div style={{backgroundColor:"white",border:"Solid black 5px",width:"20%",height:"40%",margin:"100px 100px 100px 400px",padding:"25px"}}>
<h4>{!IsAccount ? "Sign-Up" : "Login"}</h4>

<Form onSubmit={onSubmitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control placeholder="Email" type="email" style={input} ref={emailref}></Form.Control> 
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control placeholder="Password" type="password"  style={input} ref={passwordref}></Form.Control>
    </Form.Group>
    {!IsAccount && 
        <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Control placeholder="Confirm Password" type="password"   style={input} ref={confirmpasswordref}></Form.Control>
        </Form.Group>
    }
    <Button variant="primary"  type="submit"  style={input}>
    {!IsAccount ? "Sign-Up" : "Login"}
    </Button>
    
</Form>
{IsAccount && <Link to="/forgetpassword">Forget password?</Link>}<br/><br/>
<div onClick={AccountHandler} style={{backgroundColor:"lightblue",border:"Solid blue 5px",width:"110%",height:"70px",marginLeft:"-10px",padding:"10px"}}>
    {!IsAccount ? "Have an account already?Login" : "Don't have an account?Sign-Up"}
</div>
</div>



    )
}

export default Authform;

