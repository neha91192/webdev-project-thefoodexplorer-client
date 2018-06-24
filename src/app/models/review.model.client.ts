import {User} from '../models/user.model.client';
import {Restaurant} from '../models/restaurant.model.client';

export class Review {
  reviewId: number;
  age: number;
  content: string;
  likes: number;
  rating: number;
  user: User;
  restaurant: Restaurant;
}
