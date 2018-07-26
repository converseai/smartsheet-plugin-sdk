const _ = require('lodash');
const Response = require('./response');

/**
 * @class HTTPResponse
 * @extends Response
 * @classdesc An extended Response that includes HTTP specific properties. This
 *  type of response can be used for functions that are accessed via HTTP and need
 *  to use HTTP status codes and headers.
 * @example
  ```
  const HTTPResponse = require('smartsheet-plugin-sdk/response/http');
  const response = new HTTPResponse({ type: 'JSON' });
  response.setHTTPStatus(200);
  response.setHTTPHeaders({ 'Content-Type': 'application/json' });
  return response;

  // 200 Ok
  // Content-Type: "application/json"
  ```
 * @param {Object} config configuration object.
 * @param {number} config.status an integer describing the HTTP status.
 * @param {Object<string, string>} config.headers a key value map of headers.
 * @param {string} config.type type of response.
 */
class HTTPResponse extends Response {
  constructor({ status, headers, type } = {}) {
    super({ type });
    this.http = {};
    this.setHTTPStatus(status);
    this.setHTTPHeaders(headers);
  }

  /**
   * Get the the http status.
   * @returns {number} an integer describing the HTTP status.
   */
  getHTTPStatus() {
    return this.http && this.http.status;
  }

  /**
   * Set the the http status.
   * @param {number} status an integer describing the HTTP status.
   */
  setHTTPStatus(status) {
    if (!_.isNil(status) && _.isInteger(status)) {
      this.http.status = status;
    }
  }


  /**
   * Gets a key value map of HTTP headers.
   * @param {Object<string, string>} headers a key value map of HTTP headers.
   */
  getHTTPHeaders() {
    return this.http && this.http.headers;
  }

  /**
   * Sets a key value map of HTTP headers.
   * @param {Object<string, string>} headers a key value map of HTTP headers.
   */
  setHTTPHeaders(headers) {
    if (!_.isNil(headers)) {
      this.http.headers = headers;
    }
  }
}

module.exports = HTTPResponse;
