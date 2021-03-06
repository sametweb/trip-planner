import classNames from "classnames";
import Button from "components/Button";
import PageHeader from "components/PageHeader";
import TripItem from "components/TripItem";
import { Trip } from "types/trip";
import styles from "./Trips.module.scss";

export const trips: Trip[] = [
  {
    id: 1,
    name: "Palms Spring",
    users: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 2,
    name: "Colorado House Shopping",
    users: [1, 2],
  },
];

interface Props {}

const Trips: React.FC<Props> = (props) => {
  const headerCellClassName = classNames(styles.headerCell, styles.nameCol);
  return (
    <>
      <PageHeader>
        <h2>Trips</h2>
        <Button title="Create" role="info" />
      </PageHeader>
      <table className={styles.tripsTable}>
        <thead>
          <tr>
            <th className={classNames(styles.headerCell, styles.nameCol)}>
              Trip Name
            </th>
            <th className={classNames(styles.headerCell, styles.userCol)}>
              Who Attended?
            </th>
            <th className={classNames(styles.headerCell, styles.costCol)}>
              Total Cost
            </th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <TripItem key={trip.id} trip={trip} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Trips;
