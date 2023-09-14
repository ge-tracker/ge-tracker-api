import { handleResponseBody } from '../lib/handlers';
import { type ParamObject, parseOptions } from '../lib/query-string';
import type { AxiosInstance } from 'axios';

export interface ApiBase {
    onRequest(method: string, path: string, params: object): void;

    parseOptions(url: string, opts: ParamObject): string;
}

export default class APIBaseWrapper {
    /**
     * @type {Function|null}
     */
    static onRequestCb: Function | null = null;
    protected client: AxiosInstance;
    protected baseUrl: string = '';

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    /**
     * Callback fired before a request is made (breadcrumb logging)
     *
     * @param {String} method
     * @param {String} path
     * @param {Object} params
     */
    protected onRequest(
        method: string,
        path: string,
        params: object = {}
    ): void {
        if (typeof APIBaseWrapper.onRequestCb !== 'function') {
            return;
        }

        APIBaseWrapper.onRequestCb(method, path, params);
    }

    protected _wrapGet<T>(path: string): Promise<T> {
        this.onRequest('GET', path);

        return this.client
            .get(path)
            .then(({ data }) => data)
            .then(handleResponseBody);
    }

    protected _wrapPost<T>(path: string, params = {}): Promise<T> {
        this.onRequest('POST', path, params);

        return this.client.post(path, params).then(({ data }) => data);
    }

    protected _wrapPatch<T>(path: string, params = {}): Promise<T> {
        this.onRequest('PATCH', path, params);

        return this.client.patch(path, params).then(({ data }) => data);
    }

    protected _wrapDelete<T>(path: string): Promise<T> {
        this.onRequest('DELETE', path);

        return this.client.delete(path).then(({ data }) => data);
    }

    /**
     * Convert options to query string parameters for an endpoint
     *
     * @param url
     * @param opts
     * @return {*}
     */
    protected parseOptions(url: string, opts: ParamObject): string {
        return parseOptions(url, opts);
    }

    protected getBaseUrl(): string {
        this.baseUrl = this.client.defaults.baseURL?.replace('/api', '') ?? '';
        return this.baseUrl;
    }
}
