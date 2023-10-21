import {useRef, useState} from 'react';
import classes from './UserInput.module.css';

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
};

const UserInput = (props) => {
    const expectedReturn = useRef(initialUserInput["expected-return"]);
    const duration = useRef(initialUserInput.duration);
    const yearlyContribution = useRef(initialUserInput["yearly-contribution"]);
    const currentSavings = useRef(initialUserInput["current-savings"]);
    const submitHandler = (event) => {
        event.preventDefault();

        const userInput = {
            'expected-return': expectedReturn.current.value,
            'yearly-contribution': yearlyContribution.current.value,
            'current-savings': currentSavings.current.value,
            duration: duration.current.value
        }
        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        expectedReturn.current.value = initialUserInput["expected-return"];
        duration.current.value = initialUserInput.duration;
        yearlyContribution.current.value = initialUserInput["yearly-contribution"];
        currentSavings.current.value = initialUserInput["current-savings"];
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        ref={currentSavings}
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        ref={yearlyContribution}
                        type="number"
                        id="yearly-contribution"
                    />
                </p>
            </div>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        ref={expectedReturn}
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        ref={duration}
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className={classes.actions}>
                <button
                    onClick={resetHandler}
                    type="reset"
                    className={classes.buttonAlt}
                >
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default UserInput;
