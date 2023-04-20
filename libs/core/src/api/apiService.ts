export class ResponseError extends Error {
  response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @return {object|undefined}  Returns either the response, or throws an error
 */
function checkStatus(response: Response) {
  if ((response.status >= 200 && response.status < 300) || response.status === 304) {
    return response;
  }

  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

/**
 * Parses response returned by a network request
 * @param {Response} response A response from a network request
 * @return {Promise|null}     Returns a parsed network response
 */
export function getParsedResponse<T = any>(response: Response) {
  const contentType = response.headers.get('content-type');

  if (contentType?.includes('application/json')) {
    return response.json() as Promise<T>;
  }

  if (contentType?.includes('text/plain')) {
    return response.text();
  }

  return response.blob();
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {Promise}          The parsed response data
 */
export async function createFetch<T = any>(url: string, options?: RequestInit) {
  const fetchResponse = await fetch(url, options);
  const response = checkStatus(fetchResponse);
  return getParsedResponse<T>(response);
}
