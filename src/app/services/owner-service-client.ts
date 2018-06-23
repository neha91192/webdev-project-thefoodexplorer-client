export class OwnerServiceClient {
  OWNER_URL = 'http://localhost:8080/api/owner';

  register(owner) {
    return fetch(this.OWNER_URL, {
      method: 'post',
      body: JSON.stringify(owner),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response.status === 400) {
        return null;
      } else {
        response.json();
      }
    });
  }
}

