/* eslint no-underscore-dangle: off */

/**
 * @typedef FunctionConfig
 * @type {object}
 * @property {funcData} funcData
 * @property {httpData} httpData
 */

/**
 * @typedef funcData
 * @type {object}
 */

/**
 * @typedef httpData
 * @type {object}
 * @property {Object} body
 * @property {Object} formData
 * @property {Object} queryParams
*/

/**
 * @class FuncData
 * @classdesc Abstract base class for all function parameter classes.
 */
class FuncData {
  /**
   * @param {FunctionConfig} config
   * @param {funcData} config.funcData
   */
  constructor({ funcData = {}, httpData = {} } = {}) {
    const { queryParams = {}, formData = {}, body = {} } = httpData;
    this._funcData = funcData;
    this._formData = formData;
    this._body = body;
    this._queryParams = queryParams;
  }

  /**
   * Finds and returns the value of `property` from the payload data.
   * Looks in `funcData`, then `formData`, then `body` of `POST`, and finally `queryParams`.
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
