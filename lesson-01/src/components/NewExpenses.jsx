import './NewExpense.css';
import ExpensesForm from "./ExpensesForm";

const NewExpenses = () => {

    const saveInputData = (enteredInputs) => {
        let expenseData = {
            ...enteredInputs,
            id: Math.random().toString(),
        }
        console.log(expenseData);
    }

    return (
        <div className='new-expense'>
        <ExpensesForm onSaveData={saveInputData}/>
        </div>
    )
};

export default NewExpenses;