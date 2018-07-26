const { HEADER_CONTENT_TYPE, HEADER_CONTENT_TYPE_HTML, TYPE_HTML } = require('./consts');
const HTTPResponse = require('./http');

/**
 * @class HTMLResponse
 * @extends HTTPResponse
 * @classdesc An HTTPResponse with a return type of `HTML`.
 *  Use this response to return HTML from a function. If this type of response
 *  is used then `value` is expected to be a string with valid HTML.
 *  This object also sets the Content-Type for HTTP calls to `text/html`.
 * @example
  ```
  const HTMLResponse = require('smartsheet-plugin-sdk/response/html');
  const response = new HTMLResponse({
    value: "<p>Hello, World!</p>"
  });
  return response;

  // 200 Ok
  // Content-Type: "text/html"
  // <p>Hello, World!</p>
  ```
 * @param {Object} config configuration object.
 * @param {*} config.value user returned value.
 */
class HTMLResponse extends HTTPResponse {
  constructor({ value } = {}) {
    super({
      type: TYPE_HTML,
      status: 200,
      headers: { [HEADER_CONTENT_TYPE]: HEADER_CONTENT_TYPE_HTML },
    });
    this.setValue(value);
  }
}

module.exports = HTMLResponse;
