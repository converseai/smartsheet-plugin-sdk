const _ = require('lodash');

module.exports = class Response {
  getError() {
    return this.error;
  }

  setError(error) {
    if (!_.isNil(error)) this.error = error;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    if (!_.isNil(type)) this.type = type;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    if (!_.isNil(value)) this.value = value;
  }
};
