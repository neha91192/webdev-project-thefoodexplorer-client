export class ProfileServiceClient {

  LOCAL_SERVER = 'http://localhost:8080';
  REMOTE_SERVER = 'https://thefoodexplorer-server.herokuapp.com';
  PROFILE_URL = this.REMOTE_SERVER + '/api/profile';

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
