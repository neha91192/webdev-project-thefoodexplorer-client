export class ZomatoApiServiceClient {

  API_KEY = '8cde1fa8bdef3553e358b75b2144cda0';
  API_URL =
    'https://developers.zomato.com/api/v2.1/search?entity_type=ENTITY_TYPE&entity_id=ENTITY_VALUE&q=SEARCH_KEYWORD' +
    '&category=CATEGORY&cuisines=CUISINE';

  CATEGORY_API = 'https://developers.zomato.com/api/v2.1/categories';
  LOCATION_API = 'https://developers.zomato.com/api/v2.1/cities';
  CUISINE_API = 'https://developers.zomato.com/api/v2.1/cuisines?city_id=CITY_ID';
  LOCATION_DETAILS = 'https://developers.zomato.com/api/v2.1/location_details?entity_id=LOCATION_ID&entity_type=city'

  findRestaurants(entityType, entityValue, searchKeyword, category, cuisine) {
      return fetch(this.API_URL.replace('ENTITY_TYPE', entityType)
        .replace('ENTITY_VALUE', entityValue)
          .replace('CATEGORY', category).replace('SEARCH_KEYWORD', searchKeyword)
          .replace('CUISINE', cuisine),
        {
          headers: {
            'user-key': this.API_KEY
          }
        })
        .then(response => response.json());
  }

  fetchCategories() {
    return fetch(this.CATEGORY_API, {
      headers: {
        'user-key': this.API_KEY
      }
    })
      .then(response => response.json());
  }

  fetchLocation(keyword) {
    return fetch(this.LOCATION_API + '?q=' + keyword, {
      headers: {
        'user-key': this.API_KEY
      }
    }).then(response => response.json());
  }

  fetchPopularCuisines(locationId) {
    return fetch(this.CUISINE_API.replace('CITY_ID', locationId), {
      headers: {
        'user-key': this.API_KEY
      }
    })
      .then(response => response.json());
  }

  fetchPopularCuisinesForCity(locationId) {
    return fetch(this.LOCATION_DETAILS.replace('LOCATION_ID', locationId),
      {
        headers: {
          'user-key': this.API_KEY
        }
      }).then(response => response.json());
  }

}
