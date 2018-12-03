import {handleResponseBody} from "../handlers";

export default class APIBaseWrapper {
    constructor(client, bugsnag) {
        this.client = client;
        this.bugsnag = bugsnag;
    }

    _leaveBreadcrumb(method, path, params = {}) {
        if (this.bugsnag && typeof this.bugsnag.leaveBreadcrumb === 'function') {
            const crumb = JSON.stringify(params);
            const urlPath = (path.substr(0, 1) === '/') ? path : `/${path}`;

            this.bugsnag.leaveBreadcrumb(`API Request: ${method} ${urlPath}`, {
                type: 'manual',
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
        if (APIBaseWrapper.isEmptyObject(opts)) {
            return url;
        }

        const params = APIBaseWrapper.toQueryString(opts);
        const sep = (url.indexOf('?') === -1) ? '?' : '&';

        return `${url}${sep}${params}`;
    }

    /**
     * Convert an object to query string format
     *
     * @param obj
     * @return {string|*}
     */
    static toQueryString(obj) {
        let parts = [];
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        return parts.join("&");
    };

    /**
     * Returns `true` if an object is empty
     *
     * @param obj
     * @return {boolean}
     */
    static isEmptyObject(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
}