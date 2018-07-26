const _ = require('lodash');

/**
 * Create a Response of type.
 * @class Response
 * @abstract
 * @classdesc An abstract response object for functions.
 * @param {Object} config configuration object.
 * @param {string} config.type the type of response.
 */
class Response {
  constructor({ type } = {}) {
    if (_.isNil(type)) {
      throw new Error(`Cannot create Response with type ${type}!`);
    }
    Object.defineProperty(this, 'type', { get: () => type });
  }

  /**
   * Get the user defined error for this response.
   * @returns {Error} user defined error response.
   */
  getError() {
    return this.error;
  }

  /**
   * Set the user defined error for this response.
   * @param {Error} error user defined error object.
   */
  setError(error) {
    if (!_.isNil(error)) this.error = error;
  }

  /**
   * Set the value to return with this response. The value can
   * be set to any Object or primitive value but make sure the response
   * `type` matches the expected `value` type.
   * @returns {*} user defined value.
   */
  getValue() {
    return this.value;
  }

  /**
   * Set the value of this response.
   * @param {*} value the value of this response.
   */
  setValue(value) {
    if (!_.isNil(value)) this.value = value;
  }

  /**
   * Set a callback function to run after the function has returned the response.
   * @example
   ```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
   * @param {function} callback the function to run.
   */
  setCallback(callback) {
    if (!_.isNil(callback)) this.callback = callback;
  }

  /**
   * @returns the type of this response.
   */
  getType() {
    return this.type;
  }
}

module.exports = Response;
