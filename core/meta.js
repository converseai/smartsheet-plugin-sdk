/* eslint class-methods-use-this: off, getter-return: off, no-empty-function: off */

/**
 * @typedef CallerData
 * @property {String} uuid
 * @property {Object} data
 */

/**
 * @typedef {Object} Caller
 * @property {CallerData} user
 * @property {CallerData} organisation
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
  constructor({ user, organisation, workspace } = {}) {
    const uData = new CallerData(user);
    const pData = new CallerData(organisation);
    const wData = new CallerData(workspace);
    Object.defineProperty(this, 'user', { get: () => (uData) });
    Object.defineProperty(this, 'organisation', { get: () => (pData) });
    Object.defineProperty(this, 'workspace', { get: () => (wData) });
  }

  /**
   * Information for the user specific caller data.
   * @type CallerData
   */
  get user() {}

  /**
   * Information for the organisation specific caller data.
   * @type CallerData
   */
  get organisation() {}

  /**
   * Information for the workspace specific caller data.
   * @type CallerData
   */
  get workspace() {}
}

class MetaData {
  constructor({ caller, registrationData } = {}) {
    const c = new Caller(caller);
    Object.defineProperty(this, 'caller', { get: () => (c) });
    Object.defineProperty(this, 'registrationData', { get: () => (registrationData) });
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
}

module.exports = MetaData;
