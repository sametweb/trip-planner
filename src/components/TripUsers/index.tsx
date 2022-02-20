import User from "components/User";
import { trips } from "pages/Trips";
import type { Trip } from "types/trip";
import type { User as UserType } from "types/user";

export const users: UserType[] = [
  {
    id: 1,
    username: 'Samet',
    email: '',
    picture: 'https://pbs.twimg.com/profile_images/1456130946277597195/Ohm5lgyL_400x400.jpg'
  },
  {
    id: 2,
    username: 'Valeria',
    email: '',
    picture: 'https://bbballoonstudio.com/about-us.jpg'
  },
  {
    id: 3,
    username: 'Ahmet',
    email: '',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KKYh8XJQhodSpbRJUoq9JZHpIfoclDQEig&usqp=CAU'
  },
  {
    id: 4,
    username: 'Hande',
    email: '',
    picture: 'https://www.tavsiyeediyorum.com/timage.php?u=28820&dateline=1501257133&type=profile'
  },
  {
    id: 5,
    username: 'Senih',
    email: '',
    picture: 'https://avatars.githubusercontent.com/u/35286437?u=ddc0ab0b84af10b42ebbe440db2aece458272b8e&v=4'
  },
  {
    id: 6,
    username: 'Batuhan',
    email: '',
    picture: 'https://avatars.githubusercontent.com/u/54727727?v=4'
  }
]

interface Props {
  tripId: Trip['id']
}

const TripUsers: React.FC<Props> = (props) => {
  const { tripId } = props;
  const trip = trips.find(trip => trip.id === tripId);

  const tripUsers = users.filter(user => trip?.users.includes(user.id));

  return <>{tripUsers.map(user => <User key={user.id} user={user} avatarOnly />)}</>
}

export default TripUsers;