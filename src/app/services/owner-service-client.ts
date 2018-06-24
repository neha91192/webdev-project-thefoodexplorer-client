export class OwnerServiceClient {
  OWNER_URL = 'http://localhost:8080/api/owner/RESTID';

  register(owner) {
    return fetch(this.OWNER_URL.replace('RESTID', owner.restaurant.restaurantId), {
      method: 'post',
      body: JSON.stringify(owner),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response.status === 400) {
        return null;
      } else if (response.status === 409){
        return 409;
      } else {
        response.json();
      }
    });
  }
}

