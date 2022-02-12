import { Trip } from "./trip";
import { User } from "./user";

export interface Expense {
  id: number;
  tripId: Trip["id"];
  userId: User["id"];
  title: string;
  amount: number;
  date: Date;
}
