const _ = require('lodash');
const HTTPResponse = require('./http');
const { DEFAULT } = require('./errors');

module.exports = class ErrorResponse extends HTTPResponse {
  constructor({ message, code, status } = DEFAULT) {
    super({ status });
    this.setErrorCode(code);
    this.setErrorMessage(message);
  }

  getErrorMessage() {
    return this.error && this.error.message;
  }

  /**
   *
   * @param {String} message A string message describing the error.
   */
  setErrorMessage(message) {
    if (!_.isNil(message) && _.isString(message)) {
      const error = this.getError() || {};
      error.message = message;
      this.setError(error);
    }
  }

  getErrorCode() {
    return this.error && this.error.code;
  }

  /**
   * @param {String} code A string error code.
   */
  setErrorCode(code) {
    if (!_.isNil(code) && _.isString(code)) {
      const error = this.getError() || {};
      error.code = code;
      this.setError(error);
    }
  }
};
