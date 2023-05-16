
const f=document.querySelector("#form1")
const w1=document.querySelector("#w1")

f.addEventListener('submit',additem)
w1.addEventListener('click',removeitem1)
 
async function additem(e){
    try{
        const a=document.querySelector("#ex")
        const b=document.querySelector("#de")
        const c=document.querySelector("#category")
        if(a.value==""|| b.value==""||c.value==""){
            alert("Plz fill all input")
        }
        else
        {
        
        e.preventDefault()
        let j={"expense":a.value,"description":b.value,"category":c.value}
        // console.log(j)
        const token=localStorage.getItem('token')
        // console.log('jjjjjjj',token)
        let res=await axios.post("http://localhost:3000/user/additem",j,{headers:{"Authorization":token}})
        // console.log('mmmmmmm   ',res.data.new_data)
        showall(res.data.new_data)
        }
    }
    catch(err){
        console.log(err.name)
    }
}

async function removeitem1(e){
    try{
        e.preventDefault()
        if(e.target.classList.contains("delete1")){
        const li=e.target.parentElement
        const ul=li.parentElement
        const token=localStorage.getItem('token')
        let res=await axios.delete(`http://localhost:3000/user/delete/${li.id}`,{headers:{"Authorization":token}});

        if(res.status==200){
            alert('Deleted Sucessfully')
            ul.removeChild(li)
            }
        }
        }
    catch(err){ 
        console.log(err)
    }   
}

window.addEventListener("DOMContentLoaded",()=>{
    async function getData(){
        try{
            const page=1
            const token=localStorage.getItem('token')
            localStorage.setItem('page',1)
            // console.log('kkkkkkkk',token)
            const pagesize=localStorage.getItem('pagesize')
            let r=await axios.get(`http://localhost:3000/user/display?page=${page}&pagesize=${2}`,{headers:{"Authorization":token}})
            let r1=await axios.get("http://localhost:3000/user/displayfile",{headers:{"Authorization":token}})

            console.log('pppppiii',r.data)
        if(r.data.preminum){
          document.getElementById('razor').style.visibility="hidden"
        document.getElementById('mes1').innerHTML=`You are a Preminum User `
        showLeaderboard()
            }
            for(var i=0;i<r.data.update.length;i++){
                // console.log(r.data.update[i])
                showall(r.data.update[i])
                
            }
            showPagination(r.data)
            for(var i=0;i<r1.data.update.length;i++){
                // console.log(r1.data.update[i])
                showfile(r1.data.update[i])
            }
        }
        catch(err){
            console.log(err)
        }
    }
    getData()
})

function showPagination({currentPage,
    hasNextPage,nextPage,hasPreviousePage,previewPage,lastPage}){
        
        const e1=document.querySelector("#page")
        e1.innerHTML=''

        if(hasPreviousePage){
            const btn2=document.createElement('button')
            btn2.innerHTML=previewPage
            btn2.addEventListener('click',()=>getProducts(previewPage))
            e1.appendChild(btn2)
        }
        const btn1=document.createElement('button')
        btn1.innerHTML=`<h5>${currentPage}</h5>`
        btn1.addEventListener('click',()=>getProducts(currentPage))
        e1.appendChild(btn1)

        if(hasNextPage){
            const btn3=document.createElement('button')
            btn3.innerHTML=nextPage
            btn3.addEventListener('click',()=>getProducts(nextPage))
            e1.appendChild(btn3)
        }
       
}

async function getProducts(page){
    try{
        localStorage.setItem('page',page)
        const token=localStorage.getItem('token')
        const pagesize=localStorage.getItem('pagesize')
        let r=await axios.get(`http://localhost:3000/user/display?page=${page}&pagesize=${pagesize}`,{headers:{"Authorization":token}})
        const e1=document.querySelector("#booking")
        e1.innerHTML=''
        // console.log(r.data)
        console.log('pppppiii',r.data)
        for(var i=0;i<r.data.update.length;i++){
            // console.log(r.data.update[i])
            showall(r.data.update[i])
            
        }
        showPagination(r.data)
       
    }catch(err){
        console.log(err)
    }
    
}

