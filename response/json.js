const { HEADER_CONTENT_TYPE, HEADER_CONTENT_TYPE_JSON } = require('./consts');
const HTTPResponse = require('./http');

module.exports = class JSONResponse extends HTTPResponse {
  constructor({ value } = {}) {
    super({
      status: 200,
      headers: { [HEADER_CONTENT_TYPE]: HEADER_CONTENT_TYPE_JSON },
    });
    this.setValue(value);
  }
};
