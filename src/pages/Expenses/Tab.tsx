import classNames from "classnames";
import { ComponentProps } from "react";
import styles from './Tab.module.scss';

interface Props extends ComponentProps<"span"> {
  name: string;
  isActive: boolean;
}

const Tab: React.FC<Props> = (props) => {
  const { name, isActive, ...theRest } = props;

  const indicatorClassName = classNames(styles.activeTabIndicator, {
    [styles.active]: isActive,
  });

  return (
    <span {...theRest}>
      <div className={indicatorClassName} />
      {name}
    </span>
  );
};

export default Tab;
