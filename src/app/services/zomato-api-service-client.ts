export class ZomatoApiServiceClient {

  API_KEY = '8cde1fa8bdef3553e358b75b2144cda0';
  API_URL = 'https://developers.zomato.com/api/v2.1/search?entity_type=ENTITY_TYPE&q=ENTITY_VALUE&q=SEARCH_KEYWORD&category=CATEGORY';

  CATEGORY_API = 'https://developers.zomato.com/api/v2.1/categories';

  findRestaurants(entityType, entityValue, searchKeyword, category) {
      return fetch(this.API_URL.replace('ENTITY_TYPE', entityType)
        .replace('ENTITY_VALUE', entityValue)
          .replace('CATEGORY', category).replace('SEARCH_KEYWORD', searchKeyword),
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

}
