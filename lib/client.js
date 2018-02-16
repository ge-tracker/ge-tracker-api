const Axios = require('axios')
const merge = require('deepmerge')

const errors = require('./errors')

const GE_TRACKER_API_URL = 'https://www.ge-tracker.com/api'

const DefaultOptions = {
  // set the base URL for all API calls made on this Axios instance
  baseURL: GE_TRACKER_API_URL,

  // set a sane default for the request TTL
  timeout: 30e3,

  // disable redirects -- API should NOT return a redirect response
  maxRedirects: 0,

  // explicitly set the default response type to JSON
  responseType: 'json',

  // specify a custom user-agent header to identify the client used
  // and for a point of contact
  headers: {
    'User-Agent': 'ge-tracker-api client <https://github.com/kylestev/ge-tracker-api>'
  }
}

function isUnauthorizedResponse(error) {
  return error.response && error.response.status === 401
}

function createAuthHeader(apiKey) {
  return {
    // Authorization header is required with a valid API key for all API calls
    Authorization: `Bearer ${apiKey}`
  }
}

function createClient(apiKey, opts = null) {
  const options = merge(DefaultOptions, opts || {})
  const instance = Axios.create(
    merge(options, { headers: createAuthHeader(apiKey) })
  )

  // add custom response interceptors
  instance.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    // intercept 401 Unauthorized responses and reject the promise chain with
    // an appropriate typed error
    if (isUnauthorizedResponse(error)) {
      return Promise.reject(new errors.InvalidApiKey())
    }
    return Promise.reject(error)
  })

  return instance
}

module.exports = {
  DefaultOptions,
  createClient
}
