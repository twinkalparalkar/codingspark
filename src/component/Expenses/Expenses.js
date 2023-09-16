import React, {useState} from 'react'

import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
    const [filteredYear, setFilterYear] = useState('2021')
    const filterChangeHandler = (e) => {
        setFilterYear(e)
    }

    const Filteredexpense = props.items.filter((ex) => {
        return ex.date.getFullYear().toString() === filteredYear
    })

    return (
        <Card>
            <ExpenseFilter selected={filteredYear}
                onChangeFilter={filterChangeHandler}/>

            <ExpenseChart expenses={Filteredexpense}/>
            <ExpenseList item={Filteredexpense}/>
        </Card>
    )
}
export default Expenses;
