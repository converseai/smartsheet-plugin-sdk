/*
eslint class-methods-use-this: off,
getter-return: off,
no-empty-function: off,
no-console: off
*/
const _ = require('lodash');
const PluginData = require('smartsheet-plugindata-sdk/plugindata');

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
 * @typedef CallerData
 * @property {String} uuid
 * @property {Object} data
 */

/**
 * @typedef {Object} Caller
 * @property {CallerData} user
 * @property {CallerData} organization
 * @property {CallerData} workspace
 */

class CallerData {
  constructor({ uuid, data } = {}) {
    Object.defineProperty(this, 'uuid', { get: () => (uuid) });
    Object.defineProperty(this, 'data', { get: () => (data) });
  }

  /**
   * A universal unique identifier for this particular caller object.
   * @type String
   */
  get uuid() {}

  /**
   * Data for this particular caller object.
   * @type String
   */
  get data() {}
}

class Caller {
  constructor({ user, organization, workspace, callToken } = {}) {
    const uData = new CallerData(user);
    const pData = new CallerData(organization);
    const wData = new CallerData(workspace);
    Object.defineProperty(this, 'user', { get: () => uData });
    Object.defineProperty(this, 'organization', { get: () => pData });
    Object.defineProperty(this, 'workspace', { get: () => wData });
    Object.defineProperty(this, 'callToken', { get: () => callToken });
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

class MetaData {
  constructor({ caller, registrationData } = {}) {
    const _caller = new Caller(caller);
    Object.defineProperty(this, 'caller', { get: () => (_caller) });
    Object.defineProperty(this, 'registrationData', { get: () => (registrationData) });
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
   * Registration data for the incoming request.
   * @type RegistrationData
   */
  get registrationData() {}

  getPluginDataForUser(key, userUUID = this.caller.user.uuid) {
    const caller = pluginCaller(this.caller);
    caller.userUUID = userUUID;
    return grpc.getPluginData(key, caller);
  }

  setPluginDataForUser(key, data, userUUID = this.caller.user.uuid) {
    const caller = pluginCaller(this.caller);
    caller.userUUID = userUUID;
    return grpc.storePluginData(key, caller, data);
  }

  deletePluginDataForUser(key, userUUID = this.caller.user.uuid) {
    const caller = pluginCaller(this.caller);
    caller.userUUID = userUUID;
    return grpc.deletePluginData(key, caller);
  }


  getPluginDataForOrganization(key) {
    const caller = pluginCaller(this.caller);
    return grpc.getPluginData(key, caller);
  }

  setPluginDataForOrganization(key, data) {
    const caller = pluginCaller(this.caller);
    return grpc.storePluginData(key, caller, data);
  }

  deletePluginDataForOrganization(key) {
    const caller = pluginCaller(this.caller);
    return grpc.deletePluginData(key, caller);
  }


  getOAuth2InfoForUser() {
    const caller = pluginCaller(this.caller);
    return grpc.getPluginOAuth2Info(caller, 0);
  }

  setOAuth2InfoForUser(oAuth2Data) {
    const caller = pluginCaller(this.caller);
    return grpc.storePluginOAuth2Info(caller, 0, oAuth2Data);
  }

  deleteOAuth2InfoForUser() {
    const caller = pluginCaller(this.caller);
    return grpc.deletePluginOAuth2Info(caller, 0);
  }


  getOAuth2InfoForOrganization() {
    const caller = pluginCaller(this.caller);
    return grpc.getPluginOAuth2Info(caller, 1);
  }

  setOAuth2InfoForOrganization(oAuth2Data) {
    const caller = pluginCaller(this.caller);
    return grpc.storePluginOAuth2Info(caller, 1, oAuth2Data);
  }

  deleteOAuth2InfoForOrganization() {
    const caller = pluginCaller(this.caller);
    return grpc.deletePluginOAuth2Info(caller, 1);
  }
}

module.exports = MetaData;
