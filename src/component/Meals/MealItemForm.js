import './MealItemForm.css'
function MealItemForm(props){
    return(
        <div>
        <form className='form'>
        <b> Amount </b><input/><br/>
        <button>+ Add</button>
        </form>
        </div>
    )
}
export default MealItemForm;