export class CustomerServiceClient {
    CUSTOMER_URL = 'http://localhost:8080/api/customer';

  updateUser(customer) {
    return fetch(this.CUSTOMER_URL + '/' + customer.userId, {
      credentials: 'include',
      method: 'put',
      body: JSON.stringify(customer),
      headers: {
        'content-type': 'application/json'
      }

    })
      .then(response => {
        response.json(); });
  }

  updateUserPassword(customer) {
    return fetch(this.CUSTOMER_URL + '/password/' + customer.userId, {
      credentials: 'include',
      method: 'put',
      body: JSON.stringify(customer),
      headers: {
        'content-type': 'application/json'
      }

    })
      .then(response => {
        response.json(); });
  }
}
