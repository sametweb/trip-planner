import classNames from "classnames";
import styles from './Tab.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  isActive: boolean;
}

const Tab: React.FC<Props> = (props) => {
  const { name, isActive, ...theRest } = props;

  const indicatorClassName = classNames(styles.activeTabIndicator, {
    [styles.active]: isActive,
  });

  return (
    <div {...theRest}>
      <div className={indicatorClassName} />
      {name}
    </div>
  );
};

export default Tab;
