import React, {useEffect, useReducer, useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const emailDefaultState = {
    value: '',
    isValid: null,
}

const passwordDefaultState = {
    value: '',
    isValid: null,
}
const emailReducerFunction = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.value,
            isValid: action.value.includes('@')
        }
    // } else if (action.type === 'INPUT_BLUR') {
    //     return {
    //         value: state.value,
    //         isValid: state.value.includes('@')
    //     }
    }
    return {value: '', isValid: null};

}

const passwordReducerFunction = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.value,
            isValid: action.value.trim().length > 6
        }
    } else if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.trim().length > 6
        }
    }
    return {value: '', isValid: false};
}

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailReducer, dispatchEmail] = useReducer(emailReducerFunction, emailDefaultState);
    const [passwordReducer, dispatchPassword] = useReducer(passwordReducerFunction, passwordDefaultState);


    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(emailReducer.isValid && passwordReducer.isValid)
        }, 1000);
        console.log('dependeci log');

        return () => {
            console.log('CLEANUP');
            clearTimeout(identifier);
        }

    }, [passwordReducer.value, emailReducer.value]);

    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchEmail({type: 'USER_INPUT', value: event.target.value});

       // setFormIsValid(emailReducer.isValid && passwordReducer.isValid);

    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', value: event.target.value});

        //setFormIsValid(emailReducer.isValid && passwordReducer.isValid)
    };

    // const validateEmailHandler = () => {
    //    dispatchEmail({type: 'INPUT_BLUR'});
    // };
    //
    // const validatePasswordHandler = () => {
    //     dispatchPassword({type: 'INPUT_BLUR'})
    // };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailReducer.value, passwordReducer.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailReducer.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailReducer.value}
                        onChange={emailChangeHandler}
                        // onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordReducer.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordReducer.value}
                        onChange={passwordChangeHandler}
                        // onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
