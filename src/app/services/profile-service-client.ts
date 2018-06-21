export class ProfileServiceClient {
  PROFILE_URL = 'http://localhost:8080/api/ROLE/profile';

  fetchProfile(role) {
    return fetch(this.PROFILE_URL.replace('ROLE', role), {
      credentials: 'include'
    }).then(response => response.json());
  }
}
