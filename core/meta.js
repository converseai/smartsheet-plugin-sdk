/*
eslint class-methods-use-this: off,
getter-return: off,
no-empty-function: off,
no-console: off
*/
const _ = require('lodash');
const PluginData = require('smartsheet-plugindata-sdk/plugindata');
const { StatsD } = require('smartsheet-statsd-client');

let grpc;
if (!_.isNil(process.env.PLUGINDATA_SERVICE)) {
  grpc = new PluginData(process.env.PLUGINDATA_SERVICE);
}

function pluginCaller(caller) {
  return {
    userUUID: caller.user.uuid,
    organizationUUID: caller.organization.uuid,
    workspaceUUID: caller.workspace.uuid,
    callToken: caller.callToken,
  };
}

/**
 * @class CallerData
 * @classdesc A meta data class that holds information regarding a specific caller data object.
 * @param {CallerDataObject} config caller data object
 */
class CallerData {
  constructor({ uuid, data } = {}) {
    Object.defineProperty(this, 'uuid', { get: () => (uuid), enumerable: true });
    Object.defineProperty(this, 'data', { get: () => (data), enumerable: true });
  }

  /**
   * A universal unique identifier for this particular caller object.
   * @type string
   */
  get uuid() {}

  /**
   * Data for this particular caller object.
   * @type string
   */
  get data() {}
}

/**
 * @class Caller
 * @classdesc A meta data object that holds all the caller data for
 *  user, organization, and workspace.
 * @param {CallerObject} config configuration object.
 */
class Caller {
  constructor({ user, organization, workspace, callToken, pluginURI } = {}) {
    const uData = new CallerData(user);
    const pData = new CallerData(organization);
    const wData = new CallerData(workspace);
    Object.defineProperty(this, 'user', { get: () => uData, enumerable: true });
    Object.defineProperty(this, 'organization', { get: () => pData, enumerable: true });
    Object.defineProperty(this, 'workspace', { get: () => wData, enumerable: true });
    Object.defineProperty(this, 'callToken', { get: () => callToken, enumerable: true });
    Object.defineProperty(this, 'pluginURI', { get: () => pluginURI, enumerable: true });
  }

  /**
   * Information for the user specific caller data.
   * @type CallerData
   */
  get user() {}

  /**
   * Information for the organization specific caller data.
   * @type CallerData
   */
  get organization() {}

  /**
   * Information for the workspace specific caller data.
   * @type CallerData
   */
  get workspace() {}
}

/**
 * @class MetaData
 * @classdesc This class contains all the meta data from the caller that is passed into
 *  a function. MetaData gives the function developer access to the caller data, registration data,
 *  plugin data, or oAuth2 data at user, workspace, or organization level.
 * @param {Object} config configuration object.
 * @param {CallerObject} config.caller caller object.
 * @param {Object} config.registrationData registrationData object.
 */
class MetaData {
  constructor({ caller, registrationData } = {}) {
    const _caller = new Caller(caller);
    const _statsDClient = new StatsD({ tags: { organization: _caller.organization.uuid } });
    Object.defineProperty(this, 'caller', { get: () => (_caller), enumerable: true });
    Object.defineProperty(this, 'registrationData', { get: () => (registrationData), enumerable: true });
    Object.defineProperty(this, 'statsDClient', { get: () => (_statsDClient), enumerable: true });
    if (_.isNil(grpc)) {
      console.error('GRPC is not loaded. Some methods may not function correctly.');
    }
  }

  /**
   * Metadata about the incoming request.
   * @type Caller
   */
  get caller() {}

  /**
   * Registration data for the incoming request. The registrationData object
   * consists of all three scopes: user, organization, and workspace and is
   * attached to every function call.
   * @type RegistrationData
   */
  get registrationData() {}

  /**
   * Returns a client for StatsD.
   * @external https://github.com/sivy/node-statsd
   */
  getStatsDClient() {
    return this.statsDClient;
  }

  /**
   * Gets the plugin data stored against the given key and user.
   * @param {string} key a key that data is stored against.
   * @param {string} [userUUID] the user UUID the data is stored against.
   * @returns {*} the stored data.
   */
  getPluginDataForUser(key, userUUID = this.caller.user.uuid) {
    const caller = pluginCaller(this.caller);
    caller.userUUID = userUUID;
    return grpc.getPluginData(key, caller);
  }

  /**
   * Sets and overrides the data on a given key and user.
   * @param {string} key a unique key that data is stored against.
   * @param {*} data data to store.
   * @param {string} [userUUID] the user UUID the data is stored against.
   * @returns {*} the newly stored data.
   */
  setPluginDataForUser(key, data, userUUID = this.caller.user.uuid) {
    const caller = pluginCaller(this.caller);
    caller.userUUID = userUUID;
    return grpc.storePluginData(key, caller, data);
  }

  /**
   * Deletes the data on a given key and user.
   * @param {string} key a key that data is stored against.
   * @param {string} [userUUID] the user UUID the data is stored against.
   */
  deletePluginDataForUser(key, userUUID = this.caller.user.uuid) {
    const caller = pluginCaller(this.caller);
    caller.userUUID = userUUID;
    return grpc.deletePluginData(key, caller);
  }

