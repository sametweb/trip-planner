import { users } from "components/TripUsers";
import User from "components/User";
import React from "react";
import { Expense } from "types/expense";
import currency from "utils/currency";
import styles from "./ExpenseItem.module.css";
import { User as UserType } from "types/user";

interface Props {
  expense: Expense;
}

const ExpenseItem: React.FC<Props> = (props) => {
  const { expense } = props;
  const user: UserType = users.find(
    (user) => user.id === expense.userId
  ) as UserType;

  return (
    <div className={styles.expenseItem}>
      <div>
        <div className={styles.header}>
          <span className={styles.title}>{expense.title}</span>
          <h4 className={styles.amount}>{currency(expense.amount)}</h4>
        </div>
      </div>
      <div className={styles.metadata}>
        <User user={user} /> on {expense.date.toLocaleDateString()}
      </div>
    </div>
  );
};

export default ExpenseItem;
