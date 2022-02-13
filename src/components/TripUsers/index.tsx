import { trips } from "pages/Trips";
import { Trip } from "types/trip";
import { User } from "types/user";

const users: User[] = [
  {
    id: 1,
    username: 'Samet',
    email: ''
  },
  {
    id: 2,
    username: 'Valeria',
    email: ''
  },
  {
    id: 3,
    username: 'Ahmet',
    email: ''
  },
  {
    id: 4,
    username: 'Hande',
    email: ''
  },
  {
    id: 5,
    username: 'Senih',
    email: ''
  },
  {
    id: 6,
    username: 'Batuhan',
    email: ''
  }
]

interface Props {
  tripId: Trip['id']
}

const TripUsers: React.FC<Props> = (props) => {
  const { tripId } = props;
  const trip = trips.find(trip => trip.id === tripId);

  const tripUsers = users.filter(user => trip?.users.includes(user.id));

  return <>{tripUsers.map(user => user.username).join(', ')}</>
}

export default TripUsers;