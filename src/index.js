import {createApi} from  "./lib/api";
import {createClient as createAxios} from "./lib/client";
import {getApiKeyFromEnv} from "./lib/config";

function createInstance(apiKey, opts = null) {
    return createApi(createAxios(apiKey, opts));
}

const createClient = (apiKey, opts = null) => createInstance(apiKey, opts);
const createClientFromEnv = (opts = null) => createInstance(getApiKeyFromEnv(), opts);

export {
    createClient,
    createClientFromEnv,
};