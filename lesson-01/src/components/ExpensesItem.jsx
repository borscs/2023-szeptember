
// function ExpensesItem() {
//     return <h2>Expenses ITEM!</h2>
// }

import './ExpenseItem.css';
import ExpensesDate from "./ExpensesDate";
const ExpensesItem = (props) => {

    return (
        <div className='expense-item'>
            <ExpensesDate
                date={props.date}
            />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}Ft</div>
            </div>
        </div>
    )
}

export default ExpensesItem;