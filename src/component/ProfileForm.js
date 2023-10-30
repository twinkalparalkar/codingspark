import { useContext, useRef } from "react";
import Contextapi from "../store/context-api";
import {Configure} from "../Configure"
import {useHistory} from "react-router-dom"

function ProfileForm(props){
    const full_name=useRef()
    const photo_url=useRef()
    const history=useHistory()

    const contctx=useContext(Contextapi)

    let get_url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${Configure.firebase_key}&idToken=${contctx.token}`;
    fetch(get_url, {method: "POST"})
        .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Failed to fetch user data.');
              }
        })
        .then((data) => {
              console.log("kk",data.users[0].displayName,data.users[0].photoUrl);
              full_name.current.value=data.users[0].displayName
              photo_url.current.value=data.users[0].photoUrl
            })
        .catch((error) => {
              console.error(error);
            });

    const OnSubmitHandler=(e)=>{
        e.preventDefault()

        const fullname=full_name.current.value
        const Photourl=photo_url.current.value
        
        let url=`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${Configure.firebase_key}`
        
        if (!fullname || !Photourl) {
            alert("Please fill in all the required fields.");
            return;
        }      
        else{
            
            fetch(
                url,
            {
            method:"POST",
            body:JSON.stringify({
                displayName:fullname,
                photoUrl:Photourl,
                idToken:contctx.token,
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
                        let errorMessage='failed'
                        
                        throw new Error(errorMessage)
                    })
                }
            }).then(data=>{
                history.replace('/')
                alert("Profile completed 100%")
                props.onSubmit()
            })
            .catch(err=>{
                console.log("eerr",err)
                alert(err.message)
            })
        }
    }
    return(
<form onSubmit={OnSubmitHandler} style={{backgroundColor:"whitesmoke",width:"30%"
,marginLeft:"30%",padding:"30px"}}>
    <label>Full Name:</label>    <input type="text" ref={full_name}/><br/><br/>
    <label>Profile Photo URL:</label>    <input type="text" ref={photo_url}/><br/><br/>
    <input type="submit" value="Update"/>
    <button onClick={props.onSubmit}>Cancel</button>
</form>
    )
}
export default ProfileForm;