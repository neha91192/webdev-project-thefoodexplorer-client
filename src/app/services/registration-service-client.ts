export class RegistrationServiceClient {
  REGISTRATION_URL = 'http://localhost:8080/api/register';

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
