const { HEADER_CONTENT_TYPE, HEADER_CONTENT_TYPE_XML, TYPE_XML } = require('./consts');
const HTTPResponse = require('./http');

/**
 * @class XMLResponse
 * @extends HTTPResponse
 * @classdesc An HTTPResponse with a return type of `XML`.
 *  Use this response to return XML from a function. If this type of response
 *  is used then `value` is expected to be a string with valid XML.
 *  This object also sets the Content-Type for HTTP calls to `text/xml`.
 * @example
  ```
  const XMLResponse = require('smartsheet-plugin-sdk/response/xml');
  const response = new XMLResponse({
    value: "<hello>World!</hello>"
  });
  return response;

  // 200 Ok
  // Content-Type: "text/xml"
  // <hello>World!</hello>
  ```
 * @param {Object} config configuration object.
 * @param {*} config.value user returned value.
 */
class XMLResponse extends HTTPResponse {
  constructor({ value } = {}) {
    super({
      type: TYPE_XML,
      status: 200,
      headers: { [HEADER_CONTENT_TYPE]: HEADER_CONTENT_TYPE_XML },
    });
    this.setValue(value);
  }
}

module.exports = XMLResponse;
