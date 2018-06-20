export class RegistrationServiceClient {
  REGISTRATION_URL = 'http://localhost:8080/api/register';

  register(user) {
    return fetch(this.REGISTRATION_URL, {
      method: 'post',
      body: JSON.stringify(user),
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
