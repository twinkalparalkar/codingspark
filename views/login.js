
const f2=document.querySelector('#f2')

f2.addEventListener('submit',login_user)
async function login_user(e){
    try{
        e.preventDefault()
    
    const b=document.querySelector('#Email').value
    const c=document.querySelector('#Password').value
    console.log(b,c)
    let j={email:b,password:c}
    await axios.post('http://localhost:3000/user/login1',j).then(res=>{
        console.log(res.status)
        if(res.status==201){
            alert(res.data.mes)
            localStorage.setItem('token',res.data.token)
            window.location.href="form.html"
        }
        else{
            throw new Error(res.data.mes)
        }
    }).catch(err=>{
        document.body.innerHTML+=`<div style="color:red;">${err.message}</div>`
        
    })
    }catch(err){
        console.log(err)
    }
    
}