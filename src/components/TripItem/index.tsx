import { expenses } from "pages/Expenses";
import styles from "./TripItem.module.scss";
import currency from "utils/currency";
import type { Trip } from "types/trip";
import TripUsers from "components/TripUsers";
import { Link } from "react-router-dom";

interface Props {
  trip: Trip;
}

const TripItem: React.FC<Props> = (props) => {
  const { trip } = props;
  const totalCost = expenses
    .filter((e) => e.tripId === trip.id)
    .reduce((total, e) => total + e.amount, 0);

  return (
      <tr className={styles.tripItem}>
        <td className={styles.name}><Link to={`${trip.id}`}>{trip.name}</Link></td>
        <td className={styles.users}><TripUsers tripId={trip.id} /></td>
        <td className={styles.cost}>{currency(totalCost)}</td>
      </tr>
  );
};

export default TripItem;
