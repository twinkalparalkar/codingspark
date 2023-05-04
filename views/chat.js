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
            // let lastid=0
            let lastid=localStorage.getItem('lastid')
            // if(!lastid){lastid=1}
            let r=await axios.get(`http://localhost:3001/user/display?lastid=${lastid}`,{headers:{"Authorization":token}})
            
            console.log('pppppiii',r.data.update,r.data.current_userid)
            // const old_mes={mes:"oppp"}
            // const y=[{op:123}]
            // const new_mes=[...y,...[old_mes]]
            localStorage.setItem('lastid',r.data.lastid)
            let n1
            if(r.data.update.length!==0){
                console.log("kl",r.data.update)
                if(localStorage.getItem('message')){
                    console.log("123")
                let r1=localStorage.getItem('message')
                n1=[...r1,...JSON.stringify(r.data.update)]
                // console.log('123',n1)
                }
                else{
                    console.log("12455555")
                    n1=JSON.stringify(r.data.update)
            console.log(n1)
                }
            localStorage.setItem('message',n1)
            }
            const record=JSON.parse(localStorage.getItem('message'))
            console.log(record[0])
            
            for(var i=0;i<record.length;i++){
                console.log(r.data.current_userid)
                showall(record[i],r.data.current_userid)
                
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
        let name="kll"
        console.log(o)
        if(o.userId==current_userid){ name="You"}
        else{ name=o.user.name}

    c1.appendChild(document.createTextNode(`${name}:${o.message}`))
    r.appendChild(c1)
       
       
    }catch(err){
        console.log(err)
    }
    
}