function showfile(o){
    try{
        
        const e1=document.querySelector("#file_history")
        
        const li=document.createElement('li')
        // console.log(o.filename,o.fileURL)
        const a = document.createElement('a')
        a.textContent =o.filename
        a.setAttribute('href', o.fileURL)
        li.append(a)
        
        e1.append(li)
       
    }catch(err){
        console.log(err)
    }
    
}

function showall(o){
    try{
        
        const e1=document.querySelector("#booking")
        // e1.innerHTML=''
        const li=document.createElement('li')
        li.id=`${o.id}`
        // console.log(o.expense1,o.description,o.category,o,typeof(o))
        li.appendChild(document.createTextNode(`${o.expense1}-${o.description}-${o.category} `))

        const d=document.createElement('button')
        d.appendChild(document.createTextNode('Delete Expense'))
        d.className="delete1 btn btn-danger"
        li.appendChild(d)

        var ed=document.createElement('button')
		ed.className="edit btn btn-danger"
		ed.appendChild(document.createTextNode('Edit Expense'))
		li.appendChild(ed)

        e1.append(li)
       
    }catch(err){
        console.log(err)
    }
    
}


function showLeaderboard(){
  const input=document.createElement('input')
  input.type="button"
  input.value="Show LeaderBoard"
  input.className="btn btn-warning"
  input.onclick=async()=>{
    const token=localStorage.getItem('token')
    const userleader=await axios.get("http://localhost:3000/user/showleader",{headers:{"Authorization":token}})
    console.log('mmm8',userleader.data.update1)
    var leader=document.getElementById('leader')
    leader.innerHTML=''
    leader.innerHTML+="<h1>Leader Board</h1>"
    userleader.data.update1.forEach(element => {
      leader.innerHTML+=`<li>Name -${element.name} , Total Expense-${element.total}</li>`
      
    });
  }
  document.getElementById('message').appendChild(input)
}


document.getElementById('rows_no').onchange=async function(e){
    try{
        const e1=document.querySelector("#booking")
        e1.innerHTML=''
    const token=localStorage.getItem('token')
    console.log(document.getElementById('rows_no').value)
    const pagesize=document.getElementById('rows_no').value
    const page=localStorage.getItem('page')
    localStorage.setItem('pagesize',pagesize)
    
    let r=await axios.get(`http://localhost:3000/user/display?page=${page}&pagesize=${pagesize}`,{headers:{"Authorization":token}})
    for(var i=0;i<r.data.update.length;i++){
        // console.log(r.data.update[i])
        showall(r.data.update[i])
        
    }
    showPagination(r.data)
    
    }catch(err){ 
        console.log(err)
    }  
}

document.getElementById('razor').onclick=async function(e){
    try{
    const token=localStorage.getItem('token')
    // console.log(token)
    let r=await axios.get("http://localhost:3000/user/preminum",{headers:{"Authorization":token}});
    // console.log("pppp",r);
    var options={
        "key":r.data.key_id,
        "order_id":r.data.order.id,
        "handler":async function (res){
            const res1=await axios.post('http://localhost:3000/user/updatepayment',{
                order_id:options.order_id,
                payment_id:res.razorpay_payment_id
            },{headers:{"Authorization":token}})

        alert('You are a Preminum User Now')
        // console.log("jjjj",res1,res1.data.token,res1.data)
        document.getElementById('razor').style.visibility="hidden"
        document.getElementById('mes1').innerHTML=`You are a Preminum User `
        localStorage.setItem('token',res1.data.token)
        showLeaderboard()
        // download()
        } }
    const rzp1=new Razorpay(options);
    // console.log("rrrr",rzp1)
    rzp1.open();
    e.preventDefault();
    rzp1.on('payment.failed', function (res){
        // console.log(res)
        alert('something went wrong')
    })
    }
    catch(err){ 
        console.log(err)
    }   
}


async function download(){
    try{
        const token=localStorage.getItem('token')
        // console.log('plpll',token)
    let r=await axios.get('http://localhost:3000/user/download', { headers: {"Authorization" : token} })
        
        if(r.status === 200){
            var a = document.createElement("a");
            a.href = r.data.fileURL;
            console.log(r.data.fileURL)
            a.download = 'myexpense.csv';
            a.click();

        } else {
            console.log(r);
            alert('An error occurred while processing your request.');
        }

    }

    catch(err){
        console.log(err)
        alert('You are not authorized to access this resource. Please log in to a premium account.');
        
    }
}
