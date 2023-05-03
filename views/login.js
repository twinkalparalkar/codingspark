
const f2=document.querySelector('#form')

f2.addEventListener('submit',login_user)
async function login_user(e){
    try{
        e.preventDefault()
    
    const b=document.querySelector('#email').value
    const c=document.querySelector('#password').value
    console.log(b,c)
    let j={email:b,password:c}
    await axios.post('http://localhost:3001/user/login',j).then(res=>{
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
        alert('err.response.data.mes')
        document.body.innerHTML+=`<div style="color:red;">${err.response.data.mes}</div>`
        
    })
    }catch(err){
        console.log(err)
    }
    
}