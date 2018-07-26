const _ = require('lodash');
const { TYPE_JSON } = require('./consts');
const Response = require('./response');

/**
 * @class OAuth2Start
 * @extends Response
 * @classdesc A Response with a return type of `JSON`.
 *  This response is used to start an OAuth2 process by providing the caller
 *  with the details specific to the external authentication system. The caller
 *  will then initiate the OAuth2 process with the given details.
 * @param {Object} config configuration object.
 * @param {string} config.oAuth2URL the OAuth2 URI.
 * @param {string} config.clientId the OAuth2 Client ID.
 * @param {string} config.scope the OAuth2 scope.
 * @param {string} config.state the OAuth2 state.
 * @param {Object} config.extraParams the OAuth2 URL parameters.
 */
class OAuth2Start extends Response {
  constructor({
    oAuth2URL,
    clientId,
    scope,
    state,
    extraParams,
  } = {}) {
    super({ type: TYPE_JSON });
    this.setOAuth2URI(oAuth2URL);
    this.setClientID(clientId);
    this.setScope(scope);
    this.setState(state);
    this.setExtraParams(extraParams);
  }

  /**
  * Sets the URI for the OAuth2 payload. Get parameters will be
  * discarded from this string, use setExtraParams to pass parameters.
  * @param {String} oAuth2URL the OAuth2 URI.
  * @public
  */
  setOAuth2URI(oAuth2URL) {
    if (!_.isNil(oAuth2URL)) {
      const value = this.getValue() || {};
      value.oAuth2Setup = value.oAuth2Setup || {};
      value.oAuth2Setup.oAuth2URL = oAuth2URL;
      this.setValue(value);
    }
  }

  /**
  * Sets the Client ID for the OAuth2 payload.
  * @param {String} clientId the OAuth2 Client ID.
  * @public
  */
  setClientID(clientId) {
    if (!_.isNil(clientId)) {
      const value = this.getValue() || {};
      value.oAuth2Setup = value.oAuth2Setup || {};
      value.oAuth2Setup.clientId = clientId;
      this.setValue(value);
    }
  }

  /**
  * Sets the scope for the OAuth2 payload.
  * @param {String} scope the OAuth2 scope.
  * @public
  */
  setScope(scope) {
    if (!_.isNil(scope)) {
      const value = this.getValue() || {};
      value.oAuth2Setup = value.oAuth2Setup || {};
      value.oAuth2Setup.scope = scope;
      this.setValue(value);
    }
  }

  /**
  * Sets the state for the OAuth2 payload.
  * @param {String} [state] the OAuth2 state.
  * @public
  */
  setState(state) {
    if (!_.isNil(state)) {
      const value = this.getValue() || {};
      value.oAuth2Setup = value.oAuth2Setup || {};
      value.oAuth2Setup.state = state;
      this.setValue(value);
    }
  }

  /**
  * Sets the parameters to be attached to URL for the OAuth2 payload.
  * @param {Object} [extraParams] the OAuth2 URL parameters.
  * @public
  */
  setExtraParams(extraParams) {
    if (!_.isNil(extraParams) && _.isObject(extraParams)) {
      const value = this.getValue() || {};
      value.oAuth2Setup = value.oAuth2Setup || {};
      value.oAuth2Setup.extraParams = extraParams;
      this.setValue(value);
    }
  }
}

module.exports = OAuth2Start;
