const f2=document.querySelector('#form')

f2.addEventListener('submit',chat_user)
async function chat_user(e){
    try{
        e.preventDefault()
    
    const b=document.querySelector('#chat').value
    const r=document.getElementsByClassName('card1')[0]
    console.log(b,r)
    const c1=document.createElement('div')
    c1.appendChild(document.createTextNode(`You:${b}`))
    r.appendChild(c1)
    
    // let j={email:b}
    // await axios.post('http://localhost:3001/user/chat',j).then(res=>{
    //     console.log(res.status)
    //     if(res.status==201){
    //         alert(res.data.mes)
    //         localStorage.setItem('token',res.data.token)
    //         window.location.href="chat.html"
    //     }
    //     else{
    //         throw new Error(res.data.mes)
    //     }
    // }).catch(err=>{
    //     alert(err.response.data.mes)
    //     // document.body.innerHTML+=`<div style="color:red;">${err.response.data.mes}</div>`
        
    // })
    }catch(err){
        console.log(err)
    }
    
}