/**
 * Unwrap the response body from an AxiosResponse
 *
 * This function will return the `data` property of the response body if it exists,
 * otherwise it will return the body itself.
 *
 * @param body
 */
export function handleResponseBody<T>(body: MaybeDataWrapped<T>): T | null {
  if (!body) {
    return null;
  }

  if (typeof body !== 'object') {
    return body;
  }

  return 'data' in body ? body.data : body;
}

type MaybeDataWrapped<T = unknown> = T | {data: T};
