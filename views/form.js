const w1=document.querySelector("#listbook")
w1.addEventListener('click',removeitem1)

async function removeitem1(e){
    try{
        e.preventDefault()
        if(e.target.classList.contains("delete1")){
           
        const li=e.target.parentElement
        const ul=li.parentElement
        const token=localStorage.getItem('token')
        console.log(li.id)
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

function showall(o){
    try{
        
        const e1=document.querySelector("#booking")
        console.log(e1)
        const col=document.createElement('div')
        const card=document.createElement('div')
        col.className='col'
        card.className='card'
        
        card.id=`${o.id}`
        const img=document.createElement('img')
        img.className='card-img-top'
        img.src=o.Image
        // console.log(o.expense1,o.description,o.category,o,typeof(o))
        card.append(img)
        card.appendChild(document.createTextNode(`${o.name} : Rs.${o.amount} `))

        const d=document.createElement('button')
        d.appendChild(document.createTextNode('Add to cart'))
        d.className=" cart btn btn-info"
        d.id="cart"
        card.appendChild(d)
        
        col.append(card)
        e1.append(col)
       
    }catch(err){
        console.log(err)
    }
    
}

document.querySelector('#booking').addEventListener('click',async(e)=>{
    e.preventDefault()
    try{
    if(e.target.classList.contains("cart")){
        // console.log("klll",e.target.parentElement.id)
        const b=e.target.parentElement.id
        const token=localStorage.getItem('token')
        let r=await axios.get(`http://localhost:3000/user/addcart?book=${b}`,{headers:{"Authorization":token}})

        if(r.status==201){
            alert(r.data.message)
            
        }
    }
}catch(err){ 
        console.log(err)
    }  
})

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


 // Get the modal
 var modal = document.getElementById("myModal");
    
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick =async function() {
   modal.style.display = "block";
   const token=localStorage.getItem('token')
   let r=await axios.get(`http://localhost:3000/user/getcart`,{headers:{"Authorization":token}})

   if(r.status==201){
   console.log(r.data.update)
    let amount=0
   for(var i=0;i<r.data.update.length;i++){
    console.log(r.data.update[i].amount)
    showcart(r.data.update[i])
    amount=amount+r.data.update[i].amount
    
    }
   document.querySelector("#listbook").innerHTML+=`Total =${amount}`
   document.querySelector('#order').addEventListener('click',async(e)=>{
    e.preventDefault()
    try{
        console.log(amount)
    if(amount!=0){alert('Order Placed')
    modal.style.display = "none";}
    else{alert('Plz Place at least one order')}
    
}catch(err){ 
        console.log(err)
    }  
})
   }
   
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

 function showcart(o){
    try{
        
        const e1=document.querySelector("#listbook")
        // e1.innerHTML=''
        const li=document.createElement('li')
        li.id=`${o.bookid}`
        // console.log(o.expense1,o.description,o.category,o,typeof(o))
        li.appendChild(document.createTextNode(`${o.name}-${o.amount} `))

        const d=document.createElement('button')
        d.appendChild(document.createTextNode('Delete Expense'))
        d.className="delete1 btn btn-danger"
        li.appendChild(d)

        e1.append(li)

       
       
    }catch(err){
        console.log(err)
    }
    
}
