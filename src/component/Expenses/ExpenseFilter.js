import './ExpenseFilter.css'
const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className="filter">

            <label>filter by year:
            </label>
            <select value={
                    props.selected
                }
                onChange={dropdownChangeHandler}>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2023</option>
            </select>

        </div>
    )
}
export default ExpenseFilter;
