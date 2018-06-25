const _ = require('lodash');
const Response = require('./response');

module.exports = class HTTPResponse extends Response {
  constructor({ status, headers, type } = {}) {
    super({ type });
    this.http = {};
    this.setHTTPStatus(status);
    this.setHTTPHeaders(headers);
  }

  getHTTPStatus() {
    return this.http && this.http.status;
  }

  /**
   * @param {Number} status An integer describing the HTTP error.
   */
  setHTTPStatus(status) {
    if (!_.isNil(status) && _.isInteger(status)) {
      this.http.status = status;
    }
  }

  getHTTPHeaders() {
    return this.http && this.http.headers;
  }

  /**
   * @param {Object.<string, string>} headers a map of HTTP headers
   */
  setHTTPHeaders(headers) {
    if (!_.isNil(headers)) {
      this.http.headers = headers;
    }
  }
};
