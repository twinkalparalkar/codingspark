import { useState } from "react"

function Contact(props){
    const [Name,setName]=useState('')
    const ChangeName=(e)=>{
        setName(e.target.value)
    }
    const [email,setemail]=useState('')
    const Changeemail=(e)=>{
        setemail(e.target.value)
    }
    const [phone,setphone]=useState('')
    const Changephone=(e)=>{
        setphone(e.target.value)
    }
    
    const OnSubmitHandler=(e)=>{
        e.preventDefault()

        const user={
            id:Math.random(),
            Name:Name,
            email:email,
            phone:phone
        }
        setName("")
        setemail("")
        setphone("")
        
        console.log(user)
        onAddUserdata(user)
    }
    async function onAddUserdata(user){
        console.log("kk",user)
        const response= await fetch("https://react-http-43b82-default-rtdb.firebaseio.com/contact.json",
            {method:"POST",
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
            });
        const data=await response.json()
        console.log(data)
    }

    return (
<div style={{width:"200px",height:"250px",backgroundColor:"#56CCF2",alignItems:"center",marginLeft:"500px"}}>
<form><br/><b>
    <label>Name : </label>
    <input type="text" value={Name} onChange={ChangeName}/><br/>
    <label>email : </label>
    <input type="email" value={email} onChange={Changeemail}/><br/>
    <label>Phone No : </label>
    <input type="number" value={phone} onChange={Changephone}/><br/><br/></b>
    <input type="submit" value="Submit Info" onClick={OnSubmitHandler}/>
</form>
</div>
)
}
export default Contact;