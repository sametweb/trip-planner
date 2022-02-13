import Button from "components/Button";
import ExpenseItem from "components/ExpenseItem";
import PageHeader from "components/PageHeader";
import type { Expense } from "types/expense";
import currency from "utils/currency";
import styles from "./Expenses.module.css";

export const expenses: Expense[] = [
  {
    id: 1,
    title: "Groceries",
    userId: 1,
    tripId: 1,
    date: new Date(),
    amount: 100,
  },
  {
    id: 2,
    title: "Airbnb",
    userId: 2,
    tripId: 1,
    date: new Date(),
    amount: 1500,
  },
];

const Expenses = () => {
  const totalExpenses = expenses.reduce(
    (total, { amount }) => total + amount,
    0
  );

  return (
    <div>
      <PageHeader>
        <h2>Expenses</h2>
        <Button title="+ Add" role="info" />
      </PageHeader>
      <h3 className={styles.subHeader}>
        <span>Total Expenses</span>
        <span>{currency(totalExpenses)}</span>
      </h3>
      <div className={styles.expenses}>
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </div>
    </div>
  );
};

export default Expenses;
