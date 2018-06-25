export class OwnerServiceClient {
  OWNER_URL = 'http://localhost:8080/api/owner/RESTID';
  UPDATE_OWNER_URL = 'http://localhost:8080/api/owner';

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
  updateOwner(owner) {
    return fetch(this.UPDATE_OWNER_URL + '/' + owner.userId, {
      method: 'put',
      body: JSON.stringify(owner),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function (response) {
        return response.json();
      });
  }






}

