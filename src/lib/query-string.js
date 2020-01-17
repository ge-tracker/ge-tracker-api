/**
 * Returns `true` if an object is empty
 *
 * @param obj
 * @return {boolean}
 */
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * Convert options to query string parameters for an endpoint
 *
 * @param url
 * @param opts
 * @return {*}
 */
function parseOptions(url, opts) {
    if (isEmptyObject(opts)) {
        return url;
    }

    const params = toQueryString(opts);
    const sep = (url.indexOf('?') === -1) ? '?' : '&';

    return `${url}${sep}${params}`;
}

/**
 * Convert an object to query string format
 *
 * @see https://stackoverflow.com/a/31415775/639665
 *
 * @param obj
 * @param urlEncode
 * @returns {string}
 */
function toQueryString(obj, urlEncode) {
    //
    // Helper function that flattens an object, retaining key structer as a path array:
    //
    // Input: { prop1: 'x', prop2: { y: 1, z: 2 } }
    // Example output: [
    //     { path: [ 'prop1' ],      val: 'x' },
    //     { path: [ 'prop2', 'y' ], val: '1' },
    //     { path: [ 'prop2', 'z' ], val: '2' }
    // ]
    //
    function flattenObj(x, path) {
        let result = [];

        path = path || [];
        Object.keys(x).forEach(function (key) {
            if (!x.hasOwnProperty(key)) return;

            let newPath = path.slice();
            newPath.push(key);

            let vals = [];
            if (typeof x[key] == 'object') {
                vals = flattenObj(x[key], newPath);
            } else {
                vals.push({path: newPath, val: x[key]});
            }
            vals.forEach(function (obj) {
                return result.push(obj);
            });
        });

        return result;
    } // flattenObj

    // start with  flattening `obj`
    let parts = flattenObj(obj); // [ { path: [ ...parts ], val: ... }, ... ]

    // convert to array notation:
    parts = parts.map(function (varInfo) {
        if (varInfo.path.length === 1) varInfo.path = varInfo.path[0]; else {
            let first = varInfo.path[0];
            let rest = varInfo.path.slice(1);
            varInfo.path = first + '[' + rest.join('][') + ']';
        }
        return varInfo;
    }); // parts.map

    // join the parts to a query-string url-component
    let queryString = parts.map(function (varInfo) {
        return varInfo.path + '=' + varInfo.val;
    }).join('&');

    return urlEncode ? encodeURIComponent(queryString) : queryString;
}

export {
    isEmptyObject,
    parseOptions,
}
