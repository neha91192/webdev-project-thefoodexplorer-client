export class ReviewServiceClient {
  LOCAL_SERVER = 'http://localhost:8080';
  REMOTE_SERVER = 'https://thefoodexplorer-server.herokuapp.com';

  REVIEW_URL = this.REMOTE_SERVER + '/api/restaurant/REST_ID/review';
  REVIEW_ONLY_URL = this.REMOTE_SERVER + '/api/review';
  FIND_ALL_URL =  this.REMOTE_SERVER + '/api/review/ID';
  FIND_REVIEWS_FOR_RESTAURANT =  this.REMOTE_SERVER + '/api/restaurant/REST_ID/review';


  submitReview(review) {
    return fetch(this.REVIEW_URL.replace('REST_ID', review.restaurant.restaurantId), {
      method: 'post',
      body: JSON.stringify(review),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
         'accept': 'application/json'
      }
    }).then((response) => {
      if (response.status === 401) {
        return null;
      } else {
        return response.json();
      }
    });

  }

  findAllReviewsForRestaurant(restaurantId) {
    return fetch(this.FIND_REVIEWS_FOR_RESTAURANT.replace('REST_ID', restaurantId))
      .then(response => response.json());
  }

  deleteReview(review) {
    return fetch(this.REVIEW_ONLY_URL + review.reviewId, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findAllReviewsForUser(userId) {
    return fetch(this.FIND_ALL_URL
      .replace('ID', userId))
      .then(response => response.json());
  }
}
