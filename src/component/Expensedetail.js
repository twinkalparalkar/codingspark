import {useState} from 'react'

let Expensedetail=(props)=>{
    const [title,setTitle]=useState(props.title)
    const item1="Food"
    // let title=props.title
    const clickHandler=()=>{
        setTitle("Updated")
        console.log('clicked')
    }

    return (

       <div>
       Amount:{props.amount} --title:{title}
       <button onClick={clickHandler} >Change Title</button>
       </div>
        
        )
}
export default Expensedetail;