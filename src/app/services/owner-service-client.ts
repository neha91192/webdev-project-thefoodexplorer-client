export class OwnerServiceClient {


  LOCAL_SERVER = 'http://localhost:8080';
  REMOTE_SERVER = 'https://thefoodexplorer-server.herokuapp.com';
  OWNER_URL = this.REMOTE_SERVER + '/api/owner/RESTID';
  UPDATE_OWNER_URL = this.REMOTE_SERVER + '/api/owner';
  All_OWNERS_URL = this.REMOTE_SERVER + '/api/owner';
  USER_URL = this.REMOTE_SERVER + '/api/user/OWNERID';
  DELETE_OWNER_URL = this.REMOTE_SERVER + '/api/owner/OWNERID';


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
      } else if (response.status === 409) {
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

  findAllOwners() {
    return fetch(this.All_OWNERS_URL, {
    }).then(response => response.json());
  }

  deleteOwner(ownerId) {
    return fetch( this.USER_URL.replace('OWNERID', ownerId), {
      method: 'delete'
    });
  }






}

