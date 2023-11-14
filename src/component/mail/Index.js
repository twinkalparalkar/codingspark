import { useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import Sendmail from "./Sendmail";
import { useSelector } from 'react-redux';

function Index(){
    const [Content,setContent]=useState(true)
    const [index,setIndex]=useState(true)
    const [Item,setItem]=useState(false)
    const [TotalUnread,setTotalUnread]=useState(0)
    const [ItemContent,setItemContent]=useState('')
    const [list1,setlist]=useState([])
    const [list2,setlist2]=useState([])
    const emailSender=useSelector((state)=>state.auth.mailuser)

   
    const onSendMailHandler=()=>{
        setContent(false)
    }
    const onMailListHandler=()=>{
        setContent(true)
        setIndex(true)
        
        setlist2(list1.filter((item)=>item.email===emailSender))
        setTotalUnread(list2.filter((item)=>item.read===false).length)
        console.log(list1,list2,"Mailbox",Content,Item)
    }
    const onSentboxHandler=()=>{
        setContent(true)
        setIndex(false)
        
        setlist2(list1.filter((item)=>item.senderEmail===emailSender))
        console.log(list1,list2,"sendbox",Content,Item)
    }
   
    const onMailviewHandler=async (e)=>{
        e.preventDefault()
        console.log("View mail",e.target.parentElement.getAttribute('data-id'))
      const id=e.target.parentElement.getAttribute('data-id')
       const item1=list1.filter((item)=>item.id===id)[0]
        setItem(true)
        setItemContent(item1)
        
        const firebaseApiUrl = `https://react3-6931f-default-rtdb.firebaseio.com/email/${id}.json`; 
    const requestData = {
        read:true}

        try {
            await fetch(firebaseApiUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const display=async ()=>{
        try{
            const res=await fetch("https://react3-6931f-default-rtdb.firebaseio.com/email.json")
            if(!res.ok){throw new Error("Something went wrong ....Retrying")}
            const data=await res.json()
            
            const loadedEmail=[]

            for(const key in data){
                loadedEmail.push({
                    id:key,
                    email:data[key].email,
                    subject:data[key].subject,
                    mailbody:data[key].mailbody,
                    senderEmail:data[key].senderEmail,
                    read:data[key].read,
                })
            }
            setlist(loadedEmail)
            console.log(data,loadedEmail)
        }
        catch(error){
            console.log(error.message)
        }
    }
    const OnDeleteMailHandler = async (e) => {
        e.preventDefault()
        
      const id=e.target.parentElement.getAttribute('data-id')
      
          const firebaseApiUrl = `https://react3-6931f-default-rtdb.firebaseio.com/email/${id}.json`;
      
          try {
            const Response=await fetch(firebaseApiUrl, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              if(Response.ok){alert("Deleted mail")
            display()}
              
        } catch (error) {
            console.error('Error:', error);
        }
      };
      
    useEffect(() => {
        display();
      }, [list2]); 
    return (
        <div>
    <br/>
    <br/>
    <div>
        <Button onClick={onSendMailHandler} >Compose Mail</Button><br/>
        <Button variant="secondary"onClick={onMailListHandler} >Index - Unread Mail {TotalUnread}</Button><br/>
        <Button variant="secondary" onClick={onSentboxHandler}>Sent Box</Button>
    </div>
    <div style={{margin:"-30px 0px 0px 190px",backgroundColor:"white"}}>
        {Content && !Item &&
            <div>
                <h5>list of mail</h5>
                <ul>
                    {list2.map((item)=>(

                        <li style={{listStyle:"none"}} key={item.id} data-id={item.id}  >
                        <div onClick={onMailviewHandler}>
                        {!item.read && index && 
                            <span style={{color:"blue",width:"150px",height:"150px"}}>
                            <b>*</b></span> 
                        }
                        {item.subject} -- {item.mailbody}
                        </div>
                        <Button onClick={OnDeleteMailHandler}>Delete</Button>
                        <hr/>
                        </li>
                    ))}
                </ul>
            </div>
            }
        {Content && Item &&
            <div style={{color:'black'}}>
                <Button variant="secondary" onClick={()=>setItem(false)}>Back</Button><br/>
                From: {ItemContent.email}<br/>
                To: {ItemContent.senderEmail}<br/>
                Subject: {ItemContent.subject}<br/><br/>
                Message:<br/>
                {ItemContent.mailbody}<br/>
                

            </div>}
        
        {!Content && <div>
            <Sendmail onCancel={onMailListHandler}/>
            </div>}
    </div>
    <br/>
    <br/>
</div>
    )
}
export default Index