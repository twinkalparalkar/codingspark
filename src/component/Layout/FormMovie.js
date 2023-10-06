function FormMovie(){
    return (
<div style={{width:"200px",height:"250px",backgroundColor:"#56CCF2",alignItems:"center",marginLeft:"500px"}}>
    <form><br/><b>
        <label>Title : </label>
        <input type="text"/><br/>
        <label>producer : </label>
        <input type="text"/><br/>
        <label>release_date : </label>
        <input type="date"/><br/><br/></b>
        <input type="submit" value="Add Movie"/>
    </form>
</div>
    )
}
export default FormMovie