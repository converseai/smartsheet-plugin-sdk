/* eslint class-methods-use-this: off, getter-return: off, no-empty-function: off */

function promisifyGrpc(grpc, property, data) {
  return new Promise((resolve, reject) => {
    grpc[property](data, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(JSON.parse(res.data.toString('utf8')));
    });
  });
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
  constructor({ caller, registrationData, grpc } = {}) {
    const _caller = new Caller(caller);
    Object.defineProperty(this, 'caller', { get: () => (_caller) });
    Object.defineProperty(this, 'registrationData', { get: () => (registrationData) });
    Object.defineProperty(this, 'grpc', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: grpc,
    });
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
    return promisifyGrpc(this.grpc, 'getPluginData', {
      key,
      caller,
    });
  }

  setPluginDataForUser(key, data, userUUID = this.caller.user.uuid) {
    const caller = pluginCaller(this.caller);
    caller.userUUID = userUUID;
    return promisifyGrpc(this.grpc, 'storePluginData', {
      key,
      caller,
      data: Buffer.from(JSON.stringify(data)),
    });
  }

  deletePluginDataForUser(key, userUUID = this.caller.user.uuid) {
    const caller = pluginCaller(this.caller);
    caller.userUUID = userUUID;
    return promisifyGrpc(this.grpc, 'deletePluginData', {
      key,
      caller,
    });
  }


  getPluginDataForOrganization(key) {
    const caller = pluginCaller(this.caller);
    return promisifyGrpc(this.grpc, 'getPluginData', {
      key,
      caller,
    });
  }

  setPluginDataForOrganization(key, data) {
    const caller = pluginCaller(this.caller);
    return promisifyGrpc(this.grpc, 'storePluginData', {
      key,
      caller,
      data: Buffer.from(JSON.stringify(data)),
    });
  }

  deletePluginDataForOrganization(key) {
    const caller = pluginCaller(this.caller);
    return promisifyGrpc(this.grpc, 'deletePluginData', {
      key,
      caller,
    });
  }


  getOAuth2InfoForUser() {
    const caller = pluginCaller(this.caller);
    console.log(caller);
    return promisifyGrpc(this.grpc, 'getPluginOAuth2Info', {
      caller,
      oAuthType: 0,
    });
  }

  setOAuth2InfoForUser(oAuth2Data) {
    const caller = pluginCaller(this.caller);
    return promisifyGrpc(this.grpc, 'storePluginOAuth2Info', {
      caller,
      oAuthType: 0,
      oAuth2Data,
    });
  }

  deleteOAuth2InfoForUser() {
    const caller = pluginCaller(this.caller);
    return promisifyGrpc(this.grpc, 'deletePluginOAuth2Info', {
      caller,
      oAuthType: 0,
    });
  }


  getOAuth2InfoForOrganization() {
    const caller = pluginCaller(this.caller);
    return promisifyGrpc(this.grpc, 'deletePluginOAuth2Info', {
      caller,
      oAuthType: 0,
    });
  }

  setOAuth2InfoForOrganization(oAuth2Data) {
    const caller = pluginCaller(this.caller);
    return promisifyGrpc(this.grpc, 'deletePluginOAuth2Info', {
      caller,
      oAuthType: 0,
      oAuth2Data,
    });
  }

  deleteOAuth2InfoForOrganization() {
    const caller = pluginCaller(this.caller);
    return promisifyGrpc(this.grpc, 'deletePluginOAuth2Info', {
      caller,
      oAuthType: 0,
    });
  }
}

module.exports = MetaData;
