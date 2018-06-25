import {UserType} from './usertype.enum.client';
import {Review} from './review.model.client';

export class User {
  userId: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: UserType;
  dateOfBirth: string;
  city: string;
  mobileNumber: string;
  emailId: string;
  country: string;
  street: string;
  pincode: string;
  state: string;
  bio: string;
  reviews: [Review];
}
