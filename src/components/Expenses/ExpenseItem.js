import React, { useState } from 'react';

import Card from "../UX/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); 

  const clickHandler = () => {
    setTitle('Updated!!!')
    console.log("BOOM!!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Click Me!</button>
    </Card>
  );
};

export default ExpenseItem;
