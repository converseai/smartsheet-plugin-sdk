const _ = require('lodash');

module.exports = class Response {
  constructor({ type } = {}) {
    if (_.isNil(type)) {
      throw new Error(`Cannot create Response with type ${type}!`);
    }
    Object.defineProperty(this, 'type', { get: () => type });
  }

  getError() {
    return this.error;
  }

  setError(error) {
    if (!_.isNil(error)) this.error = error;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    if (!_.isNil(value)) this.value = value;
  }

  setCallback(callback) {
    if (!_.isNil(callback)) this.callback = callback;
  }

  getType() {
    return this.type;
  }
};
