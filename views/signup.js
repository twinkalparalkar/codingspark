
const f=document.querySelector('#f1')
f.addEventListener('submit',add_user)

async function add_user(e){
    try{
        e.preventDefault()
    const a=document.querySelector('#name').value
    const b=document.querySelector('#Email').value
    const c=document.querySelector('#Password').value
    
    let j={name:a,email:b,password:c}
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


