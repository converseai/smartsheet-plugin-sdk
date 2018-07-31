const { HEADER_CONTENT_TYPE, HEADER_CONTENT_TYPE_TEXT, TYPE_TEXT } = require('./consts');
const HTTPResponse = require('./http');

/**
 * @class TEXTResponse
 * @extends HTTPResponse
 * @classdesc An HTTPResponse with a return type of `TEXT`.
 *  Use this response to return TEXT from a function. If this type of response
 *  is used then `value` is expected to be a string with a valid string.
 *  This object also sets the Content-Type for HTTP calls to `text/plain`.
 * @example
  ```
  const TEXTResponse = require('smartsheet-plugin-sdk/response/text');
  const response = new TEXTResponse({
    value: "Hello, World!"
  });
  return response;

  // 200 Ok
  // Content-Type: "text/plain"
  // Hello, World!
  ```
 * @param {Object} config configuration object.
 * @param {*} config.value user returned value.
 */
class TEXTResponse extends HTTPResponse {
  constructor({ value } = {}) {
    super({
      type: TYPE_TEXT,
      status: 200,
      headers: { [HEADER_CONTENT_TYPE]: HEADER_CONTENT_TYPE_TEXT },
    });
    this.setValue(value);
  }
}

module.exports = TEXTResponse;
