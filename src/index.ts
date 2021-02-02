import {createApi, GeTrackerApi} from "./lib/api";
import {createClient as createAxios} from "./lib/client";
import {getApiKeyFromEnv} from "./lib/config";

const createInstance = (apiKey: string, opts = null): GeTrackerApi => {
    return createApi(createAxios(apiKey, opts));
};

const createClient = (apiKey: string, opts = null) => createInstance(apiKey, opts);
const createClientFromEnv = (opts = null) => createInstance(getApiKeyFromEnv(), opts);

export {
    createClient,
    createClientFromEnv,
};
