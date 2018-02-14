# ge-tracker-api

Unofficial API client to access [ge-tracker.com](https://ge-tracker.com)'s API.

## Installation

Using NPM:

`$ npm i ge-tracker-api`

Using Yarn:

`$ yarn add ge-tracker-api`

## Usage

GE-Tracker requires a valid API key in order to consume their API endpoints.
Thus, if you wish to use this package, you must have an API key.

There are two functions exposed by this module:

`createClient(apiKey, opts = null)` and `createClientFromEnv(opts = null)`.

Calling `createClient` requires an API key to be passed in order to initialize
the underlying Axios instance with your API key for all subsequent requests.

Calling `createClientFromEnv` will attempt to find the environment variable
named `GE_TRACKER_API_KEY` and use that as the API key.

### Env Client Example

```javascript
// example.js
const { createClientFromEnv } = require('ge-tracker-api')

const client = createClientFromEnv()

client.Items.getItem(1050)
  .then(item => {
    console.log(`${item.name} has ${item.buyingQuantity} buy offers and is 
    buying for ~${item.buying}`)
  })

```

How you set the environment variable will depend on your development
environment.

For bash, you can prepend the environment variable before calling a script on
your path like so:

`$ GE_TRACKER_API_KEY=ajosf...928h4tr node example.js`

Please note that prepending your API key before a command may record your
sensitive API token to your bash or shell history.

A better approach is to use something like
[dotenv](https://www.npmjs.com/package/dotenv). Take care to ensure that your
environment file used by that library is added to your `.gitignore` file 😉
