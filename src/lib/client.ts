import Axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type CreateAxiosDefaults,
} from 'axios';
import merge from 'deepmerge';
import * as errors from './errors';

const GE_TRACKER_API_URL = 'https://www.ge-tracker.com/api';
const GE_TRACKER_API_VERSION = 'v2.1';

export type ApiKey = string | null | undefined;

const DefaultOptions: CreateAxiosDefaults = {
  // set the base URL for all API calls made on this Axios instance
  baseURL: GE_TRACKER_API_URL,

  // set a sane default for the request TTL
  timeout: 30e3,

  // disable redirects -- API should NOT return a redirect response
  maxRedirects: 0,

  // explicitly set the default response type to JSON
  responseType: 'json',

  // set api client headers
  headers: {
    'X-Api-Client': 'ge-tracker-api client v6.3.2-5',
    Accept: `application/x.getracker.${GE_TRACKER_API_VERSION}+json`,
  },
};

function isUnauthorizedResponse(error: AxiosError) {
  return error.response && error.response.status === 401;
}

function createAuthHeader(apiKey: ApiKey): object {
  // if (apiKey === null) {
  //     return {};
  // }

  return {
    // Authorization header is required with a valid API key for all API calls
    Authorization: `Bearer ${apiKey}`,
  };
}

/**
 * Wrap URLs to support DMM endpoints
 *
 * @param dmmMode
 * @param request
 */
function applyDmmParameter(
  dmmMode: boolean,
  request: AxiosRequestConfig,
): string | undefined {
  const path = request.url;

  if (!dmmMode || path === undefined || path.includes('dmm=1')) {
    return path;
  }

  return path.includes('?') ? path + '&dmm=1' : path + '?dmm=1';
}

export interface GeTrackerAxios extends AxiosInstance {
  dmm(enabled: boolean): void;
}

/**
 * Create a new Axios instance
 *
 * @param apiKey
 * @param opts
 */
function createClient(
  apiKey: ApiKey,
  opts: CreateAxiosDefaults | null = null,
): GeTrackerAxios {
  const options = merge(DefaultOptions, opts || {});
  const instance = Axios.create(
    merge(options, {headers: createAuthHeader(apiKey)}),
  );

  let dmmMode: boolean = false;

  // add custom response interceptors
  instance.interceptors.response.use(
    response => {
      return response;
    },
    (error: AxiosError) => {
      // intercept 401 Unauthorized responses and reject the promise chain with
      // an appropriate typed error
      if (isUnauthorizedResponse(error)) {
        return Promise.reject(new errors.InvalidApiKey());
      }

      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use(request => {
    request.url = applyDmmParameter(dmmMode, request);
    return request;
  });

  // @ts-ignore
  function dmm(enabled: boolean = true): void {
    dmmMode = enabled;
  }

  // @ts-ignore
  return instance;
}

export {DefaultOptions, createClient, GE_TRACKER_API_URL};
