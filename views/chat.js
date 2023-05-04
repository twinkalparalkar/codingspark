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
// setTimeInterval(() =>. call Api , 1000)
window.addEventListener("DOMContentLoaded",()=>{
    async function getData(){
        try{
            const token=localStorage.getItem('token')
            
            // document.querySelector(".card1").innerHTML=""
            let lastid=1
            // let lastid=localStorage.getItem('lastid')
            // if(!lastid){lastid=1}
            let r=await axios.get(`http://localhost:3001/user/display?lastid=${lastid}`,{headers:{"Authorization":token}})
            
            console.log('pppppiii',r.data.update,r.data.lastid)
            // const old_mes={mes:"oppp"}
            // const y=[{op:123}]
            // const new_mes=[...y,...[old_mes]]
            localStorage.setItem('lastid',r.data.lastid)
            localStorage.setItem('message',JSON.stringify(r.data.update))

            let r1=localStorage.getItem('message')

            console.log('123',r1)
            for(var i=0;i<r.data.update.length;i++){
                // console.log(r.data.update[i].username)
                showall(r.data.update[i],r.data.current_userid)
                
            }
            
        }
        catch(err){
            console.log(err)
        }
    }
    // setInterval(getData, 3000)
    getData()
})


function showall(o,current_userid){
    try{
        // document.querySelector(".card1").innerHTML=""
        const r=document.querySelector(".card1")
        const c1=document.createElement('div')
        let name=""
        if(o.userId==current_userid){ name="You"}
        else{ name=o.user.name}

    c1.appendChild(document.createTextNode(`${name}:${o.message}`))
    r.appendChild(c1)
       
       
    }catch(err){
        console.log(err)
    }
    
}


