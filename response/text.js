const { HEADER_CONTENT_TYPE, HEADER_CONTENT_TYPE_TEXT, TYPE_TEXT } = require('./consts');
const HTTPResponse = require('./http');

module.exports = class TEXTResponse extends HTTPResponse {
  constructor({ value } = {}) {
    super({
      type: TYPE_TEXT,
      status: 200,
      headers: { [HEADER_CONTENT_TYPE]: HEADER_CONTENT_TYPE_TEXT },
    });
    this.setValue(value);
  }
};
