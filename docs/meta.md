## Classes

<dl>
<dt><a href="#CallerData">CallerData</a></dt>
<dd><p>A meta data class that holds information regarding a specific caller data object.</p>
</dd>
<dt><a href="#Caller">Caller</a></dt>
<dd><p>A meta data object that holds all the caller data for
 user, organization, and workspace.</p>
</dd>
<dt><a href="#MetaData">MetaData</a></dt>
<dd><p>This class contains all the meta data from the caller that is passed into
 a function. MetaData gives the function developer access to the caller data, registration data,
 plugin data, or oAuth2 data at user, workspace, or organization level.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CallerDataObject">CallerDataObject</a></dt>
<dd></dd>
<dt><a href="#CallToken">CallToken</a></dt>
<dd></dd>
<dt><a href="#CallerObject">CallerObject</a></dt>
<dd></dd>
<dt><a href="#OAuth2Info">OAuth2Info</a></dt>
<dd></dd>
<dt><a href="#RegistrationData">RegistrationData</a></dt>
<dd><p>An object containing all the registration data for each scope: user,
organisation, and workspace. The <code>registrationData</code> object is attached to the MetaData
object for every function including the special case functions of <code>onPluginRegister</code>
and <code>onPluginUnregister</code>.</p>
</dd>
</dl>

<a name="CallerData"></a>

## CallerData
A meta data class that holds information regarding a specific caller data object.

**Kind**: global class  

