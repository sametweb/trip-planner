import Button from "components/Button";
import ExpenseItem from "components/ExpenseItem";
import PageHeader from "components/PageHeader";
import { users } from "components/TripUsers";
import User from "components/User";
import { trips } from "pages/Trips";
import { useState } from "react";
import { useParams } from "react-router-dom";
import type { Expense } from "types/expense";
import { Trip } from "types/trip";
import { User as UserType } from "types/user";
import currency from "utils/currency";
import ByUser from "./ByUser";
import styles from "./Expenses.module.scss";
import Itemized from "./Itemized";
import Tabs, { TabItem } from "./Tabs";

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
  {
    id: 3,
    title: "Snacks",
    userId: 1,
    tripId: 1,
    date: new Date(),
    amount: 50,
  },
];

const Expenses = () => {
  const [activeTab, setActiveTab] = useState<TabItem>(TabItem.ITEMIZED);

  const totalExpenses = expenses.reduce(
    (total, { amount }) => total + amount,
    0
  );

  const { id: tripId } = useParams();

  const trip = trips.find((trip) => trip.id === Number(tripId)) as Trip;
  const tripExpenses = expenses.filter((expense) => expense.tripId === trip.id);
  const tripAttendees = users.filter((user) => trip.users.includes(user.id));
  const totalAttendees =
    tripAttendees.length === 0
      ? "Nobody attended."
      : tripAttendees.length === 1
      ? "1 person attended."
      : tripAttendees.length + " people attended.";

  const getAttendeeSpendings = (userId: UserType["id"]) => {
    const spending = tripExpenses
      .filter((expense) => expense.userId === userId)
      .reduce((total, expense) => total + expense.amount, 0);
    return currency(spending);
  };

  const attendeeData = tripAttendees.map((user) => ({
    user,
    amountSpent: getAttendeeSpendings(user.id),
  }));

  const handleChangeTab = (tab: TabItem) => setActiveTab(tab);

  return (
    <div>
      <PageHeader>
        <div>
          <h2>Expenses</h2>
          <div className={styles.tripName}>{trip.name}</div>
        </div>
        <Button title="+ Add" role="info" />
      </PageHeader>
      <Tabs activeTab={activeTab} handleChangeTab={handleChangeTab} />
      <Itemized
        tripExpenses={tripExpenses}
        tabName={TabItem.ITEMIZED}
        activeTab={activeTab}
      />
      <ByUser
        userExpenses={attendeeData}
        tabName={TabItem.BY_USER}
        activeTab={activeTab}
      />
    </div>
  );
};

export default Expenses;
