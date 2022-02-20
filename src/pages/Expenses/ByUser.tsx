import { TabItem } from "./Tabs";
import styles from "./Expenses.module.scss";
import User from "components/User";

interface Props {
  userExpenses: any[];
  activeTab: TabItem;
  tabName: TabItem;
}

const ByUser: React.FC<Props> = props => {
  const { userExpenses, activeTab, tabName } = props;

  if (activeTab !== tabName) return null;

  return <>{userExpenses.map(({ user, amountSpent }) => (
    <div className={styles.attendeeItem}>
      <User key={user.id} user={user} large />
      <h4 className={styles.amountSpent}>{amountSpent}</h4>
    </div>
  ))}</>;
}

export default ByUser;