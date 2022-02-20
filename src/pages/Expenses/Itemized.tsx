import ExpenseItem from "components/ExpenseItem";
import { TabItem } from "./Tabs";
import styles from "./Itemized.module.scss";
interface Props {
  tripExpenses: any[];
  activeTab: TabItem;
  tabName: TabItem;
}

const Itemized: React.FC<Props> = (props) => {
  const { tripExpenses, activeTab, tabName } = props;

  if (activeTab !== tabName) return null;

  if (!tripExpenses.length) {
    return <p className={styles.emptyState}>No expense submitted yet.</p>;
  }

  return (
    <>
      {tripExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </>
  );
};

export default Itemized;
