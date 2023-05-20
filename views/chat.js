const f2=document.querySelector('#form')
const ul=document.querySelector('#group')

ul.addEventListener('click',opengroup)
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
    const groupid=localStorage.getItem('groupid')
    await axios.post(`http://localhost:3001/user/chat?groupid=${groupid}`,j,{headers:{"Authorization":token}})
    
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
    
            let lastid=localStorage.getItem('lastid')
            let r=await axios.get(`http://localhost:3001/user/display?lastid=${lastid}`,{headers:{"Authorization":token}})
            let g1=await axios.get(`http://localhost:3001/user/displaygroup`,{headers:{"Authorization":token}})
            let invite=await axios.get(`http://localhost:3001/user/invite`,{headers:{"Authorization":token}})
            

            // console.log('pppppiii',invite.data.update,invite.status,g1.data.listofgroup,g1.data.listofgroup.length)
            if( invite.status==200 && invite.data.update.length!=0){
                for(var i=0;i<invite.data.update.length;i++){
                    // console.log(invite.data.update[i])
                    showallinvite(invite.data.update[i])
                }
            }
            localStorage.setItem('lastid',r.data.lastid)
            let n1
            if( r.status==200 && r.data.update.length!==0){
                    if(localStorage.getItem('message')){
                        console.log("123")
                        let r1=localStorage.getItem('message')
                        n1=[...r1,...JSON.stringify(r.data.update)]
                        // console.log('123',n1)
                        }
                    else{
                        // console.log("12455555")
                        n1=JSON.stringify(r.data.update)
                    // console.log(n1)
                }
                localStorage.setItem('message',n1)
            }
            const record=JSON.parse(localStorage.getItem('message'))
            if(record!=null){
                for(var i=0;i<record.length;i++){
                    // console.log(r.data.current_userid)
                    showall(record[i],r.data.current_userid)
                }
            }
            
            for(var i=0;i<g1.data.listofgroup.length;i++){
                console.log(g1.data.listofgroup[i])
                showallgroup(g1.data.listofgroup[i])
            }
        }
        catch(err){
            console.log(err)
        }
    }
    // setInterval(getData, 3000)
    getData()
})


function showallinvite(o){
    try{
        
        const e1=document.querySelector("#invite")
        const li=document.createElement('li')
        li.id=`${o.id}`
       
        li.appendChild(document.createTextNode(`${o.group_name}`))
        li.className="inviteli"

        const d=document.createElement('button')
        d.appendChild(document.createTextNode('Accept Invitation'))
        d.className="acceptinvite btn btn-warning"
        d.id=o.id
        li.appendChild(d)
        e1.append(li)
       
    }catch(err){
        console.log(err)
    }
    
}

document.querySelector('.card2').addEventListener('click',async(e)=>{
    e.preventDefault()
    
    if(e.target.classList.contains("acceptinvite")){
        let group_id=e.target.id
        const token=localStorage.getItem('token')
    
        let res=await axios.get(`http://localhost:3001/user/addgroup?groupid=${group_id}`,{headers:{"Authorization":token}})
            
        // console.log(e.target.id,e.target)
        if(res.status==200){
            alert(res.data.message)
            e.target.parentElement.style.display = "none";
            // console.log(e.target.parentElement)
        }
    }
})
// function showall(o,current_userid){
//     try{
        
//         const r=document.querySelector(".card1")
//         const c1=document.createElement('div')
//         let name="kll"
//         console.log("jjj",o)
//         if(o.userId==current_userid){ name="You"}
//         else{ name=o.user.name}

//         if (o.message.includes("https://expenseapp123.s3")) {

//             console.log(o.message);
//             var img=document.createElement("img");
//             img.src= o.message
//             img.width=100
//             img.className="download"
//             var a = document.createElement("a");
//             a.href = o.message;
//             // a.appendChild(document.createTextNode("file"));
//             a.download = 'myexpense.txt';
            
//             a.appendChild(img)
//             img.addEventListener('click', function() {
//                 a.click();
//             });
           
//             c1.appendChild(document.createTextNode(`${name}:`))
//             c1.appendChild(a);
//             } else {
//             // var c1 = document.getElementById('c1');
//             c1.appendChild(document.createTextNode(`${name}:${o.message}`));
//             }

