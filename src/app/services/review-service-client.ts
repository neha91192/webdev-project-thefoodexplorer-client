export class ReviewServiceClient {
  REVIEW_URL = 'http://localhost:8080/api/restaurant/REST_ID/review';
  REVIEW_ONLY_URL = 'http://localhost:8080/api/review';
  FIND_ALL_URL =  'http://localhost:8080/api/review/ID';
  FIND_REVIEWS_FOR_RESTAURANT =  'http://localhost:8080/api/restaurant/REST_ID/review';


  submitReview(review) {
    return fetch(this.REVIEW_URL.replace('REST_ID', review.restaurant.restaurantId), {
      method: 'post',
      body: JSON.stringify(review),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
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
      credentials: 'include',
      body: JSON.stringify(review),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findAllReviewsForUser(userId) {
    return fetch(this.FIND_ALL_URL
      .replace('ID', userId))
      .then(response => response.json());
  }
}
