export class ProfileServiceClient {
  PROFILE_URL = 'http://localhost:8080/api/profile';

  fetchProfile() {
    return fetch(this.PROFILE_URL, {
      credentials: 'include'
    }).then(response => {
      if (response.status === 401) {
        return null;
      } else {
        return response.json();
      }
    });
  }
}
