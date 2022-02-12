import React from "react";
import { Expense } from "types/expense";
import currency from "utils/currency";
import styles from "./ExpenseItem.module.css";

interface Props {
  expense: Expense;
}

const ExpenseItem: React.FC<Props> = (props) => {
  const { expense } = props;

  return (
    <div className={styles.expenseItem}>
      <div>
        <h4 className={styles.header}>
          <span className={styles.title}>{expense.title}</span>
          <span className={styles.amount}>{currency(expense.amount)}</span>
        </h4>
      </div>
      <p className={styles.metadata}>
        {expense.userId} on {expense.date.toLocaleDateString()}
      </p>
    </div>
  );
};

export default ExpenseItem;
