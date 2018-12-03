export function handleResponseBody(body) {
    if (!body) {
        return null;
    }

    if (!('data' in body)) {
        return body
    }

    return body.data
}