//     // c1.appendChild(document.createTextNode(`${name}:${o.message}`))
//     r.appendChild(c1)
//     }catch(err){
//         console.log(err)
//     }
// }
function showall(o, current_userid) {
    try {
        const r = document.querySelector(".card1");
        const c1 = document.createElement('div');
        let name = "kll";

        if (o.userId == current_userid) {
            name = "You";
        } else {
            name = o.user.name;
        }

        if (o.message.includes("https://expenseapp123.s3")) {
            console.log(o.message);
            var img = document.createElement("img");
            img.src = o.message;
            img.width = 100;
            img.className = "download";

            var a = document.createElement("a");
            a.href = o.message;
            img.addEventListener('click', function() {
                try{
                    console.log("lp",a.click(),img.parentElement.click())
                    a.download=''
                a.click();
                img.parentElement.click()
                }catch(err){
                    console.log(err)
                }
                
            });
            a.appendChild(img);

            

            c1.appendChild(document.createTextNode(`${name}:`));
            c1.appendChild(a);
        } else {
            c1.appendChild(document.createTextNode(`${name}: ${o.message}`));
        }

        r.appendChild(c1);
    } catch (err) {
        console.log(err);
    }
}


function showallgroup(o){
    try{
        const e1=document.querySelector("#group")
        const li=document.createElement('li')
        li.id=`${o.id}`
        li.appendChild(document.createTextNode(`${o.group_name}`))
        li.className="groupli"
        e1.append(li)
       
    }catch(err){
        console.log(err)
    }
    
}

async function opengroup(e){
    try{
        e.preventDefault()
        if(e.target.classList.contains("groupli")){
            const li=e.target
            const ul=e.target.parentElement

            const d=document.createElement('button')
            d.appendChild(document.createTextNode('Invite users'))
            d.className="invite btn btn-warning"
            d.id=li.id
            const h1=document.createElement('h1')
            
            const m=document.createElement('button')
            m.appendChild(document.createTextNode('Group Member'))
            m.className="groupMember btn btn-warning"
            m.id=li.id
            // console.log(ul)
            const token=localStorage.getItem('token')
            localStorage.setItem('groupid',li.id)
            let res=await axios.get(`http://localhost:3001/user/groupcontent?groupid=${li.id}`,{headers:{"Authorization":token}})
            
            
            if(res.status==200){
                document.querySelector(".card1").innerHTML=""
                    // document.querySelector(".card1").innerHTML=`<form class="searchForm">
                    //     <input type="text" id="searchInput" placeholder="Enter your username or email of user" />
                    //     <button type="submit" class="search btn btn-success">Add in Group</button>
                    // </form>`

                    let group_name=res.data.group_name
                    console.log(group_name)
                    h1.appendChild(document.createTextNode(group_name))
                   
                    if(res.data.admin==true){ 
                        document.querySelector('.card1').appendChild(h1)
                        document.querySelector(".card1").innerHTML+=`<form class="searchForm">
                        <input type="text" id="searchInput" placeholder="Enter your username or email of user" />
                        <button type="submit" class="search btn btn-success">Add in Group</button>
                    </form>`
                        document.querySelector('.card1').appendChild(d)
                        document.querySelector('.card1').appendChild(m)
                    }
                    localStorage.setItem('message_group',JSON.stringify(res.data.update))
                        for(var i=0;i<res.data.update.length;i++){
                            // console.log(res.data.update)
                            showall(res.data.update[i],res.data.current_userid)
                        }
            }
    }
        }
    catch(err){ 
        console.log(err)
    }   
}

document.querySelector('.card1').addEventListener('click',async(e)=>{
    e.preventDefault()
    if(e.target.classList.contains("invite")){
        let group_id=e.target.id
        const token=localStorage.getItem('token')
        let res=await axios.get(`http://localhost:3001/user/displayuser?groupid=${group_id}`,{headers:{"Authorization":token}})
            
        // console.log(e.target.id,res.data.update)
        e.target.parentElement.appendChild(document.createTextNode('Add User in group'))
        let o=res.data.update

        for(var i=0;i<o.length;i++){
            // console.log(r.data.current_userid)
            showalluser(o[i])
        }
    }
    if(e.target.classList.contains("groupMember")){
        let group_id=e.target.id
        const token=localStorage.getItem('token')
        let res=await axios.get(`http://localhost:3001/user/displaygroupmember?groupid=${group_id}`,{headers:{"Authorization":token}})
            
        // console.log("uuu",e.target.id,res.data.update)
        e.target.parentElement.appendChild(document.createTextNode('User in group'))
        let o=res.data.update

        for(var i=0;i<o.length;i++){
            // console.log(r.data.current_userid)
            showallgroupuser(o[i])
        }
    }

    if(e.target.classList.contains("search")){
        let group_id=localStorage.getItem('groupid')
        let input=e.target.previousElementSibling.value
        const token=localStorage.getItem('token')
        let res=await axios.get(`http://localhost:3001/user/searchuser?groupid=${group_id}&input=${input}`,{headers:{"Authorization":token}})
            
        // console.log("uuu123",e.target.previousElementSibling.value)
        if(res.status!=null){
            alert(res.data.message)
        }
    }
})

