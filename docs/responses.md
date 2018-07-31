## Classes

<dl>
<dt><a href="#ErrorResponse">ErrorResponse</a> ⇐ <code><a href="#HTTPResponse">HTTPResponse</a></code></dt>
<dd><p>An HTTPResponse with a return type of <code>ERROR</code>.
 Use this response to return an error from a function.
 This can be directly returned or thrown. If a regular JavaScript error
 is thrown, then an ErrorResponse is created and returned to the caller.</p>
</dd>
<dt><a href="#HTMLResponse">HTMLResponse</a> ⇐ <code><a href="#HTTPResponse">HTTPResponse</a></code></dt>
<dd><p>An HTTPResponse with a return type of <code>HTML</code>.
 Use this response to return HTML from a function. If this type of response
 is used then <code>value</code> is expected to be a string with valid HTML.
 This object also sets the Content-Type for HTTP calls to <code>text/html</code>.</p>
</dd>
<dt><a href="#HTTPResponse">HTTPResponse</a> ⇐ <code><a href="#Response">Response</a></code></dt>
<dd><p>An extended Response that includes HTTP specific properties. This
 type of response can be used for functions that are accessed via HTTP and need
 to use HTTP status codes and headers.</p>
</dd>
<dt><a href="#JSONResponse">JSONResponse</a> ⇐ <code><a href="#HTTPResponse">HTTPResponse</a></code></dt>
<dd><p>An HTTPResponse with a return type of <code>JSON</code>.
 Use this response to return JSON from a function. If this type of response
 is used then <code>value</code> is expected to be a valid JavaScript Object - there
 is no need to stringify the value. This object also sets the Content-Type
 for HTTP calls to <code>application/json</code>.</p>
</dd>
<dt><a href="#OAuth2Start">OAuth2Start</a> ⇐ <code><a href="#Response">Response</a></code></dt>
<dd><p>A Response with a return type of <code>JSON</code>.
 This response is used to start an OAuth2 process by providing the caller
 with the details specific to the external authentication system. The caller
 will then initiate the OAuth2 process with the given details.</p>
</dd>
<dt><a href="#OAuth2Token">OAuth2Token</a> ⇐ <code><a href="#Response">Response</a></code></dt>
<dd><p>A Response with a return type of <code>JSON</code>.
 This response is used during an OAuth2 process by providing the caller
 with the details specific to the external authentication system.</p>
</dd>
<dt><a href="#Response">Response</a></dt>
<dd><p>An abstract response object for functions.</p>
</dd>
<dt><a href="#TEXTResponse">TEXTResponse</a> ⇐ <code><a href="#HTTPResponse">HTTPResponse</a></code></dt>
<dd><p>An HTTPResponse with a return type of <code>TEXT</code>.
 Use this response to return TEXT from a function. If this type of response
 is used then <code>value</code> is expected to be a string with a valid string.
 This object also sets the Content-Type for HTTP calls to <code>text/plain</code>.</p>
</dd>
<dt><a href="#XMLResponse">XMLResponse</a> ⇐ <code><a href="#HTTPResponse">HTTPResponse</a></code></dt>
<dd><p>An HTTPResponse with a return type of <code>XML</code>.
 Use this response to return XML from a function. If this type of response
 is used then <code>value</code> is expected to be a string with valid XML.
 This object also sets the Content-Type for HTTP calls to <code>text/xml</code>.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Error">Error</a></dt>
<dd></dd>
</dl>

<a name="ErrorResponse"></a>

## ErrorResponse ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
An HTTPResponse with a return type of `ERROR`.
 Use this response to return an error from a function.
 This can be directly returned or thrown. If a regular JavaScript error
 is thrown, then an ErrorResponse is created and returned to the caller.

