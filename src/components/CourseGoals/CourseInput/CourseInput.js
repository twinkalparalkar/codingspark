import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [IsValid, setValid] = useState(true);
    
    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setValid(true)
        }
        
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setValid(false)
            return;
        }
        props.onAddGoal(enteredValue);
    };

    const buttonstyle={backgroundColor: IsValid ? 'red': 'yellow'}
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!IsValid ? 'invalid':''}`}>
                <label>Course Goal</label>
                <input type="text"
                    onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit" style={buttonstyle}>Add Goal</Button>
        </form>
    );
};

export default CourseInput;
