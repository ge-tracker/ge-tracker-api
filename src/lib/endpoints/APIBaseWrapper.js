import { handleResponseBody } from "../handlers";
import { parseOptions } from "../query-string";

export default class APIBaseWrapper {
    /**
     * @type {Function|null}
     */
    static onRequestCb = null;

    constructor(client) {
        this.client = client;
    }

    /**
     * Callback fired before a request is made (breadcrumb logging)
     *
     * @param {String} method
     * @param {String} path
     * @param {Object} params
     */
    onRequest(method, path, params = {}) {
        if (typeof APIBaseWrapper.onRequestCb !== 'function') {
            return;
        }

        APIBaseWrapper.onRequestCb(method, path, params);
    }

    _wrapGet(path) {
        this.onRequest('GET', path);

        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    _wrapPost(path, params = {}) {
        this.onRequest('POST', path, params);

        return this.client.post(path, params)
            .then(({data}) => data);
    }

    _wrapPatch(path, params = {}) {
        this.onRequest('PATCH', path, params);

        return this.client.patch(path, params)
            .then(({data}) => data);
    }

    _wrapDelete(path) {
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
    parseOptions(url, opts) {
        return parseOptions(url, opts);
    }
}
