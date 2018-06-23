export class LoginServiceClient {
  LOGIN_URL = 'http://localhost:8080/api/login';
  LOGOUT_URL = 'http://localhost:8080/api/logout';

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
}