function showallgroupuser(o,a){
    const ul=document.createElement('ul')
    const hr=document.createElement('hr')
    const li=document.createElement('li')
        li.id=`${o.userid}`
        li.appendChild(document.createTextNode(`${o.username}   - `))

        const d=document.createElement('button')
        d.appendChild(document.createTextNode('Remove'))
        d.className="Removeuser btn btn-danger"
        d.id=o.id
        li.appendChild(d)

        const d1=document.createElement('button')
        d1.appendChild(document.createTextNode('make admin'))
        d1.className="MakeAdmin btn btn-danger"
        d1.id=o.id
        if(o.admin!=true){
            li.appendChild(d1)
        }
        
        ul.append(li)
        document.querySelector('.card1').appendChild(hr)
        document.querySelector('.card1').appendChild(ul)
        document.querySelector('.card1').appendChild(hr)

}

function showalluser(o){
    const ul=document.createElement('ul')
    const hr=document.createElement('hr')
    const li=document.createElement('li')
        li.id=`${o.userid}`
        li.appendChild(document.createTextNode(`${o.username}   - `))

        const d=document.createElement('button')
        d.appendChild(document.createTextNode('send Invite'))
        d.className="Sendinvite btn btn-danger"
        d.id=o.id
        li.appendChild(d)

        ul.append(li)
        document.querySelector('.card1').appendChild(hr)
        document.querySelector('.card1').appendChild(ul)
        document.querySelector('.card1').appendChild(hr)

}

document.querySelector('.card1').addEventListener('click',async(e)=>{
    e.preventDefault()
    if(e.target.classList.contains("Sendinvite")){
        let user_id=e.target.parentElement.id
        const token=localStorage.getItem('token')
        const groupid=localStorage.getItem('groupid')
        let res=await axios.get(`http://localhost:3001/user/sendinvite?userid=${user_id}&groupid=${groupid}`,{headers:{"Authorization":token}})
        
        if(res.status==200){
            alert(res.data.message)
            e.target.parentElement.style.display = "none";
            // console.log(e.target.parentElement)
        }
    }

    if(e.target.classList.contains("Removeuser")){
        let user_id=e.target.parentElement.id
        const token=localStorage.getItem('token')
        const groupid=localStorage.getItem('groupid')
        console.log("op",user_id,groupid)
        let res=await axios.get(`http://localhost:3001/user/removeuser?userid=${user_id}&groupid=${groupid}`,{headers:{"Authorization":token}})
        
        if(res.status==200){
            alert(res.data.message)
            e.target.parentElement.style.display = "none";
            console.log(e.target.parentElement)
        }   
    }

    if(e.target.classList.contains("MakeAdmin")){
        let user_id=e.target.parentElement.id
        const token=localStorage.getItem('token')
        const groupid=localStorage.getItem('groupid')
        console.log("op",user_id,groupid)
        let res=await axios.get(`http://localhost:3001/user/makeadmin?userid=${user_id}&groupid=${groupid}`,{headers:{"Authorization":token}})
        
        if(res.status==200){
            alert(res.data.message)
            e.target.style.display = "none";
            console.log(e.target.parentElement)
        }   
    }
    
})



function uploadFile() {
    const token=localStorage.getItem('token')
    const groupid=localStorage.getItem('groupid')
    console.log('plpll',token)
    const fileInput = document.getElementById('file-input');
    console.log(fileInput)
    const file = fileInput.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      fetch(`http://localhost:3001/upload?groupid=${groupid}`, {
        method: 'POST',
        body: formData,
        headers: {"Authorization" : token} 
      })
      .then(response => {
        // Handle the response from the server
        alert('File uploaded successfully')
        console.log('File uploaded successfully');
      })
      .catch(error => {
        // Handle any errors that occurred during the upload
        console.error('Error uploading file:', error);
      });
    }
  }

  
//   const socket = io();
//   socket.on('connect', () => {
//     console.log('Connected to the server');
  
//     socket.on('message', (data) => {
//       console.log('Received message:', data);
//       // Handle the message from the server
//     });
//   });
  
//   socket.emit('message', 'Hello, server!');
//   socket.on('message', (data) => {
//     console.log('Received message from client:', data);
//     // Handle the message from the client
//   });
  
// async function download(){
//     try{
//         // const token=localStorage.getItem('token')
//         console.log('plpll',token)
//     // let r=await axios.get('http://localhost:3001/user/file', { headers: {"Authorization" : token} })
        
//         // if(r.status === 200){
//         //     var a = document.createElement("a");
//         //     a.href = r.data.fileURL;
//         //     console.log(r.data.fileURL)
//         //     a.download = 'myexpense.csv';
//         //     a.click();

//         // } else {
//         //     console.log(r);
//         //     alert('An error occurred while processing your request.');
//         // }

//     }

//     catch(err){
//         console.log(err)
//         alert('You are not authorized to access this resource. Please log in to a premium account.');
        
//     }
// }