* [CallerData](#CallerData)
    * [new CallerData(config)](#new_CallerData_new)
    * [.uuid](#CallerData+uuid) : <code>string</code>
    * [.data](#CallerData+data) : <code>string</code>

<a name="new_CallerData_new"></a>

### new CallerData(config)

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>CallerDataObject</code>](#CallerDataObject) | caller data object |

<a name="CallerData+uuid"></a>

### callerData.uuid : <code>string</code>
A universal unique identifier for this particular caller object.

**Kind**: instance property of [<code>CallerData</code>](#CallerData)  
<a name="CallerData+data"></a>

### callerData.data : <code>string</code>
Data for this particular caller object.

**Kind**: instance property of [<code>CallerData</code>](#CallerData)  
<a name="Caller"></a>

## Caller
A meta data object that holds all the caller data for
 user, organization, and workspace.

**Kind**: global class  

* [Caller](#Caller)
    * [new Caller(config)](#new_Caller_new)
    * [.user](#Caller+user) : [<code>CallerData</code>](#CallerData)
    * [.organization](#Caller+organization) : [<code>CallerData</code>](#CallerData)
    * [.workspace](#Caller+workspace) : [<code>CallerData</code>](#CallerData)

<a name="new_Caller_new"></a>

### new Caller(config)

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>CallerObject</code>](#CallerObject) | configuration object. |

<a name="Caller+user"></a>

### caller.user : [<code>CallerData</code>](#CallerData)
Information for the user specific caller data.

**Kind**: instance property of [<code>Caller</code>](#Caller)  
<a name="Caller+organization"></a>

### caller.organization : [<code>CallerData</code>](#CallerData)
Information for the organization specific caller data.

**Kind**: instance property of [<code>Caller</code>](#Caller)  
<a name="Caller+workspace"></a>

### caller.workspace : [<code>CallerData</code>](#CallerData)
Information for the workspace specific caller data.

**Kind**: instance property of [<code>Caller</code>](#Caller)  
<a name="MetaData"></a>

## MetaData
This class contains all the meta data from the caller that is passed into
 a function. MetaData gives the function developer access to the caller data, registration data,
 plugin data, or oAuth2 data at user, workspace, or organization level.

**Kind**: global class  

* [MetaData](#MetaData)
    * [new MetaData(config)](#new_MetaData_new)
    * [.caller](#MetaData+caller) : [<code>Caller</code>](#Caller)
    * [.registrationData](#MetaData+registrationData) : [<code>RegistrationData</code>](#RegistrationData)
    * [.getPluginDataForUser(key, [userUUID])](#MetaData+getPluginDataForUser) ⇒ <code>\*</code>
    * [.setPluginDataForUser(key, data, [userUUID])](#MetaData+setPluginDataForUser) ⇒ <code>\*</code>
    * [.deletePluginDataForUser(key, [userUUID])](#MetaData+deletePluginDataForUser)
    * [.getPluginDataForOrganization(key)](#MetaData+getPluginDataForOrganization) ⇒ <code>\*</code>
    * [.setPluginDataForOrganization(key, data)](#MetaData+setPluginDataForOrganization) ⇒ <code>\*</code>
    * [.deletePluginDataForOrganization(key)](#MetaData+deletePluginDataForOrganization)
    * [.getOAuth2InfoForUser()](#MetaData+getOAuth2InfoForUser) ⇒ [<code>OAuth2Info</code>](#OAuth2Info)
    * [.setOAuth2InfoForUser(oAuth2Data, [userUUID])](#MetaData+setOAuth2InfoForUser) ⇒ [<code>OAuth2Info</code>](#OAuth2Info)
    * [.deleteOAuth2InfoForUser()](#MetaData+deleteOAuth2InfoForUser)
    * [.getOAuth2InfoForOrganization()](#MetaData+getOAuth2InfoForOrganization) ⇒ [<code>OAuth2Info</code>](#OAuth2Info)
    * [.setOAuth2InfoForOrganization(oAuth2Data)](#MetaData+setOAuth2InfoForOrganization) ⇒ [<code>OAuth2Info</code>](#OAuth2Info)
    * [.deleteOAuth2InfoForOrganization()](#MetaData+deleteOAuth2InfoForOrganization)

<a name="new_MetaData_new"></a>

### new MetaData(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | configuration object. |
| config.caller | [<code>CallerObject</code>](#CallerObject) | caller object. |
| config.registrationData | <code>Object</code> | registrationData object. |

<a name="MetaData+caller"></a>

### metaData.caller : [<code>Caller</code>](#Caller)
Metadata about the incoming request.

**Kind**: instance property of [<code>MetaData</code>](#MetaData)  
<a name="MetaData+registrationData"></a>

### metaData.registrationData : [<code>RegistrationData</code>](#RegistrationData)
Registration data for the incoming request. The registrationData object
consists of all three scopes: user, organization, and workspace and is
attached to every function call.

**Kind**: instance property of [<code>MetaData</code>](#MetaData)  
<a name="MetaData+getPluginDataForUser"></a>

### metaData.getPluginDataForUser(key, [userUUID]) ⇒ <code>\*</code>
Gets the plugin data stored against the given key and user.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
**Returns**: <code>\*</code> - the stored data.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | a key that data is stored against. |
| [userUUID] | <code>string</code> | the user UUID the data is stored against. |

<a name="MetaData+setPluginDataForUser"></a>

### metaData.setPluginDataForUser(key, data, [userUUID]) ⇒ <code>\*</code>
Sets and overrides the data on a given key and user.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
**Returns**: <code>\*</code> - the newly stored data.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | a unique key that data is stored against. |
| data | <code>\*</code> | data to store. |
| [userUUID] | <code>string</code> | the user UUID the data is stored against. |

<a name="MetaData+deletePluginDataForUser"></a>

### metaData.deletePluginDataForUser(key, [userUUID])
Deletes the data on a given key and user.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | a key that data is stored against. |
| [userUUID] | <code>string</code> | the user UUID the data is stored against. |

<a name="MetaData+getPluginDataForOrganization"></a>

### metaData.getPluginDataForOrganization(key) ⇒ <code>\*</code>
Gets the plugin data for an organization stored against the given key.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
**Returns**: <code>\*</code> - the stored data.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | a key that data is stored against. |

<a name="MetaData+setPluginDataForOrganization"></a>

### metaData.setPluginDataForOrganization(key, data) ⇒ <code>\*</code>
Sets and overrides the data for an organization on a given key.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
**Returns**: <code>\*</code> - the newly stored data.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | a unique key that data is stored against. |
| data | <code>\*</code> | data to store. |

<a name="MetaData+deletePluginDataForOrganization"></a>

### metaData.deletePluginDataForOrganization(key)
Deletes the data for an organization on a given key.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | a key that data is stored against. |

<a name="MetaData+getOAuth2InfoForUser"></a>

### metaData.getOAuth2InfoForUser() ⇒ [<code>OAuth2Info</code>](#OAuth2Info)
Gets the OAuth2 information for the current user.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
**Returns**: [<code>OAuth2Info</code>](#OAuth2Info) - OAuth2 information.  
<a name="MetaData+setOAuth2InfoForUser"></a>

### metaData.setOAuth2InfoForUser(oAuth2Data, [userUUID]) ⇒ [<code>OAuth2Info</code>](#OAuth2Info)
Override the OAuth2 information for the current user.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
**Returns**: [<code>OAuth2Info</code>](#OAuth2Info) - OAuth2 information.  

| Param | Type | Description |
| --- | --- | --- |
| oAuth2Data | [<code>OAuth2Info</code>](#OAuth2Info) | OAuth2 information to override with. |
| [userUUID] | <code>string</code> | the user UUID the OAuth2 information should be overriden for. |

<a name="MetaData+deleteOAuth2InfoForUser"></a>

### metaData.deleteOAuth2InfoForUser()
Delete the OAuth2 information for the current user.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
<a name="MetaData+getOAuth2InfoForOrganization"></a>

### metaData.getOAuth2InfoForOrganization() ⇒ [<code>OAuth2Info</code>](#OAuth2Info)
Gets the OAuth2 information for the current organization.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
**Returns**: [<code>OAuth2Info</code>](#OAuth2Info) - OAuth2 information.  
<a name="MetaData+setOAuth2InfoForOrganization"></a>

### metaData.setOAuth2InfoForOrganization(oAuth2Data) ⇒ [<code>OAuth2Info</code>](#OAuth2Info)
Override the OAuth2 information for the current organization.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
**Returns**: [<code>OAuth2Info</code>](#OAuth2Info) - OAuth2 information.  

| Param | Type | Description |
| --- | --- | --- |
| oAuth2Data | [<code>OAuth2Info</code>](#OAuth2Info) | OAuth2 information to override with. |

<a name="MetaData+deleteOAuth2InfoForOrganization"></a>

### metaData.deleteOAuth2InfoForOrganization()
Delete the OAuth2 information for the current organization.

**Kind**: instance method of [<code>MetaData</code>](#MetaData)  
<a name="CallerDataObject"></a>

## CallerDataObject
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| uuid | <code>string</code> | 
| data | <code>Object</code> | 

<a name="CallToken"></a>

## CallToken
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| validUntil | <code>number</code> | a timestamp that this callToken is valid to. |
| signature | <code>Object</code> | a unique validation token for the plugindata service. |
| payload | <code>Object</code> |  |
| payload.pluginUUID | <code>string</code> | the plugin UUID. |
| payload.organizationUUID | <code>string</code> | the organization UUID. |
| payload.workspaceUUID | <code>string</code> | the workspace UUID. |

<a name="CallerObject"></a>

## CallerObject
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user | [<code>CallerDataObject</code>](#CallerDataObject) |  |
| organization | [<code>CallerDataObject</code>](#CallerDataObject) |  |
| workspace | [<code>CallerDataObject</code>](#CallerDataObject) |  |
| callToken | [<code>CallToken</code>](#CallToken) |  |
| pluginURI | <code>string</code> | a uri to the current plugin. |

<a name="OAuth2Info"></a>

## OAuth2Info
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| access_token | <code>string</code> | 
| token_type | <code>string</code> | 
| refresh_token | <code>string</code> | 
| expires_in | <code>number</code> | 
| grant_type | <code>string</code> | 
| redirect_uri | <code>string</code> | 
| metadata | <code>Object.&lt;string, string&gt;</code> | 

<a name="RegistrationData"></a>

## RegistrationData
An object containing all the registration data for each scope: user,
organisation, and workspace. The `registrationData` object is attached to the MetaData
object for every function including the special case functions of `onPluginRegister`
and `onPluginUnregister`.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user | <code>Object.&lt;string, \*&gt;</code> | a map of registration data stored against the user. |
| organization | <code>Object.&lt;string, \*&gt;</code> | a map of registration data stored against the organisation. |
| workspace | <code>Object.&lt;string, \*&gt;</code> | a map of registration data stored against the workspace. |

**Example**  
To set or unset registration data we can create a function called `onPluginRegister`
or `onPluginUnregister` respectively. Within these functions we can still access the
all scopes of the `registrationData` but can only update the Registration Data of the
scope that's currently being executed in `onPluginRegister`. To do this simply pass a
JSONResponse with an `update` property set to `true` and a `registrationData` set to the
full registration data you wish to set. Setting the `registrationData` to undefined will
be treated as a success but will not override any data.
  ```javascript
  // onPluginRegiser.js
  ...
  const response = new JSONResponse();
  response.setValue(
    {
      update: true,
      registrationData: {
        regOne: 'abc',
        regTwo: {
          a: 'a',
          b: 'b'
        }
      },
    },
  );
  return response;

  // myFunction.js
  ...
  const existingOrgRegData = meta.registrationData.organization;
  existingOrgRegData.regOne; // 'abc';
  existingOrgRegData.regTwo; // { a: 'a', b: 'b' };
  ...
  ```
