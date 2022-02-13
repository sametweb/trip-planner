import Button from "components/Button";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Trip Planner</h1>
      <ul className={styles.nav}>
        <Link to="/" className={styles.navItem}>
          <li>Home</li>
        </Link>
        <Link to="/trips" className={styles.navItem}>
          <li>My Trips</li>
        </Link>
      </ul>
      <div className={styles.auth}>
        <Button title="Login" size="lg" />
      </div>
    </div>
  );
};

export default Header;