**Kind**: global class  
**Extends**: [<code>HTTPResponse</code>](#HTTPResponse)  

* [ErrorResponse](#ErrorResponse) ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
    * [new ErrorResponse(config)](#new_ErrorResponse_new)
    * [.getErrorMessage()](#ErrorResponse+getErrorMessage) ⇒ <code>string</code>
    * [.setErrorMessage(message)](#ErrorResponse+setErrorMessage)
    * [.getErrorCode()](#ErrorResponse+getErrorCode) ⇒ <code>string</code>
    * [.setErrorCode(code)](#ErrorResponse+setErrorCode)
    * [.getHTTPStatus()](#HTTPResponse+getHTTPStatus) ⇒ <code>number</code>
    * [.setHTTPStatus(status)](#HTTPResponse+setHTTPStatus)
    * [.getHTTPHeaders(headers)](#HTTPResponse+getHTTPHeaders)
    * [.setHTTPHeaders(headers)](#HTTPResponse+setHTTPHeaders)
    * [.getError()](#Response+getError) ⇒ [<code>Error</code>](#Error)
    * [.setError(error)](#Response+setError)
    * [.getValue()](#Response+getValue) ⇒ <code>\*</code>
    * [.setValue(value)](#Response+setValue)
    * [.setCallback(callback)](#Response+setCallback)
    * [.getType()](#Response+getType) ⇒

<a name="new_ErrorResponse_new"></a>

### new ErrorResponse(config)

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>Error</code>](#Error) | configuration object. |

**Example**  
```
  const ErrorRespponse = require('smartsheet-plugin-sdk/response/error');
  // Returned
  return new ErrorRespponse();

  // Caught and returned
  throw new ErrorRespponse();

  // Caught and wrapped in an ErrorResponse, then returned.
  // status becomes 500
  // code becomes "INTERNAL_ERROR"
  // message becomes the message below
  throw new Error('this becomes the ErrorResponse.message');

  // Caught and wrapped in an ErrorResponse, then returned.
  // status becomes 500
  // code becomes "INTERNAL_ERROR"
  // message becomes the message below
  throw 'this becomes the ErrorResponse.message.';
  ```
<a name="ErrorResponse+getErrorMessage"></a>

### errorResponse.getErrorMessage() ⇒ <code>string</code>
**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  
**Returns**: <code>string</code> - a human-readable string.  
<a name="ErrorResponse+setErrorMessage"></a>

### errorResponse.setErrorMessage(message)
**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | a human-readable string. |

<a name="ErrorResponse+getErrorCode"></a>

### errorResponse.getErrorCode() ⇒ <code>string</code>
**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  
**Returns**: <code>string</code> - a machine-readable string.  
<a name="ErrorResponse+setErrorCode"></a>

### errorResponse.setErrorCode(code)
**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | a machine-readable string. |

<a name="HTTPResponse+getHTTPStatus"></a>

### errorResponse.getHTTPStatus() ⇒ <code>number</code>
Get the the http status.

**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  
**Returns**: <code>number</code> - an integer describing the HTTP status.  
<a name="HTTPResponse+setHTTPStatus"></a>

### errorResponse.setHTTPStatus(status)
Set the the http status.

**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | an integer describing the HTTP status. |

<a name="HTTPResponse+getHTTPHeaders"></a>

### errorResponse.getHTTPHeaders(headers)
Gets a key value map of HTTP headers.

**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="HTTPResponse+setHTTPHeaders"></a>

### errorResponse.setHTTPHeaders(headers)
Sets a key value map of HTTP headers.

**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="Response+getError"></a>

### errorResponse.getError() ⇒ [<code>Error</code>](#Error)
Get the user defined error for this response.

**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  
**Returns**: [<code>Error</code>](#Error) - user defined error response.  
<a name="Response+setError"></a>

### errorResponse.setError(error)
Set the user defined error for this response.

**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  

| Param | Type | Description |
| --- | --- | --- |
| error | [<code>Error</code>](#Error) | user defined error object. |

<a name="Response+getValue"></a>

### errorResponse.getValue() ⇒ <code>\*</code>
Set the value to return with this response. The value can
be set to any Object or primitive value but make sure the response
`type` matches the expected `value` type.

**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  
**Returns**: <code>\*</code> - user defined value.  
<a name="Response+setValue"></a>

### errorResponse.setValue(value)
Set the value of this response.

**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of this response. |

<a name="Response+setCallback"></a>

### errorResponse.setCallback(callback)
Set a callback function to run after the function has returned the response.

**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function to run. |

**Example**  
```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
<a name="Response+getType"></a>

### errorResponse.getType() ⇒
**Kind**: instance method of [<code>ErrorResponse</code>](#ErrorResponse)  
**Returns**: the type of this response.  
<a name="HTMLResponse"></a>

## HTMLResponse ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
An HTTPResponse with a return type of `HTML`.
 Use this response to return HTML from a function. If this type of response
 is used then `value` is expected to be a string with valid HTML.
 This object also sets the Content-Type for HTTP calls to `text/html`.

**Kind**: global class  
**Extends**: [<code>HTTPResponse</code>](#HTTPResponse)  

* [HTMLResponse](#HTMLResponse) ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
    * [new HTMLResponse(config)](#new_HTMLResponse_new)
    * [.getHTTPStatus()](#HTTPResponse+getHTTPStatus) ⇒ <code>number</code>
    * [.setHTTPStatus(status)](#HTTPResponse+setHTTPStatus)
    * [.getHTTPHeaders(headers)](#HTTPResponse+getHTTPHeaders)
    * [.setHTTPHeaders(headers)](#HTTPResponse+setHTTPHeaders)
    * [.getError()](#Response+getError) ⇒ [<code>Error</code>](#Error)
    * [.setError(error)](#Response+setError)
    * [.getValue()](#Response+getValue) ⇒ <code>\*</code>
    * [.setValue(value)](#Response+setValue)
    * [.setCallback(callback)](#Response+setCallback)
    * [.getType()](#Response+getType) ⇒

<a name="new_HTMLResponse_new"></a>

### new HTMLResponse(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object. |
| config.value | <code>\*</code> | user returned value. |

**Example**  
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
<a name="HTTPResponse+getHTTPStatus"></a>

### htmlResponse.getHTTPStatus() ⇒ <code>number</code>
Get the the http status.

**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  
**Returns**: <code>number</code> - an integer describing the HTTP status.  
<a name="HTTPResponse+setHTTPStatus"></a>

### htmlResponse.setHTTPStatus(status)
Set the the http status.

**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | an integer describing the HTTP status. |

<a name="HTTPResponse+getHTTPHeaders"></a>

### htmlResponse.getHTTPHeaders(headers)
Gets a key value map of HTTP headers.

**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="HTTPResponse+setHTTPHeaders"></a>

### htmlResponse.setHTTPHeaders(headers)
Sets a key value map of HTTP headers.

**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="Response+getError"></a>

### htmlResponse.getError() ⇒ [<code>Error</code>](#Error)
Get the user defined error for this response.

**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  
**Returns**: [<code>Error</code>](#Error) - user defined error response.  
<a name="Response+setError"></a>

### htmlResponse.setError(error)
Set the user defined error for this response.

**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| error | [<code>Error</code>](#Error) | user defined error object. |

<a name="Response+getValue"></a>

### htmlResponse.getValue() ⇒ <code>\*</code>
Set the value to return with this response. The value can
be set to any Object or primitive value but make sure the response
`type` matches the expected `value` type.

**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  
**Returns**: <code>\*</code> - user defined value.  
<a name="Response+setValue"></a>

### htmlResponse.setValue(value)
Set the value of this response.

**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of this response. |

<a name="Response+setCallback"></a>

### htmlResponse.setCallback(callback)
Set a callback function to run after the function has returned the response.

**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function to run. |

**Example**  
```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
<a name="Response+getType"></a>

### htmlResponse.getType() ⇒
**Kind**: instance method of [<code>HTMLResponse</code>](#HTMLResponse)  
**Returns**: the type of this response.  
<a name="HTTPResponse"></a>

## HTTPResponse ⇐ [<code>Response</code>](#Response)
An extended Response that includes HTTP specific properties. This
 type of response can be used for functions that are accessed via HTTP and need
 to use HTTP status codes and headers.

**Kind**: global class  
**Extends**: [<code>Response</code>](#Response)  

* [HTTPResponse](#HTTPResponse) ⇐ [<code>Response</code>](#Response)
    * [new HTTPResponse(config)](#new_HTTPResponse_new)
    * [.getHTTPStatus()](#HTTPResponse+getHTTPStatus) ⇒ <code>number</code>
    * [.setHTTPStatus(status)](#HTTPResponse+setHTTPStatus)
    * [.getHTTPHeaders(headers)](#HTTPResponse+getHTTPHeaders)
    * [.setHTTPHeaders(headers)](#HTTPResponse+setHTTPHeaders)
    * [.getError()](#Response+getError) ⇒ [<code>Error</code>](#Error)
    * [.setError(error)](#Response+setError)
    * [.getValue()](#Response+getValue) ⇒ <code>\*</code>
    * [.setValue(value)](#Response+setValue)
    * [.setCallback(callback)](#Response+setCallback)
    * [.getType()](#Response+getType) ⇒

<a name="new_HTTPResponse_new"></a>

### new HTTPResponse(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object. |
| config.status | <code>number</code> | an integer describing the HTTP status. |
| config.headers | <code>Object.&lt;string, string&gt;</code> | a key value map of headers. |
| config.type | <code>string</code> | type of response. |

**Example**  
```
  const HTTPResponse = require('smartsheet-plugin-sdk/response/http');
  const response = new HTTPResponse({ type: 'JSON' });
  response.setHTTPStatus(200);
  response.setHTTPHeaders({ 'Content-Type': 'application/json' });
  return response;

  // 200 Ok
  // Content-Type: "application/json"
  ```
<a name="HTTPResponse+getHTTPStatus"></a>

### httpResponse.getHTTPStatus() ⇒ <code>number</code>
Get the the http status.

**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  
**Returns**: <code>number</code> - an integer describing the HTTP status.  
<a name="HTTPResponse+setHTTPStatus"></a>

### httpResponse.setHTTPStatus(status)
Set the the http status.

**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | an integer describing the HTTP status. |

<a name="HTTPResponse+getHTTPHeaders"></a>

### httpResponse.getHTTPHeaders(headers)
Gets a key value map of HTTP headers.

**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="HTTPResponse+setHTTPHeaders"></a>

### httpResponse.setHTTPHeaders(headers)
Sets a key value map of HTTP headers.

**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="Response+getError"></a>

### httpResponse.getError() ⇒ [<code>Error</code>](#Error)
Get the user defined error for this response.

**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  
**Returns**: [<code>Error</code>](#Error) - user defined error response.  
<a name="Response+setError"></a>

### httpResponse.setError(error)
Set the user defined error for this response.

**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  

| Param | Type | Description |
| --- | --- | --- |
| error | [<code>Error</code>](#Error) | user defined error object. |

<a name="Response+getValue"></a>

### httpResponse.getValue() ⇒ <code>\*</code>
Set the value to return with this response. The value can
be set to any Object or primitive value but make sure the response
`type` matches the expected `value` type.

**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  
**Returns**: <code>\*</code> - user defined value.  
<a name="Response+setValue"></a>

### httpResponse.setValue(value)
Set the value of this response.

**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of this response. |

<a name="Response+setCallback"></a>

### httpResponse.setCallback(callback)
Set a callback function to run after the function has returned the response.

**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function to run. |

**Example**  
```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
<a name="Response+getType"></a>

### httpResponse.getType() ⇒
**Kind**: instance method of [<code>HTTPResponse</code>](#HTTPResponse)  
**Returns**: the type of this response.  
<a name="JSONResponse"></a>

## JSONResponse ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
An HTTPResponse with a return type of `JSON`.
 Use this response to return JSON from a function. If this type of response
 is used then `value` is expected to be a valid JavaScript Object - there
 is no need to stringify the value. This object also sets the Content-Type
 for HTTP calls to `application/json`.

**Kind**: global class  
**Extends**: [<code>HTTPResponse</code>](#HTTPResponse)  

* [JSONResponse](#JSONResponse) ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
    * [new JSONResponse(config)](#new_JSONResponse_new)
    * [.getHTTPStatus()](#HTTPResponse+getHTTPStatus) ⇒ <code>number</code>
    * [.setHTTPStatus(status)](#HTTPResponse+setHTTPStatus)
    * [.getHTTPHeaders(headers)](#HTTPResponse+getHTTPHeaders)
    * [.setHTTPHeaders(headers)](#HTTPResponse+setHTTPHeaders)
    * [.getError()](#Response+getError) ⇒ [<code>Error</code>](#Error)
    * [.setError(error)](#Response+setError)
    * [.getValue()](#Response+getValue) ⇒ <code>\*</code>
    * [.setValue(value)](#Response+setValue)
    * [.setCallback(callback)](#Response+setCallback)
    * [.getType()](#Response+getType) ⇒

<a name="new_JSONResponse_new"></a>

### new JSONResponse(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object. |
| config.value | <code>\*</code> | user returned value. |

**Example**  
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
<a name="HTTPResponse+getHTTPStatus"></a>

### jsonResponse.getHTTPStatus() ⇒ <code>number</code>
Get the the http status.

**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  
**Returns**: <code>number</code> - an integer describing the HTTP status.  
<a name="HTTPResponse+setHTTPStatus"></a>

### jsonResponse.setHTTPStatus(status)
Set the the http status.

**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | an integer describing the HTTP status. |

<a name="HTTPResponse+getHTTPHeaders"></a>

### jsonResponse.getHTTPHeaders(headers)
Gets a key value map of HTTP headers.

**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="HTTPResponse+setHTTPHeaders"></a>

### jsonResponse.setHTTPHeaders(headers)
Sets a key value map of HTTP headers.

**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="Response+getError"></a>

### jsonResponse.getError() ⇒ [<code>Error</code>](#Error)
Get the user defined error for this response.

**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  
**Returns**: [<code>Error</code>](#Error) - user defined error response.  
<a name="Response+setError"></a>

### jsonResponse.setError(error)
Set the user defined error for this response.

**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  

| Param | Type | Description |
| --- | --- | --- |
| error | [<code>Error</code>](#Error) | user defined error object. |

<a name="Response+getValue"></a>

### jsonResponse.getValue() ⇒ <code>\*</code>
Set the value to return with this response. The value can
be set to any Object or primitive value but make sure the response
`type` matches the expected `value` type.

**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  
**Returns**: <code>\*</code> - user defined value.  
<a name="Response+setValue"></a>

### jsonResponse.setValue(value)
Set the value of this response.

**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of this response. |

<a name="Response+setCallback"></a>

### jsonResponse.setCallback(callback)
Set a callback function to run after the function has returned the response.

**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function to run. |

**Example**  
```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
<a name="Response+getType"></a>

### jsonResponse.getType() ⇒
**Kind**: instance method of [<code>JSONResponse</code>](#JSONResponse)  
**Returns**: the type of this response.  
<a name="OAuth2Start"></a>

## OAuth2Start ⇐ [<code>Response</code>](#Response)
A Response with a return type of `JSON`.
 This response is used to start an OAuth2 process by providing the caller
 with the details specific to the external authentication system. The caller
 will then initiate the OAuth2 process with the given details.

**Kind**: global class  
**Extends**: [<code>Response</code>](#Response)  

* [OAuth2Start](#OAuth2Start) ⇐ [<code>Response</code>](#Response)
    * [new OAuth2Start(config)](#new_OAuth2Start_new)
    * [.setOAuth2URI(oAuth2URL)](#OAuth2Start+setOAuth2URI)
    * [.setClientID(clientId)](#OAuth2Start+setClientID)
    * [.setScope(scope)](#OAuth2Start+setScope)
    * [.setState([state])](#OAuth2Start+setState)
    * [.setExtraParams([extraParams])](#OAuth2Start+setExtraParams)
    * [.getError()](#Response+getError) ⇒ [<code>Error</code>](#Error)
    * [.setError(error)](#Response+setError)
    * [.getValue()](#Response+getValue) ⇒ <code>\*</code>
    * [.setValue(value)](#Response+setValue)
    * [.setCallback(callback)](#Response+setCallback)
    * [.getType()](#Response+getType) ⇒

<a name="new_OAuth2Start_new"></a>

### new OAuth2Start(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object. |
| config.oAuth2URL | <code>string</code> | the OAuth2 URI. |
| config.clientId | <code>string</code> | the OAuth2 Client ID. |
| config.scope | <code>string</code> | the OAuth2 scope. |
| config.state | <code>string</code> | the OAuth2 state. |
| config.extraParams | <code>Object</code> | the OAuth2 URL parameters. |

<a name="OAuth2Start+setOAuth2URI"></a>

### oAuth2Start.setOAuth2URI(oAuth2URL)
Sets the URI for the OAuth2 payload. Get parameters will be
discarded from this string, use setExtraParams to pass parameters.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| oAuth2URL | <code>string</code> | the OAuth2 URI. |

<a name="OAuth2Start+setClientID"></a>

### oAuth2Start.setClientID(clientId)
Sets the Client ID for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| clientId | <code>string</code> | the OAuth2 Client ID. |

<a name="OAuth2Start+setScope"></a>

### oAuth2Start.setScope(scope)
Sets the scope for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| scope | <code>string</code> | the OAuth2 scope. |

<a name="OAuth2Start+setState"></a>

### oAuth2Start.setState([state])
Sets the state for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [state] | <code>string</code> | the OAuth2 state. |

<a name="OAuth2Start+setExtraParams"></a>

### oAuth2Start.setExtraParams([extraParams])
Sets the parameters to be attached to URL for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [extraParams] | <code>Object</code> | the OAuth2 URL parameters. |

<a name="Response+getError"></a>

### oAuth2Start.getError() ⇒ [<code>Error</code>](#Error)
Get the user defined error for this response.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  
**Returns**: [<code>Error</code>](#Error) - user defined error response.  
<a name="Response+setError"></a>

### oAuth2Start.setError(error)
Set the user defined error for this response.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  

| Param | Type | Description |
| --- | --- | --- |
| error | [<code>Error</code>](#Error) | user defined error object. |

<a name="Response+getValue"></a>

### oAuth2Start.getValue() ⇒ <code>\*</code>
Set the value to return with this response. The value can
be set to any Object or primitive value but make sure the response
`type` matches the expected `value` type.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  
**Returns**: <code>\*</code> - user defined value.  
<a name="Response+setValue"></a>

### oAuth2Start.setValue(value)
Set the value of this response.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of this response. |

<a name="Response+setCallback"></a>

### oAuth2Start.setCallback(callback)
Set a callback function to run after the function has returned the response.

**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function to run. |

**Example**  
```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
<a name="Response+getType"></a>

### oAuth2Start.getType() ⇒
**Kind**: instance method of [<code>OAuth2Start</code>](#OAuth2Start)  
**Returns**: the type of this response.  
<a name="OAuth2Token"></a>

## OAuth2Token ⇐ [<code>Response</code>](#Response)
A Response with a return type of `JSON`.
 This response is used during an OAuth2 process by providing the caller
 with the details specific to the external authentication system.

**Kind**: global class  
**Extends**: [<code>Response</code>](#Response)  

* [OAuth2Token](#OAuth2Token) ⇐ [<code>Response</code>](#Response)
    * [new OAuth2Token(config)](#new_OAuth2Token_new)
    * [.setAccessToken(access_token)](#OAuth2Token+setAccessToken)
    * [.setTokenType(token_type)](#OAuth2Token+setTokenType)
    * [.setRefreshToken(refresh_token)](#OAuth2Token+setRefreshToken)
    * [.setExpiresIn(expires_in)](#OAuth2Token+setExpiresIn)
    * [.setGrantType(grant_type)](#OAuth2Token+setGrantType)
    * [.setMetadata([metadata])](#OAuth2Token+setMetadata)
    * [.setRedirectURL([redirectURL])](#OAuth2Token+setRedirectURL)
    * [.setMessage([message])](#OAuth2Token+setMessage)
    * [.getError()](#Response+getError) ⇒ [<code>Error</code>](#Error)
    * [.setError(error)](#Response+setError)
    * [.getValue()](#Response+getValue) ⇒ <code>\*</code>
    * [.setValue(value)](#Response+setValue)
    * [.setCallback(callback)](#Response+setCallback)
    * [.getType()](#Response+getType) ⇒

<a name="new_OAuth2Token_new"></a>

### new OAuth2Token(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object. |
| config.access_token | <code>string</code> | OAuth2 access token. |
| config.token_type | <code>string</code> | OAuth2 token type. |
| config.refresh_token | <code>string</code> | OAuth2 refresh token. |
| config.expires_in | <code>string</code> | OAuth2 expiry time. |
| config.grant_type | <code>Object</code> | OAuth2 grant type. |
| config.metadata | <code>Object</code> | A Key/Value map of metadata. |
| config.redirectURL | <code>Object</code> | OAuth2 redirect URL. |
| config.message | <code>Object</code> | OAuth2 user message. |

<a name="OAuth2Token+setAccessToken"></a>

### oAuth2Token.setAccessToken(access_token)
Sets the access token for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| access_token | <code>string</code> | OAuth2 access token. |

<a name="OAuth2Token+setTokenType"></a>

### oAuth2Token.setTokenType(token_type)
Sets the token type for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| token_type | <code>string</code> | OAuth2 token type. |

<a name="OAuth2Token+setRefreshToken"></a>

### oAuth2Token.setRefreshToken(refresh_token)
Sets the refresh token for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| refresh_token | <code>string</code> | OAuth2 refresh token. |

<a name="OAuth2Token+setExpiresIn"></a>

### oAuth2Token.setExpiresIn(expires_in)
Sets the expiry time for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| expires_in | <code>string</code> | OAuth2 expiry time. |

<a name="OAuth2Token+setGrantType"></a>

### oAuth2Token.setGrantType(grant_type)
Sets the grant type for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| grant_type | <code>string</code> | OAuth2 grant type. |

<a name="OAuth2Token+setMetadata"></a>

### oAuth2Token.setMetadata([metadata])
Sets the metadata for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [metadata] | <code>Object</code> | A Key/Value map of metadata. |

<a name="OAuth2Token+setRedirectURL"></a>

### oAuth2Token.setRedirectURL([redirectURL])
Sets the redirect URL for the OAuth2 payload.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [redirectURL] | <code>string</code> | OAuth2 redirect URL. |

<a name="OAuth2Token+setMessage"></a>

### oAuth2Token.setMessage([message])
Sets the user message for the OAuth2 payload.
If redirect URL is set then this value is ignored.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [message] | <code>string</code> | OAuth2 user message. |

<a name="Response+getError"></a>

### oAuth2Token.getError() ⇒ [<code>Error</code>](#Error)
Get the user defined error for this response.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Returns**: [<code>Error</code>](#Error) - user defined error response.  
<a name="Response+setError"></a>

### oAuth2Token.setError(error)
Set the user defined error for this response.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  

| Param | Type | Description |
| --- | --- | --- |
| error | [<code>Error</code>](#Error) | user defined error object. |

<a name="Response+getValue"></a>

### oAuth2Token.getValue() ⇒ <code>\*</code>
Set the value to return with this response. The value can
be set to any Object or primitive value but make sure the response
`type` matches the expected `value` type.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Returns**: <code>\*</code> - user defined value.  
<a name="Response+setValue"></a>

### oAuth2Token.setValue(value)
Set the value of this response.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of this response. |

<a name="Response+setCallback"></a>

### oAuth2Token.setCallback(callback)
Set a callback function to run after the function has returned the response.

**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function to run. |

**Example**  
```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
<a name="Response+getType"></a>

### oAuth2Token.getType() ⇒
**Kind**: instance method of [<code>OAuth2Token</code>](#OAuth2Token)  
**Returns**: the type of this response.  
<a name="Response"></a>

## *Response*
An abstract response object for functions.

**Kind**: global abstract class  

* *[Response](#Response)*
    * *[new Response(config)](#new_Response_new)*
    * *[.getError()](#Response+getError) ⇒ [<code>Error</code>](#Error)*
    * *[.setError(error)](#Response+setError)*
    * *[.getValue()](#Response+getValue) ⇒ <code>\*</code>*
    * *[.setValue(value)](#Response+setValue)*
    * *[.setCallback(callback)](#Response+setCallback)*
    * *[.getType()](#Response+getType) ⇒*

<a name="new_Response_new"></a>

### *new Response(config)*
Create a Response of type.


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object. |
| config.type | <code>string</code> | the type of response. |

<a name="Response+getError"></a>

### *response.getError() ⇒ [<code>Error</code>](#Error)*
Get the user defined error for this response.

**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: [<code>Error</code>](#Error) - user defined error response.  
<a name="Response+setError"></a>

### *response.setError(error)*
Set the user defined error for this response.

**Kind**: instance method of [<code>Response</code>](#Response)  

| Param | Type | Description |
| --- | --- | --- |
| error | [<code>Error</code>](#Error) | user defined error object. |

<a name="Response+getValue"></a>

### *response.getValue() ⇒ <code>\*</code>*
Set the value to return with this response. The value can
be set to any Object or primitive value but make sure the response
`type` matches the expected `value` type.

**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: <code>\*</code> - user defined value.  
<a name="Response+setValue"></a>

### *response.setValue(value)*
Set the value of this response.

**Kind**: instance method of [<code>Response</code>](#Response)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of this response. |

<a name="Response+setCallback"></a>

### *response.setCallback(callback)*
Set a callback function to run after the function has returned the response.

**Kind**: instance method of [<code>Response</code>](#Response)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function to run. |

**Example**  
```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
<a name="Response+getType"></a>

### *response.getType() ⇒*
**Kind**: instance method of [<code>Response</code>](#Response)  
**Returns**: the type of this response.  
<a name="TEXTResponse"></a>

## TEXTResponse ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
An HTTPResponse with a return type of `TEXT`.
 Use this response to return TEXT from a function. If this type of response
 is used then `value` is expected to be a string with a valid string.
 This object also sets the Content-Type for HTTP calls to `text/plain`.

**Kind**: global class  
**Extends**: [<code>HTTPResponse</code>](#HTTPResponse)  

* [TEXTResponse](#TEXTResponse) ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
    * [new TEXTResponse(config)](#new_TEXTResponse_new)
    * [.getHTTPStatus()](#HTTPResponse+getHTTPStatus) ⇒ <code>number</code>
    * [.setHTTPStatus(status)](#HTTPResponse+setHTTPStatus)
    * [.getHTTPHeaders(headers)](#HTTPResponse+getHTTPHeaders)
    * [.setHTTPHeaders(headers)](#HTTPResponse+setHTTPHeaders)
    * [.getError()](#Response+getError) ⇒ [<code>Error</code>](#Error)
    * [.setError(error)](#Response+setError)
    * [.getValue()](#Response+getValue) ⇒ <code>\*</code>
    * [.setValue(value)](#Response+setValue)
    * [.setCallback(callback)](#Response+setCallback)
    * [.getType()](#Response+getType) ⇒

<a name="new_TEXTResponse_new"></a>

### new TEXTResponse(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object. |
| config.value | <code>\*</code> | user returned value. |

**Example**  
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
<a name="HTTPResponse+getHTTPStatus"></a>

### textResponse.getHTTPStatus() ⇒ <code>number</code>
Get the the http status.

**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  
**Returns**: <code>number</code> - an integer describing the HTTP status.  
<a name="HTTPResponse+setHTTPStatus"></a>

### textResponse.setHTTPStatus(status)
Set the the http status.

**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | an integer describing the HTTP status. |

<a name="HTTPResponse+getHTTPHeaders"></a>

### textResponse.getHTTPHeaders(headers)
Gets a key value map of HTTP headers.

**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="HTTPResponse+setHTTPHeaders"></a>

### textResponse.setHTTPHeaders(headers)
Sets a key value map of HTTP headers.

**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="Response+getError"></a>

### textResponse.getError() ⇒ [<code>Error</code>](#Error)
Get the user defined error for this response.

**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  
**Returns**: [<code>Error</code>](#Error) - user defined error response.  
<a name="Response+setError"></a>

### textResponse.setError(error)
Set the user defined error for this response.

**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  

| Param | Type | Description |
| --- | --- | --- |
| error | [<code>Error</code>](#Error) | user defined error object. |

<a name="Response+getValue"></a>

### textResponse.getValue() ⇒ <code>\*</code>
Set the value to return with this response. The value can
be set to any Object or primitive value but make sure the response
`type` matches the expected `value` type.

**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  
**Returns**: <code>\*</code> - user defined value.  
<a name="Response+setValue"></a>

### textResponse.setValue(value)
Set the value of this response.

**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of this response. |

<a name="Response+setCallback"></a>

### textResponse.setCallback(callback)
Set a callback function to run after the function has returned the response.

**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function to run. |

**Example**  
```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
<a name="Response+getType"></a>

### textResponse.getType() ⇒
**Kind**: instance method of [<code>TEXTResponse</code>](#TEXTResponse)  
**Returns**: the type of this response.  
<a name="XMLResponse"></a>

## XMLResponse ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
An HTTPResponse with a return type of `XML`.
 Use this response to return XML from a function. If this type of response
 is used then `value` is expected to be a string with valid XML.
 This object also sets the Content-Type for HTTP calls to `text/xml`.

**Kind**: global class  
**Extends**: [<code>HTTPResponse</code>](#HTTPResponse)  

* [XMLResponse](#XMLResponse) ⇐ [<code>HTTPResponse</code>](#HTTPResponse)
    * [new XMLResponse(config)](#new_XMLResponse_new)
    * [.getHTTPStatus()](#HTTPResponse+getHTTPStatus) ⇒ <code>number</code>
    * [.setHTTPStatus(status)](#HTTPResponse+setHTTPStatus)
    * [.getHTTPHeaders(headers)](#HTTPResponse+getHTTPHeaders)
    * [.setHTTPHeaders(headers)](#HTTPResponse+setHTTPHeaders)
    * [.getError()](#Response+getError) ⇒ [<code>Error</code>](#Error)
    * [.setError(error)](#Response+setError)
    * [.getValue()](#Response+getValue) ⇒ <code>\*</code>
    * [.setValue(value)](#Response+setValue)
    * [.setCallback(callback)](#Response+setCallback)
    * [.getType()](#Response+getType) ⇒

<a name="new_XMLResponse_new"></a>

### new XMLResponse(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object. |
| config.value | <code>\*</code> | user returned value. |

**Example**  
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
<a name="HTTPResponse+getHTTPStatus"></a>

### xmlResponse.getHTTPStatus() ⇒ <code>number</code>
Get the the http status.

**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  
**Returns**: <code>number</code> - an integer describing the HTTP status.  
<a name="HTTPResponse+setHTTPStatus"></a>

### xmlResponse.setHTTPStatus(status)
Set the the http status.

**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | an integer describing the HTTP status. |

<a name="HTTPResponse+getHTTPHeaders"></a>

### xmlResponse.getHTTPHeaders(headers)
Gets a key value map of HTTP headers.

**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="HTTPResponse+setHTTPHeaders"></a>

### xmlResponse.setHTTPHeaders(headers)
Sets a key value map of HTTP headers.

**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object.&lt;string, string&gt;</code> | a key value map of HTTP headers. |

<a name="Response+getError"></a>

### xmlResponse.getError() ⇒ [<code>Error</code>](#Error)
Get the user defined error for this response.

**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  
**Returns**: [<code>Error</code>](#Error) - user defined error response.  
<a name="Response+setError"></a>

### xmlResponse.setError(error)
Set the user defined error for this response.

**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| error | [<code>Error</code>](#Error) | user defined error object. |

<a name="Response+getValue"></a>

### xmlResponse.getValue() ⇒ <code>\*</code>
Set the value to return with this response. The value can
be set to any Object or primitive value but make sure the response
`type` matches the expected `value` type.

**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  
**Returns**: <code>\*</code> - user defined value.  
<a name="Response+setValue"></a>

### xmlResponse.setValue(value)
Set the value of this response.

**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value of this response. |

<a name="Response+setCallback"></a>

### xmlResponse.setCallback(callback)
Set a callback function to run after the function has returned the response.

**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | the function to run. |

**Example**  
```
    response.setCallback(() => {
      //this will trigger after the response has returned.
      setTimeout(() => {
        //this will trigger 5 seconds after the response has returned.
      }, 5000);
    });
    return response;
   ```
<a name="Response+getType"></a>

### xmlResponse.getType() ⇒
**Kind**: instance method of [<code>XMLResponse</code>](#XMLResponse)  
**Returns**: the type of this response.  
<a name="Error"></a>

## Error
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | an http status code. |
| code | <code>string</code> | a machine-readable string. |
| message | <code>string</code> | a human-readable string. |

