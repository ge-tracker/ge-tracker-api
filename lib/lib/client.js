import Axios from 'axios';
import merge from 'deepmerge';
import * as errors from './errors';
const GE_TRACKER_API_URL = 'https://www.ge-tracker.com/api';
const GE_TRACKER_API_VERSION = 'v2';
const DefaultOptions = {
    // set the base URL for all API calls made on this Axios instance
    baseURL: GE_TRACKER_API_URL,
    // set a sane default for the request TTL
    timeout: 30e3,
    // disable redirects -- API should NOT return a redirect response
    maxRedirects: 0,
    // explicitly set the default response type to JSON
    responseType: 'json',
    // specify a custom user-agent header to identify the client used
    // and for a point of contact
    headers: {
        'User-Agent': 'ge-tracker-api client <https://github.com/gtjamesa/ge-tracker-api>',
        'Accept': `application/x.getracker.${GE_TRACKER_API_VERSION}+json`,
    }
};
function isUnauthorizedResponse(error) {
    return error.response && error.response.status === 401;
}
function createAuthHeader(apiKey) {
    return {
        // Authorization header is required with a valid API key for all API calls
        Authorization: `Bearer ${apiKey}`
    };
}
/**
 * Wrap URLs to support DMM endpoints
 *
 * @param dmmMode
 * @param request
 */
function applyDmmParameter(dmmMode, request) {
    const path = request.url;
    if (!dmmMode || path === undefined || path.includes('dmm=1')) {
        return path;
    }
    return path.includes('?')
        ? path + '&dmm=1'
        : path + '?dmm=1';
}
function createClient(apiKey, opts = null) {
    const options = merge(DefaultOptions, opts || {});
    const instance = Axios.create(merge(options, { headers: createAuthHeader(apiKey) }));
    let dmmMode = false;
    // add custom response interceptors
    instance.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        // intercept 401 Unauthorized responses and reject the promise chain with
        // an appropriate typed error
        if (isUnauthorizedResponse(error)) {
            return Promise.reject(new errors.InvalidApiKey());
        }
        return Promise.reject(error);
    });
    instance.interceptors.request.use((request) => {
        request.url = applyDmmParameter(dmmMode, request);
        return request;
    });
    // @ts-ignore
    function dmm(enabled = true) {
        dmmMode = enabled;
    }
    // @ts-ignore
    return instance;
}
export { DefaultOptions, createClient, GE_TRACKER_API_URL };
