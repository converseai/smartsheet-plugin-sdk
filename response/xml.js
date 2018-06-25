const { HEADER_CONTENT_TYPE, HEADER_CONTENT_TYPE_XML, TYPE_XML } = require('./consts');
const HTTPResponse = require('./http');

module.exports = class XMLResponse extends HTTPResponse {
  constructor({ value } = {}) {
    super({
      type: TYPE_XML,
      status: 200,
      headers: { [HEADER_CONTENT_TYPE]: HEADER_CONTENT_TYPE_XML },
    });
    this.setValue(value);
  }
};
