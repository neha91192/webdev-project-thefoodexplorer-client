export class LoginServiceClient {
  REMOTE_SERVER = 'https://thefoodexplorer-server.herokuapp.com';
  LOCAL_SERVER = 'http://localhost:8080';
  LOGIN_URL =  this.REMOTE_SERVER + '/api/login';
  SOCIAL_LOGIN_URL =  this.REMOTE_SERVER + '/api/socialLogin';
  LOGOUT_URL = this.REMOTE_SERVER + '/api/logout';

  login(credentials) {
    return fetch(this.LOGIN_URL, {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response.status === 401) {
        return null;
      } else {
        return response.json();
      }
    });
  }
  logout() {
    return fetch(this.LOGOUT_URL, {
      method: 'post',
      credentials: 'include'
    });
  }

  socialLogin(user) {
    return fetch(this.SOCIAL_LOGIN_URL, {
      method: 'post',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
        return response.json();
    });
  }
}
