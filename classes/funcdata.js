/* eslint no-underscore-dangle: off */

/**
 * @class FuncData
 * @classdesc The second argument passed into a user's function will be an
 *  subclass of FuncData. FuncData provides one method that will allow access
 *  to parameters passed into the function, either directly or via form data,
 *  the body, or query parameters.
 * @abstract
 * @example
  ```
  function(meta, params) {
    const abc = params.get('abc');
    // `abc` will be equal to `funcData.abc` of the payload. If the property
    // can't be found then `formData.abc` or `body.abc` of the HTTP `POST` payload
    // will be used. If it still can't be found then it will be equal to
    // `queryParams.abc` of the payload.

    const def = params.def;
    // In most cases, when a function is created via the Smartsheet CLI tool, and
    // parameters are added then a corresponding subclass is created that will allow
    // defined parameters to be accessed like the above. In this example, if a parameter
    // was defined as `def` then the value of `def` will be decided through the same
    // process as `abc` above.
  }
  ```
 * @param {FunctionConfig} config
 */
class FuncData {
  constructor({ funcData = {}, httpData = {} } = {}) {
    const { queryParams = {}, formData = {}, body = {} } = httpData;
    Object.defineProperties(this, {
      _funcData: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: funcData,
      },
      _formData: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: formData,
      },
      _body: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: body,
      },
      _queryParams: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: queryParams,
      },
    });
  }

  /**
   * Finds and returns the value of `property` from the payload data.
   * First checks the value of `property` on `funcData`, then `formData`
   * from an HTTP POST call, then `body` from an HTTP POST call, and
   * finally `queryParams`.
   * @param {string} property the name of the property/parameter to get.
   * @returns {*} the value of `property` found on the payload.
   */
  get(property) {
    if (this._funcData[property] !== undefined && this._funcData[property] !== null) {
      return this._funcData[property];
    }

    if (this._formData[property] !== undefined && this._formData[property] !== null) {
      return this._formData[property];
    }

    if (this._body[property] !== undefined && this._body[property] !== null) {
      return this._body[property];
    }

    if (this._queryParams[property] !== undefined && this._queryParams[property] !== null) {
      return this._queryParams[property];
    }

    return undefined;
  }
}

module.exports = FuncData;

/**
 * @typedef FunctionConfig
 * @type {Object}
 * @property {FunctionConfigData} funcData
 * @property {FunctionConfigHttp} httpData
 */

/**
 * @typedef FunctionConfigData
 * @type {Object}
 * @description Internal data that may be passed to the function.
 */

/**
 * @typedef FunctionConfigHttp
 * @type {Object}
 * @description Data that may be passed in via an HTTP call.
 * @property {Object} body
 * @property {Object} formData
 * @property {Object} queryParams
*/
