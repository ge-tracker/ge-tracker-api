import {
  AxiosError,
  type AxiosAdapter,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import {createClient} from '../index';

/** Axios adapter that records each request and answers with `body` and `status` */
export function recordingAdapter(body: unknown = {data: []}, status = 200) {
  const requests: InternalAxiosRequestConfig[] = [];
  const adapter: AxiosAdapter = async config => {
    requests.push(config);
    const response: AxiosResponse = {
      data: body,
      status,
      statusText: '',
      headers: {},
      config,
    };

    // rejects as axios's own adapters do via settle()
    if (config.validateStatus && !config.validateStatus(status)) {
      throw new AxiosError(
        `Request failed with status code ${status}`,
        AxiosError.ERR_BAD_REQUEST,
        config,
        null,
        response,
      );
    }

    return response;
  };

  return {adapter, requests, urls: () => requests.map(r => r.url)};
}

export function recordingClient(body?: unknown, status?: number) {
  const {adapter, requests, urls} = recordingAdapter(body, status);
  return {api: createClient('key', {adapter}), requests, urls};
}
