import { ParamObject } from "../query-string";
import { AxiosInstance } from "axios";
export interface ApiBase {
    onRequest(method: string, path: string, params: object): void;
    parseOptions(url: string, opts: ParamObject): string;
}
export default class APIBaseWrapper {
    /**
     * @type {Function|null}
     */
    static onRequestCb: Function | null;
    protected client: AxiosInstance;
    constructor(client: AxiosInstance);
    /**
     * Callback fired before a request is made (breadcrumb logging)
     *
     * @param {String} method
     * @param {String} path
     * @param {Object} params
     */
    onRequest(method: string, path: string, params?: object): void;
    _wrapGet(path: string): Promise<any>;
    _wrapPost(path: string, params?: {}): Promise<any>;
    _wrapPatch(path: string, params?: {}): Promise<any>;
    _wrapDelete(path: string): Promise<any>;
    /**
     * Convert options to query string parameters for an endpoint
     *
     * @param url
     * @param opts
     * @return {*}
     */
    parseOptions(url: string, opts: ParamObject): string;
}
