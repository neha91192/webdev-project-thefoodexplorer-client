export class ReviewServiceClient {
  REVIEW_URL = 'http://localhost:8080/api/review';

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
}
