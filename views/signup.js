
const f=document.querySelector('#form')
f.addEventListener('submit',add_user)

async function add_user(e){
    try{
        e.preventDefault()
    const a=document.querySelector('#username').value
    const b=document.querySelector('#email').value
    const c=document.querySelector('#phone').value
    const d=document.querySelector('#password').value
    
    let j={name:a,email:b,phone:c,password:d}
    console.log(j)
    let res=await axios.post('http://localhost:3001/user/signup',j)
    alert("Successfuly signed up")
    window.location.href='login.html'
    console.log(a,b,c,j,res)
    }
    catch(err){
        console.log("lp",err.response.data)
        if (err.response && err.response.data && err.response.data.error.includes("User already exists")) {
            alert("User already exists, please login")
            window.location.href='login.html'
        } else {
            alert("Failed to sign up")
            console.error(err)
        }
        // document.body.innerHTML+=`<div style="color:red;">${err.error}</div>`
        
    } 
}

