[![npm version](https://badge.fury.io/js/%40getracker%2Fapi.svg)](https://badge.fury.io/js/%40getracker%2Fapi)

# ge-tracker-api

Official JavaScript API client to access [ge-tracker.com](https://www.ge-tracker.com)'s API.

## Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Env Client Example](#env-client-example)
* [Available Endpoints](#available-endpoints)

## Installation

Using NPM:

`$ npm i @getracker/api`

Using Yarn:

`$ yarn add @getracker/api`

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
const { createClientFromEnv } = require('@getracker/api')

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

## Available Endpoints

The endpoints listed below have been mapped into this library. We have published Postman API documentation that will go into more detail about each endpoint listed below: [https://www.ge-tracker.com/docs](https://www.ge-tracker.com/docs) 

* Items
* Graphs
* Flip Finder
  * Favourite Items
  * Suggested Items
  * Highest Margins
  * GE Limits
  * High Volume
  * New Items
* Money Making
  * High Alchemy
  * Item Sets
  * Decant Potions
  * Herblore Profit
  * Barrows Repair
  * Plank Making
  * Magic Tablets
  * Tan Leather
  * Store Profit
  * Blast Furnace
  * Tree Sapling
* Profit Tracker
* Leaderboard
* Market Watch
* Dashboard
* Stats
* Notifications
* Auth
* Device
* Graph
* Users
* API Status (OSBuddy)
* RS Updates

## Contributors

Special thanks to [@kylestev](https://github.com/kylestev/) for creating the [original package](https://www.npmjs.com/package/ge-tracker-api). The package has been maintained since v2.3.0 by [@gtjamesa](https://github.com/gtjamesa/).