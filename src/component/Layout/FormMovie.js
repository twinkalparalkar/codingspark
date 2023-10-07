import {useState} from 'react'
function FormMovie(props){
    const [title,setTitle]=useState('')
    const ChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const [producer,setproducer]=useState('')
    const Changeproducer=(e)=>{
        setproducer(e.target.value)
    }
    const [release_date,setrelease_date]=useState('')
    const Changerelease_date=(e)=>{
        setrelease_date(e.target.value)
    }
    // console.log(title,release_date)

    const OnSubmitHandler=(e)=>{
        e.preventDefault()

        const movie={
            id:Math.random(),
            title:title,
            producer:producer,
            release_date:release_date
        }
        setTitle("")
        setproducer("")
        setrelease_date("")
        
        props.onAddData(movie)

    }
    return (
<div style={{width:"200px",height:"250px",backgroundColor:"#56CCF2",alignItems:"center",marginLeft:"500px"}}>
    <form><br/><b>
        <label>Title : </label>
        <input type="text" value={title} onChange={ChangeTitle}/><br/>
        <label>producer : </label>
        <input type="text" value={producer} onChange={Changeproducer}/><br/>
        <label>release_date : </label>
        <input type="date" value={release_date} onChange={Changerelease_date}/><br/><br/></b>
        <input type="submit" value="Add Movie" onClick={OnSubmitHandler}/>
    </form>
</div>
    )
}
export default FormMovie