import React, { useState } from "react";
import ExpensItem from "./ExpensItems";
import "../expenses/ExpensItems";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import moment from "moment";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter(expense => {
    expense
  })
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
{/* 
     filter(()=>item !==) */}
      {props.items.map((expense) => {
       
        console.log()
       if(moment(expense.date).format('yyyy') === filteredYear ){
      return(
        <ExpensItem
        id = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )}})}
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
