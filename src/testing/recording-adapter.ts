import type {AxiosAdapter, InternalAxiosRequestConfig} from 'axios';
import {createClient} from '../index';

/** Axios adapter that records each request and answers `{data: []}` */
export function recordingAdapter() {
  const requests: InternalAxiosRequestConfig[] = [];
  const adapter: AxiosAdapter = async config => {
    requests.push(config);
    return {
      data: {data: []},
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
    };
  };

  return {adapter, requests, urls: () => requests.map(r => r.url)};
}

export function recordingClient() {
  const {adapter, requests, urls} = recordingAdapter();
  return {api: createClient('key', {adapter}), requests, urls};
}
