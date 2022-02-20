import { expenses } from "pages/Expenses";
import styles from "./TripItem.module.scss";
import currency from "utils/currency";
import type { Trip } from "types/trip";
import TripUsers from "components/TripUsers";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface Props {
  trip: Trip;
}

const makeCellClassName = (cls: string) => classNames(styles.cell, cls);

const TripItem: React.FC<Props> = (props) => {
  const { trip } = props;
  const totalCost = expenses
    .filter((e) => e.tripId === trip.id)
    .reduce((total, e) => total + e.amount, 0);

  return (
    <tr className={styles.tripItem}>
      <td className={makeCellClassName(styles.name)}>
        <Link to={`${trip.id}`}>{trip.name}</Link>
      </td>
      <td className={makeCellClassName(styles.users)}>
        <TripUsers tripId={trip.id} />
      </td>
      <td className={makeCellClassName(styles.cost)}>
        <h4>{currency(totalCost)}</h4>
      </td>
    </tr>
  );
};

export default TripItem;
