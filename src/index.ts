import { createApi, GeTrackerApi } from './lib/api';
import {
    ApiKey,
    createClient as createAxios,
    DefaultOptions,
} from './lib/client';
import { getApiKeyFromEnv } from './lib/config';
import { CreateAxiosDefaults } from 'axios';

const createInstance = (
    apiKey: ApiKey,
    opts: CreateAxiosDefaults | null = null
): GeTrackerApi => {
    return createApi(createAxios(apiKey, opts));
};

const createClient = (
    apiKey: ApiKey,
    opts: CreateAxiosDefaults | null = null
) => createInstance(apiKey, opts);
const createClientFromEnv = (opts: CreateAxiosDefaults | null = null) =>
    createInstance(getApiKeyFromEnv(), opts);

export * from './types';
export * from './endpoints/types';
export { APIBaseWrapper } from './endpoints';
export type { GeTrackerApi };
export {
    createClient,
    createClientFromEnv,
    createAxios,
    DefaultOptions,
    ApiKey,
};
