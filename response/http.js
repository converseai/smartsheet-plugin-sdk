const _ = require('lodash');
const Response = require('./index');

module.exports = class HTTPResponse extends Response {
  constructor({ status, headers } = {}) {
    super();
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
      const http = this.getHTTP() || {};
      http.status = status;
      this.setHTTP(http);
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
      const http = this.getHTTP() || {};
      http.headers = headers;
      this.setHTTP(http);
    }
  }
};
