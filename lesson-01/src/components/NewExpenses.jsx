import './NewExpense.css';
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {

    const saveInputData = (enteredInputs) => {
        let expenseData = {
            ...enteredInputs,
            id: Math.random().toString(),
        }
        props.addExpense(expenseData);
    }

    return (
        <div className='new-expense'>
        <ExpensesForm onSaveData={saveInputData}/>
        </div>
    )
};

export default NewExpenses;