let Expensedetail=(props)=>{
    const item1="Food"
    const clickHandler=()=>console.log('clicked')

    return (

       <div>
       Amount:{props.amount} --title:{props.title}
       <button onClick={clickHandler} >Change Title</button>
       </div>
        
        )
}
export default Expensedetail;