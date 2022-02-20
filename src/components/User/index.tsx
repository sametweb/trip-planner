import styles from './User.module.scss';
import type { User as UserType } from "types/user";
import classNames from 'classnames';

interface Props {
  user: UserType;
  avatarOnly?: boolean;
  nameOnly?: boolean;
  large?: boolean;
}

const User: React.FC<Props> = (props) => {
  const { user, avatarOnly, nameOnly, large } = props;

  if(nameOnly) {
    return <>{user.username}</>;
  } 

  const className = classNames(styles.user, {
    [styles.stacked]: avatarOnly,
    [styles.large]: large,
  });
  
  // avatarOnly ? styles.user + " " + styles.stacked : styles.user;

  return (
    <div className={className}>
      <div className={styles.label}>
        <img className={styles.avatar} src={user.picture} alt={user.username} title={user.username} />
        {!avatarOnly && <span className={styles.username}>{user.username}</span>}
      </div>
    </div>
  );
};

export default User;
