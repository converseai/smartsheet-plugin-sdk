const { HEADER_CONTENT_TYPE, HEADER_CONTENT_TYPE_JSON, TYPE_JSON } = require('./consts');
const HTTPResponse = require('./http');

/**
 * @class JSONResponse
 * @extends HTTPResponse
 * @classdesc An HTTPResponse with a return type of `JSON`.
 *  Use this response to return JSON from a function. If this type of response
 *  is used then `value` is expected to be a valid JavaScript Object - there
 *  is no need to stringify the value. This object also sets the Content-Type
 *  for HTTP calls to `application/json`.
 * @example
  ```
  const JSONResponse = require('smartsheet-plugin-sdk/response/json');
  const response = new JSONResponse({
    value: { value: { a: 'b' } }
  });
  return response;

  // 200 Ok
  // Content-Type: "application/json"
  // { "a": "b" }
  ```
 * @param {Object} config configuration object.
 * @param {*} config.value user returned value.
 */
class JSONResponse extends HTTPResponse {
  constructor({ value } = {}) {
    super({
      type: TYPE_JSON,
      status: 200,
      headers: { [HEADER_CONTENT_TYPE]: HEADER_CONTENT_TYPE_JSON },
    });
    this.setValue(value);
  }
}

module.exports = JSONResponse;
