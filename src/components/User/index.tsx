import styles from './User.module.scss';
import type { User as UserType } from "types/user";

interface Props {
  user: UserType;
}

const User: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <div className={styles.user}>
      <div className={styles.label}>
        <img className={styles.avatar} src={user.picture} alt={user.username} />
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default User;
