import { useState } from "react";
import styles from "./Expenses.module.scss";
import Tab from "./Tab";

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
    if (activeTab === tab) return `${styles.title} ${styles.active}`;
    return styles.title;
  };

  const subHeaderItems = [
    {
      name: TabItem.ITEMIZED,
      className: tabStyle(TabItem.ITEMIZED),
      onClick: () => handleChangeTab(TabItem.ITEMIZED),
    },
    {
      name: TabItem.BY_USER,
      className: tabStyle(TabItem.BY_USER),
      onClick: () => handleChangeTab(TabItem.BY_USER),
    },
  ];

  return (
    <>
      <h3 className={styles.subHeader}>
        {subHeaderItems.map(({ name, ...theRest }) => (
          <Tab name={name} {...theRest} isActive={name === activeTab} />
        ))}
      </h3>
    </>
  );
};

export default Tabs;
