import {Restaurant} from './restaurant.model.client';
import {UserType} from './usertype.enum.client';

export class Owner {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  emailId: string;
  mobileNumber: string;
  userType: UserType;
  restaurant: Restaurant;
}
