import type {AxiosAdapter, InternalAxiosRequestConfig} from 'axios';
import {createClient} from '../index';

/** Axios adapter that records each request and answers with `body` */
export function recordingAdapter(body: unknown = {data: []}) {
  const requests: InternalAxiosRequestConfig[] = [];
  const adapter: AxiosAdapter = async config => {
    requests.push(config);
    return {
      data: body,
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
    };
  };

  return {adapter, requests, urls: () => requests.map(r => r.url)};
}

export function recordingClient(body?: unknown) {
  const {adapter, requests, urls} = recordingAdapter(body);
  return {api: createClient('key', {adapter}), requests, urls};
}
