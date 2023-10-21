import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please good input'
            });
            return;
        } else if (enteredAge < 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please good age input'
            });
            return;
        }

        props.addUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameHandler}
                    />
                    <label htmlFor="age">Age (year)</label>
                    <input
                        id="year"
                        type="number"
                        value={enteredAge}
                        onChange={ageHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;