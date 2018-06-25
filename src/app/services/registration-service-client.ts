export class RegistrationServiceClient {

  LOCAL_SERVER = 'http://localhost:8080';
  REMOTE_SERVER = 'https://thefoodexplorer-server.herokuapp.com';
  REGISTRATION_URL = this.REMOTE_SERVER + '/api/register';

  register(user) {
    return fetch(this.REGISTRATION_URL, {
      method: 'post',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response.status === 409) {
        return null;
      } else {
        return response.json();
      }
    });
  }
}
