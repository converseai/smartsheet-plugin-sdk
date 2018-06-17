/* eslint no-underscore-dangle: off */

/**
 * @class BaseRegData
 * @classdesc Abstract base class for all registrationSpec classes.
 */
class RegData {
  constructor(registrationSpec = {}) {
    this._registrationSpec = registrationSpec;
  }

  get(property) {
    if (this._registrationSpec[property] !== undefined
      && this._registrationSpec[property] !== null) {
      return this._registrationSpec[property];
    }

    return undefined;
  }
}

module.exports = RegData;
