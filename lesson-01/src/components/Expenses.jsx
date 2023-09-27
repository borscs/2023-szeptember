import ExpensesItem from "./ExpensesItem";
import Card from "../ui/Card";
import './Expenses.css';


const Expenses = (props) => {

    return (
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpensesItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />))}
        </Card>
    )
};

export default Expenses;