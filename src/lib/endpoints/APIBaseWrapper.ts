import {handleResponseBody} from "../handlers";
import {ParamObject, parseOptions} from "../query-string";
import {AxiosInstance} from "axios";

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
    onRequest(method: string, path: string, params: object = {}): void {
        if (typeof APIBaseWrapper.onRequestCb !== 'function') {
            return;
        }

        APIBaseWrapper.onRequestCb(method, path, params);
    }

    _wrapGet(path: string) {
        this.onRequest('GET', path);

        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    _wrapPost(path: string, params = {}) {
        this.onRequest('POST', path, params);

        return this.client.post(path, params)
            .then(({data}) => data);
    }

    _wrapPatch(path: string, params = {}) {
        this.onRequest('PATCH', path, params);

        return this.client.patch(path, params)
            .then(({data}) => data);
    }

    _wrapDelete(path: string) {
        this.onRequest('DELETE', path);

        return this.client.delete(path)
            .then(({data}) => data);
    }

    /**
     * Convert options to query string parameters for an endpoint
     *
     * @param url
     * @param opts
     * @return {*}
     */
    parseOptions(url: string, opts: ParamObject): string {
        return parseOptions(url, opts);
    }
}
