import Axios, {
  AxiosError,
  type AxiosInstance,
  type CreateAxiosDefaults,
} from 'axios';
import merge from 'deepmerge';
import type {GameMode} from '../types';
import * as errors from './errors';
import {withGameMode} from './game-mode';

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
    'X-Api-Client': 'ge-tracker-api client v6.5.1',
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

export interface GeTrackerAxios extends AxiosInstance {
  gameMode(mode: GameMode): void;
  /** @deprecated Use `gameMode('event')`, or `gameMode('main')` to switch back */
  dmm(enabled?: boolean): void;
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

  let mode: GameMode = 'main';

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

  // synchronous: reads the mode when get()/post() is called, not a microtask later
  instance.interceptors.request.use(
    request => {
      if (request.url !== undefined) {
        request.url = withGameMode(request.url, mode);
      }
      return request;
    },
    null,
    {synchronous: true},
  );

  return Object.assign(instance, {
    gameMode(next: GameMode): void {
      mode = next;
    },
    dmm(enabled: boolean = true): void {
      mode = enabled ? 'event' : 'main';
    },
  });
}

export {DefaultOptions, createClient, GE_TRACKER_API_URL};
