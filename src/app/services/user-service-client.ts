export class UserServiceClient {

  LOCAL_SERVER = 'http://localhost:8080';
  REMOTE_SERVER = 'https://thefoodexplorer-server.herokuapp.com';
  USER_URL = this.REMOTE_SERVER + '/api/user';

  findAllUsers() {
    return fetch(this.USER_URL, {
    }).then(response => response.json());
  }
  createUser(username, password, firstName, lastName, userType) {
    return fetch(this.USER_URL, {
      method: 'post',
      body: JSON.stringify({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        userType: userType
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      });
  }

  deleteUser(userId) {
    return fetch( this.USER_URL + '/' + userId, {
      method: 'delete'
    });
  }

  updateUser(user) {
    return fetch(this.USER_URL + '/' + user.userId, {
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function (response) {
        return response.json();
      });
  }

  findUserById(userId) {
    return fetch(this.USER_URL + '/' + userId)
      .then(function (response) {
        return response.json();
      });
  }

}
