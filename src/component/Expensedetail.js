import {useState} from 'react'

let Expensedetail=(props)=>{
    const [amount,setTitle]=useState(props.amount)
    const item1="Food"
    // let title=props.title
    const clickHandler=()=>{
        setTitle(100)
        console.log('clicked')
    }

    return (

       <div>
       Amount:{amount} --title:{props.title}
       <button onClick={clickHandler} >Change Title</button>
       </div>
        
        )
}
export default Expensedetail;