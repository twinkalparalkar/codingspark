const f2=document.querySelector('#form')

f2.addEventListener('submit',create_group)
async function create_group(e){
    try{
        e.preventDefault()
    const b=document.querySelector('#group_name')

    let j={group_name:b.value}
    // console.log(j)
    const token=localStorage.getItem('token')
    let res=await axios.post('http://localhost:3001/user/group',j,{headers:{"Authorization":token}})
        
        if(res.status==201){
            alert(res.data.message)
            window.location.href="chat.html"
        }
    }catch(err){
        // console.log(err)
        // console.log("lp",err.response.data)
        if (err.response && err.response.data ) {
            alert("Group name already exists")
            window.location.href='group.html'
        }
    }
    
}