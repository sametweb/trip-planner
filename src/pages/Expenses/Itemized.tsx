import ExpenseItem from "components/ExpenseItem";
import { TabItem } from "./Tabs";

interface Props {
  tripExpenses: any[];
  activeTab: TabItem;
  tabName: TabItem;
}

const Itemized: React.FC<Props> = (props) => {
  const { tripExpenses, activeTab, tabName } = props;

  if (activeTab !== tabName) return null;
  
  return (
    <>
      {tripExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </>
  );
};

export default Itemized;
