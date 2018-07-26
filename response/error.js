const _ = require('lodash');
const { TYPE_ERROR } = require('./consts');
const HTTPResponse = require('./http');
const { DEFAULT } = require('./errors');

/**
 * @class ErrorResponse
 * @extends HTTPResponse
 * @classdesc An HTTPResponse with a return type of `ERROR`.
 *  Use this response to return an error from a function.
 *  This can be directly returned or thrown. If a regular JavaScript error
 *  is thrown, then an ErrorResponse is created and returned to the caller.
 * @example
  ```
  const ErrorRespponse = require('smartsheet-plugin-sdk/response/error');
  // Returned
  return new ErrorRespponse();

  // Caught and returned
  throw new ErrorRespponse();

  // Caught and wrapped in an ErrorResponse, then returned.
  // status becomes 500
  // code becomes "INTERNAL_ERROR"
  // message becomes the message below
  throw new Error('this becomes the ErrorResponse.message');

  // Caught and wrapped in an ErrorResponse, then returned.
  // status becomes 500
  // code becomes "INTERNAL_ERROR"
  // message becomes the message below
  throw 'this becomes the ErrorResponse.message.';
  ```
 * @param {Error} config configuration object.
 */
class ErrorResponse extends HTTPResponse {
  constructor({ message, code, status } = DEFAULT) {
    super({ status, type: TYPE_ERROR });
    this.setErrorCode(code);
    this.setErrorMessage(message);
  }

  /**
   * @returns {string} a human-readable string.
   */
  getErrorMessage() {
    return this.error && this.error.message;
  }

  /**
   * @param {string} message a human-readable string.
   */
  setErrorMessage(message) {
    if (!_.isNil(message) && _.isString(message)) {
      const error = this.getError() || {};
      error.message = message;
      this.setError(error);
    }
  }

  /**
   * @returns {string} a machine-readable string.
   */
  getErrorCode() {
    return this.error && this.error.code;
  }

  /**
   * @param {string} code a machine-readable string.
   */
  setErrorCode(code) {
    if (!_.isNil(code) && _.isString(code)) {
      const error = this.getError() || {};
      error.code = code;
      this.setError(error);
    }
  }
}

module.exports = ErrorResponse;
