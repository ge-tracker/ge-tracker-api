export declare type ParamObject = {
    [index: string]: any;
};
/**
 * Returns `true` if an object is empty
 *
 * @param obj
 * @return {boolean}
 */
declare function isEmptyObject(obj: object): boolean;
/**
 * Convert options to query string parameters for an endpoint
 *
 * @param url
 * @param opts
 * @return {*}
 */
declare function parseOptions(url: string, opts: ParamObject): string;
export { isEmptyObject, parseOptions, };
