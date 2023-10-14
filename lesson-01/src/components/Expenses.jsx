import ExpensesItem from "./ExpensesItem";
import Card from "../ui/Card";
import './Expenses.css';
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const changeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpense = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeHandle={changeHandler}/>
            <ExpensesChart expenses={filteredExpense}/>
            {filteredExpense.map((expense) => (
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