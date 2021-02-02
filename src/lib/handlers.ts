export function handleResponseBody(body: any) {
    if (!body) {
        return null;
    }

    if (!('data' in body)) {
        return body
    }

    return body.data
}
