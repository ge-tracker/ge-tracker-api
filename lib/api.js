function handleResponseBody(body) {
  if (!('data' in body)) {
    return body
  }

  return body.data
}

class UserWrapper {
  constructor (client) {
    this.client = client
  }

  getById (userId) {
    return this.client.get(`users/${userId}`)
      .then(({ data }) => data.data)
  }

  search (query) {
    return this.client.get(`users/search/${query}`)
      .then(({ data }) => data.data)
  }

  getAuthenticateUser () {
    return this.client.get('users/me')
      .then(({ data }) => data.data)
  }
}

class ItemsWrapper {
  constructor (client) {
    this.client = client
  }

  _wrapGet (path) {
    return this.client.get(path)
      .then(({ data }) => data)
      .then(handleResponseBody)
  }

  getAllItems () {
    return this._wrapGet('items')
  }

  getItem (itemId) {
    return this._wrapGet(`items/${itemId}`)
  }

  getItems (...itemIds) {
    return this._wrapGet(`items/multi/${itemIds.join(',')}`)
  }
}

module.exports = {
  createApi: client => {
    return {
      Items: new ItemsWrapper(client),
      Users: new UserWrapper(client)
    }
  }
}
