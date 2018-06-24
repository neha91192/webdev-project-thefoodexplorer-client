import {Restaurant} from './restaurant.model.client';
import {UserType} from './usertype.enum.client';

export class Owner {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  userType: UserType;
  restaurant: Restaurant;
}
