const f2=document.querySelector('#form')

f2.addEventListener('submit',chat_user)
async function chat_user(e){
    try{
        e.preventDefault()
    
    const b=document.querySelector('#chat')
    const r=document.getElementsByClassName('card1')[0]
    // console.log(b.value,r)
    const c1=document.createElement('div')
    c1.appendChild(document.createTextNode(`You:${b.value}`))
    r.appendChild(c1)
    
    let j={message:b.value}
    // console.log(r)
    const token=localStorage.getItem('token')
    await axios.post('http://localhost:3001/user/chat',j,{headers:{"Authorization":token}})
        // console.log(res.status)
    
        document.querySelector('#chat').value=""
    }catch(err){
        console.log(err)
    }
    
}