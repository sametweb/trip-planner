import Button from "components/Button";
import styles from "./Header.module.css";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Trip Planner</h1>
      <ul className={styles.nav}>
        <a href="#" className={styles.navItem}>
          <li>Home</li>
        </a>
        <a href="#" className={styles.navItem}>
          <li>My Trips</li>
        </a>
      </ul>
      <div className={styles.auth}>
        <Button title="Login" size="lg" />
      </div>
    </div>
  );
};

export default Header;
