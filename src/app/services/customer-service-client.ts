export class CustomerServiceClient {
  LOCAL_SERVER = 'http://localhost:8080';
  CUSTOMER_URL = this.LOCAL_SERVER + '/api/customer';
  SEARCH_URL = this.LOCAL_SERVER + '/api/customer?firstName=FIRSTNAME&lastName=LASTNAME';
  FOLLOW_URL = this.LOCAL_SERVER + '/api/follow/USERID';
  FIND_FOLLOWERS = this.LOCAL_SERVER + '/api/follower';
  FIND_FOLLOWING = this.LOCAL_SERVER + '/api/following';

  findFollowers() {
    return fetch(this.FIND_FOLLOWERS, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findFollowing() {
    return fetch(this.FIND_FOLLOWING, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  unfollow(userId) {
    return fetch( this.FOLLOW_URL.replace('USERID', userId), {
      method: 'put',
      credentials: 'include'
    });
  }
  updateUser(customer) {
    return fetch(this.CUSTOMER_URL + '/' + customer.userId, {
      credentials: 'include',
      method: 'put',
      body: JSON.stringify(customer),
      headers: {
        'content-type': 'application/json'
      }

    })
      .then(response => {
        response.json(); });
  }

  updateUserPassword(customer) {
    return fetch(this.CUSTOMER_URL + '/password/' + customer.userId, {
      credentials: 'include',
      method: 'put',
      body: JSON.stringify(customer),
      headers: {
        'content-type': 'application/json'
      }

    })
      .then(response => {
        response.json(); });
  }

  searchUsers(firstName, lastName) {
    return fetch(this.SEARCH_URL
      .replace('FIRSTNAME', firstName)
      .replace('LASTNAME', lastName), {
    }).then(response => response.json());
  }

  followUsers(id) {
    return fetch(this.FOLLOW_URL.replace('USERID', id), {
      method: 'post',
      credentials: 'include'
    }).then(response => response.json());
  }

  findUser(userId) {
    return fetch(this.CUSTOMER_URL + '/' + userId).then(response => response.json());
  }
}
