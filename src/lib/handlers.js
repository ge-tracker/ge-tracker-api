export function handleResponseBody(body) {
    if (!('data' in body)) {
        return body
    }

    return body.data
}