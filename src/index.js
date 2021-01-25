import {createApi} from "./lib/api";
import {createClient as createAxios} from "./lib/client";
import {getApiKeyFromEnv} from "./lib/config";

const createInstance = (apiKey, opts = null) => {
    const bugsnag = (opts.hasOwnProperty('bugsnag')) ? opts.bugsnag : null;
    return createApi(createAxios(apiKey, opts), bugsnag);
};

const createClient = (apiKey, opts = null) => createInstance(apiKey, opts);
const createClientFromEnv = (opts = null) => createInstance(getApiKeyFromEnv(), opts);

export {
    createClient,
    createClientFromEnv,
};
