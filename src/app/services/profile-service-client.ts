export class ProfileServiceClient {
  PROFILE_URL = 'http://localhost:8080/api/ROLE/profile';

  profile(role) {
    return fetch(this.PROFILE_URL.replace('ROLE', role), {
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
