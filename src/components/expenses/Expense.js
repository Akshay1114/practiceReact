import React, { useState } from "react";
import ExpensItem from "./ExpensItems";
import "../expenses/ExpensItems";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import moment from "moment";
import ExpensesList from "./ExpensesList";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const date = new Date(10, 12, 2021)
  console.log(date)
 
  // making this logic in new file
  // let expensesContent = <p>No Expenses Found</p>

  // if (filteredExpense.length > 0) {
  //   expensesContent= filteredExpense.map((expense)=>(
  //     <ExpensItem
  //     id = {expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //     />
  //   ))
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items = {filteredExpense}/>
      {/* {expensesContent} */}

      {/* one method */}
      {/* {props.items.map((expense) => {
       
        console.log()
       if(moment(expense.date).format('yyyy') === filteredYear ){
      return(
        <ExpensItem
        id = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )}})} */}
      {/* 2nd method */}
      {/* {filteredExpense.length === 0 && <p>No Expenses Found</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense) => (
          <ExpensItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* <ExpensItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpensItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpensItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpensItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expense;
