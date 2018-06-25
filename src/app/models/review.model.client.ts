import {User} from '../models/user.model.client';
import {Restaurant} from '../models/restaurant.model.client';

export class Review {
  reviewId: number;
  content: string;
  rating: number;
  restaurant: Restaurant;
}
