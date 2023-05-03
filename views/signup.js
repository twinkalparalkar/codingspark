
const f=document.querySelector('#form')
f.addEventListener('submit',add_user)

async function add_user(e){
    try{
        e.preventDefault()
    const a=document.querySelector('#username').value
    const b=document.querySelector('#email').value
    const c=document.querySelector('#phone').value
    const d=document.querySelector('#password').value
    
    let j={name:a,email:b,phone:d,password:c}
    console.log(j)
    let res=await axios.post('http://localhost:3000/user/signup',j)
    if(res.status===201){
        window.location.href='login.html'
    }else{
        throw new Error('Failed to login')
    }
    // console.log(a,b,c,j,res.err)
    }
    catch(err){
        document.body.innerHTML+=`<div style="color:red;">${err.message}</div>`
        
    }
    
}


