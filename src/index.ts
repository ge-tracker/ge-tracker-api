import { createApi, GeTrackerApi } from "./lib/api";
import { ApiKey, createClient as createAxios, DefaultOptions } from "./lib/client";
import { getApiKeyFromEnv } from "./lib/config";
import { AxiosRequestConfig } from "axios";

export * from "./types";

const createInstance = (apiKey: ApiKey, opts: AxiosRequestConfig | null = null): GeTrackerApi => {
    return createApi(createAxios(apiKey, opts));
};

const createClient = (apiKey: ApiKey, opts: AxiosRequestConfig | null = null) => createInstance(apiKey, opts);
const createClientFromEnv = (opts: AxiosRequestConfig | null = null) => createInstance(getApiKeyFromEnv(), opts);

export {
    createClient,
    createClientFromEnv,
    DefaultOptions,
};

export type {
    GeTrackerApi
};
