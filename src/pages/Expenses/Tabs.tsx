import Tab from "./Tab";
import styles from "./Expenses.module.scss";
import classNames from "classnames";

export enum TabItem {
  ITEMIZED = "Itemized",
  BY_USER = "By User",
}

interface Props {
  activeTab: TabItem;
  handleChangeTab: (tab: TabItem) => void;
}

const Tabs: React.FC<Props> = (props) => {
  const { activeTab, handleChangeTab } = props;

  const tabStyle = (tab: TabItem) => {
    return classNames(styles.title, {
      [styles.active]: activeTab === tab,
    });
  };

  const { ITEMIZED, BY_USER } = TabItem;

  const makeItem = (tab: TabItem) => ({
    name: tab,
    className: tabStyle(tab),
    onClick: () => handleChangeTab(tab),
  });

  const tabItems = [makeItem(ITEMIZED), makeItem(BY_USER)];

  return (
    <h3 className={styles.subHeader}>
      {tabItems.map(({ name, ...theRest }) => (
        <Tab name={name} {...theRest} isActive={name === activeTab} />
      ))}
    </h3>
  );
};

export default Tabs;
