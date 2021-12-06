import React, {useState} from "react";
import './expense.css'
import ExpenseForm from "./ExpenseForm";


function NewExpense (props) {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}> Add new expenses </button>}
      { isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpense = {saveExpenseDataHandler}/>}
    </div>
)

}

export default NewExpense;