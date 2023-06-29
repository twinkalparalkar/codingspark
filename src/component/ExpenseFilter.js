
const ExpenseFilter=(props)=>{
    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className="filter">
        <label>filter</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
        </select>
        </div>
    )
}
export default ExpenseFilter;