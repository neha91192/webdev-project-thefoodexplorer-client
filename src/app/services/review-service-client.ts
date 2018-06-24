export class ReviewServiceClient {
  REVIEW_URL = 'http://localhost:8080/api/review';
  FIND_ALL_URL =  'http://localhost:8080/api/review/ID';

  submitReview(review) {
    return fetch(this.REVIEW_URL, {
      method: 'post',
      body: JSON.stringify(review),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findAllReviewsForRestaurant(restaurantId) {
    return fetch(this.FIND_ALL_URL
      .replace('ID', restaurantId))
      .then(response => response.json());
  }

  deleteReview(review) {
    return fetch('http://localhost:4000/api/review/' + review.reviewId, {
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
