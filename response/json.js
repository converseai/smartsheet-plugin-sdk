const { HEADER_CONTENT_TYPE, HEADER_CONTENT_TYPE_JSON, TYPE_JSON } = require('./consts');
const HTTPResponse = require('./http');

module.exports = class JSONResponse extends HTTPResponse {
  constructor({ value } = {}) {
    super({
      type: TYPE_JSON,
      status: 200,
      headers: { [HEADER_CONTENT_TYPE]: HEADER_CONTENT_TYPE_JSON },
    });
    this.setValue(value);
  }
};
