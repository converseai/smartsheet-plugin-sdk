const { HEADER_CONTENT_TYPE, HEADER_CONTENT_TYPE_HTML, TYPE_HTML } = require('./consts');
const HTTPResponse = require('./http');

module.exports = class HTMLResponse extends HTTPResponse {
  constructor({ value } = {}) {
    super({
      type: TYPE_HTML,
      status: 200,
      headers: { [HEADER_CONTENT_TYPE]: HEADER_CONTENT_TYPE_HTML },
    });
    this.setValue(value);
  }
};
