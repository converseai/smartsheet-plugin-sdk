/**
 * @class BaseRegData
 * @classdesc Abstract base class for all registrationData classes.
 */
class RegData {
  constructor(registrationData = {}) {
    Object.defineProperty(this, '_registrationData', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: registrationData,
    });
  }

  get(property) {
    if (this._registrationData[property] !== undefined
      && this._registrationData[property] !== null) {
      return this._registrationData[property];
    }

    return undefined;
  }
}

module.exports = RegData;
