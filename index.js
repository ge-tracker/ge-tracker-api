const {createApi} = require('./lib/api');
const {createClient} = require('./lib/client');
const {getApiKeyFromEnv} = require('./lib/config');

function createInstance(apiKey, opts = null) {
    return createApi(createClient(apiKey, opts));
}

module.exports = {
    createClient: (apiKey, opts = null) => createInstance(apiKey, opts),
    createClientFromEnv: (opts = null) => createInstance(getApiKeyFromEnv(), opts)
};