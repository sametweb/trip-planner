import styles from "./PageHeader.module.css";

interface Props {}

const PageHeader: React.FC<Props> = (props) => {
  const { children } = props;

  return <div className={styles.header}>{children}</div>;
};

export default PageHeader;
