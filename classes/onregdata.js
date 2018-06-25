/**
 * @class OnRegData
 * @classdesc Specialized case for onPluginRegister.
 */
class OnRegData {
  constructor({ scope, registrationData = {} } = {}) {
    Object.defineProperties(this, {
      update: {
        enumerable: true,
        configurable: false,
        writable: false,
        value: true,
      },
      scope: {
        enumerable: true,
        configurable: false,
        writable: false,
        value: scope,
      },
    });

    this.registrationData = registrationData;
  }
}

module.exports = OnRegData;
