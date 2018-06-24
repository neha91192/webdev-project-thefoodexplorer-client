export class ReviewServiceClient {
  REVIEW_URL = 'http://localhost:8080/api/restaurant/REST_ID/review';

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
}
