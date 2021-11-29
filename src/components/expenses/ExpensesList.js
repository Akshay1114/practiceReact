import React from "react";
import './ExpensesList.css'
import ExpensItem from "./ExpensItems";
const ExpensesList = (props) => {
    const filteredYear = props.items
console.log(filteredYear)
    if (filteredYear === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
    // let expensesContent = <p>No Expenses Found</p>

  
    return (
        <div>
            <ui className="expenses-list">
            {
                filteredYear.map((expense)=>(
                    <ExpensItem
                    id = {expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                  ))
            }
            </ui>
        </div>
    )
}
export default ExpensesList;