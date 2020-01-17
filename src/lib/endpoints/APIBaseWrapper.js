import { handleResponseBody } from "../handlers";
import { parseOptions } from "../query-string";

export default class APIBaseWrapper {
    constructor(client, bugsnag) {
        this.client = client;
        this.bugsnag = bugsnag;
    }

    _leaveBreadcrumb(method, path, params = {}) {
        if (this.bugsnag && typeof this.bugsnag.leaveBreadcrumb === 'function') {
            const crumb = JSON.stringify(params);
            const urlPath = (path.substr(0, 1) === '/') ? path : `/${path}`;
            const reqName = `${method} ${urlPath}`;

            this.bugsnag.leaveBreadcrumb('API Request', {
                type: 'manual',
                url: reqName.substr(0, 140),
                params: crumb.substr(0, 140)
            })
        }
    }

    _wrapGet(path) {
        this._leaveBreadcrumb('GET', path);

        return this.client.get(path)
            .then(({data}) => data)
            .then(handleResponseBody)
    }

    _wrapPost(path, params = {}) {
        this._leaveBreadcrumb('POST', path, params);

        return this.client.post(path, params)
            .then(({data}) => data);
    }

    _wrapDelete(path) {
        this._leaveBreadcrumb('DELETE', path);

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
