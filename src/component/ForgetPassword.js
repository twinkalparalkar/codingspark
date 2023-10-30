import { useRef } from "react";
import { useHistory } from "react-router-dom";
import {Configure} from "../Configure"

function ForgetPassword(){
    const history=useHistory()
    const emailref=useRef()
    const input={
        marginBottom: "10px",
        borderRadius: "10px"
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        const enteredemail=emailref.current.value

        let url=`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${Configure.firebase_key}`
     
    fetch(
        url,
        {
            method:"POST",
            body:JSON.stringify({
                requestType:"PASSWORD_RESET",
                email:enteredemail
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
                // console.log(data.idToken,contctx)
                history.replace('/auth')
               alert("Password reset link is sent to mail.")
            //    console.log(contctx.token)
            })
            .catch(err=>{
                console.log("eerr",err)
                alert(err.message)
            })

    }
return (
<div style={{backgroundColor:"white",border:"Solid black 5px",width:"20%",height:"40%",margin:"100px 100px 100px 400px",padding:"25px"}}>
<h2>Forget Password</h2>    
<form onSubmit={onSubmitHandler}>
        <label>Enter the email which you have registered</label>
        <input placeholder="Email" type="email" style={input} ref={emailref}/><br/>
        <input value="Send Link" type="submit"  style={input}/>
    </form>
</div>
)
}
export default ForgetPassword;