const SDKCore = require('../core');
const { RESPONSE_CODE_OK } = require('../response/consts');
const ErrorResponse = require('../response/error');

const SDKHttp = class SDKHttp extends SDKCore {
  error({ status, message, code } = {}) {
    const response = new ErrorResponse({ status, message, code });
    this.respond(response);
  }

  respond(res) {
    this.response.status(RESPONSE_CODE_OK).json(res);
  }
};

module.exports.create = (...args) => new SDKHttp(...args);
