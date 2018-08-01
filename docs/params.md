## Classes

<dl>
<dt><a href="#FuncData">FuncData</a></dt>
<dd><p>The second argument passed into a user&#39;s function will be an
 subclass of FuncData. FuncData provides one method that will allow access
 to parameters passed into the function, either directly or via form data,
 the body, or query parameters.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#FunctionConfig">FunctionConfig</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#FunctionConfigData">FunctionConfigData</a> : <code>Object</code></dt>
<dd><p>Internal data that may be passed to the function.</p>
</dd>
<dt><a href="#FunctionConfigHttp">FunctionConfigHttp</a> : <code>Object</code></dt>
<dd><p>Data that may be passed in via an HTTP call.</p>
</dd>
</dl>

<a name="FuncData"></a>

## *FuncData*
The second argument passed into a user's function will be an
 subclass of FuncData. FuncData provides one method that will allow access
 to parameters passed into the function, either directly or via form data,
 the body, or query parameters.

**Kind**: global abstract class  

* *[FuncData](#FuncData)*
    * *[new FuncData(config)](#new_FuncData_new)*
    * *[.get(property)](#FuncData+get) ⇒ <code>\*</code>*

<a name="new_FuncData_new"></a>

### *new FuncData(config)*

| Param | Type |
| --- | --- |
| config | [<code>FunctionConfig</code>](#FunctionConfig) | 

**Example**  
```
  function(meta, params) {
    const abc = params.get('abc');
    // `abc` will be equal to `funcData.abc` of the payload. If the property
    // can't be found then `formData.abc` or `body.abc` of the HTTP `POST` payload
    // will be used. If it still can't be found then it will be equal to
    // `queryParams.abc` of the payload.

    const def = params.def;
    // In most cases, when a function is created via the Smartsheet CLI tool, and
    // parameters are added then a corresponding subclass is created that will allow
    // defined parameters to be accessed like the above. In this example, if a parameter
    // was defined as `def` then the value of `def` will be decided through the same
    // process as `abc` above.
  }
  ```
<a name="FuncData+get"></a>

### *funcData.get(property) ⇒ <code>\*</code>*
Finds and returns the value of `property` from the payload data.
First checks the value of `property` on `funcData`, then `formData`
from an HTTP POST call, then `body` from an HTTP POST call, and
finally `queryParams`.

**Kind**: instance method of [<code>FuncData</code>](#FuncData)  
**Returns**: <code>\*</code> - the value of `property` found on the payload.  

| Param | Type | Description |
| --- | --- | --- |
| property | <code>string</code> | the name of the property/parameter to get. |

<a name="FunctionConfig"></a>

## FunctionConfig : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| funcData | [<code>FunctionConfigData</code>](#FunctionConfigData) | 
| httpData | [<code>FunctionConfigHttp</code>](#FunctionConfigHttp) | 

<a name="FunctionConfigData"></a>

## FunctionConfigData : <code>Object</code>
Internal data that may be passed to the function.

**Kind**: global typedef  
<a name="FunctionConfigHttp"></a>

## FunctionConfigHttp : <code>Object</code>
Data that may be passed in via an HTTP call.

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| body | <code>Object</code> | 
| formData | <code>Object</code> | 
| queryParams | <code>Object</code> | 