  /**
   * Gets the plugin data for an organization stored against the given key.
   * @param {string} key a key that data is stored against.
   * @returns {*} the stored data.
   */
  getPluginDataForOrganization(key) {
    const caller = pluginCaller(this.caller);
    return grpc.getPluginData(key, caller);
  }

  /**
   * Sets and overrides the data for an organization on a given key.
   * @param {string} key a unique key that data is stored against.
   * @param {*} data data to store.
   * @returns {*} the newly stored data.
   */
  setPluginDataForOrganization(key, data) {
    const caller = pluginCaller(this.caller);
    return grpc.storePluginData(key, caller, data);
  }

  /**
   * Deletes the data for an organization on a given key.
   * @param {string} key a key that data is stored against.
   */
  deletePluginDataForOrganization(key) {
    const caller = pluginCaller(this.caller);
    return grpc.deletePluginData(key, caller);
  }

  /**
   * Gets the OAuth2 information for the current user.
   * @returns {OAuth2Info} OAuth2 information.
   */
  getOAuth2InfoForUser() {
    const caller = pluginCaller(this.caller);
    return grpc.getPluginOAuth2Info(caller, 0);
  }

  /**
   * Override the OAuth2 information for the current user.
   * @param {OAuth2Info} oAuth2Data OAuth2 information to override with.
   * @param {string} [userUUID] the user UUID the OAuth2 information should be overriden for.
   * @returns {OAuth2Info} OAuth2 information.
   */
  setOAuth2InfoForUser(oAuth2Data, userUUID = this.caller.user.uuid) {
    const caller = pluginCaller(this.caller);
    caller.userUUID = userUUID;
    return grpc.storePluginOAuth2Info(caller, 0, oAuth2Data);
  }

  /**
   * Delete the OAuth2 information for the current user.
   */
  deleteOAuth2InfoForUser() {
    const caller = pluginCaller(this.caller);
    return grpc.deletePluginOAuth2Info(caller, 0);
  }

  /**
   * Gets the OAuth2 information for the current organization.
   * @returns {OAuth2Info} OAuth2 information.
   */
  getOAuth2InfoForOrganization() {
    const caller = pluginCaller(this.caller);
    return grpc.getPluginOAuth2Info(caller, 1);
  }

  /**
   * Override the OAuth2 information for the current organization.
   * @param {OAuth2Info} oAuth2Data OAuth2 information to override with.
   * @returns {OAuth2Info} OAuth2 information.
   */
  setOAuth2InfoForOrganization(oAuth2Data) {
    const caller = pluginCaller(this.caller);
    return grpc.storePluginOAuth2Info(caller, 1, oAuth2Data);
  }

  /**
   * Delete the OAuth2 information for the current organization.
   */
  deleteOAuth2InfoForOrganization() {
    const caller = pluginCaller(this.caller);
    return grpc.deletePluginOAuth2Info(caller, 1);
  }
}

module.exports = MetaData;

/**
 * @typedef CallerDataObject
 * @property {string} uuid
 * @property {Object} data
 */

/**
 * @typedef CallToken
 * @property {number} validUntil a timestamp that this callToken is valid to.
 * @property {Object} signature a unique validation token for the plugindata service.
 * @property {Object} payload
 * @property {string} payload.pluginUUID the plugin UUID.
 * @property {string} payload.organizationUUID the organization UUID.
 * @property {string} payload.workspaceUUID the workspace UUID.
 */

/**
 * @typedef CallerObject
 * @property {CallerDataObject} user
 * @property {CallerDataObject} organization
 * @property {CallerDataObject} workspace
 * @property {CallToken} callToken
 * @property {string} pluginURI a uri to the current plugin.
 */

/**
 * @typedef OAuth2Info
 * @property {string} access_token
 * @property {string} token_type
 * @property {string} refresh_token
 * @property {number} expires_in
 * @property {string} grant_type
 * @property {string} redirect_uri
 * @property {Object.<string, string>} metadata
 */

/**
 * @typedef RegistrationData
 * @property {Object.<string, *>} user a map of registration data stored against the user.
 * @property {Object.<string, *>} organization a map of registration data stored against
 * the organisation.
 * @property {Object.<string, *>} workspace a map of registration data stored against the
 * workspace.
 *
 * @description An object containing all the registration data for each scope: user,
 * organisation, and workspace. The `registrationData` object is attached to the MetaData
 * object for every function including the special case functions of `onPluginRegister`
 * and `onPluginUnregister`.
 *
 * @example
 * To set or unset registration data we can create a function called `onPluginRegister`
 * or `onPluginUnregister` respectively. Within these functions we can still access the
 * all scopes of the `registrationData` but can only update the Registration Data of the
 * scope that's currently being executed in `onPluginRegister`. To do this simply pass a
 * JSONResponse with an `update` property set to `true` and a `registrationData` set to the
 * full registration data you wish to set. Setting the `registrationData` to undefined will
 * be treated as a success but will not override any data.
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
 */
