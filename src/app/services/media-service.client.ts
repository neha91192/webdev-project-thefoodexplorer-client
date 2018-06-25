export class MediaServiceClient {
  REMOTE_SERVER = 'https://thefoodexplorer-server.herokuapp.com';
  LOCAL_SERVER = 'http://localhost:8080';
  MEDIA_URL = this.REMOTE_SERVER + '/api/restaurant/REST_ID/media';
  MEDIA_ONLY_URL = this.REMOTE_SERVER + '/api/media';

  findMediaForRestaurant(restaurantId) {
    return fetch(this.MEDIA_URL.replace('REST_ID', restaurantId), {
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

  saveMedia(media) {
    return fetch(this.MEDIA_URL.replace('REST_ID', media.restaurant.id), {
      method: 'post',
      body: JSON.stringify(media),
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


}
