const _ = require('lodash');
const { TYPE_JSON } = require('./consts');
const Response = require('./response');

module.exports = class OAuth2Start extends Response {
  constructor({
    oAuth2URL,
    clientId,
    scope,
    state,
    comment,
    extraParams,
  } = {}) {
    super({ type: TYPE_JSON });
    this.setOAuth2URI(oAuth2URL);
    this.setClientID(clientId);
    this.setScope(scope);
    this.setState(state);
    this.setComment(comment);
    this.setExtraParams(extraParams);
  }

  /**
  * Sets the URI for the OAuth2 payload. Get parameters will be
  * discarded from this string, use setExtraParams to pass parameters.
  * @param {String} oAuth2URL The OAuth2 URI for the response.
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
  * @param {String} clientId The OAuth2 Client ID for the response.
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
  * @param {String} scope The OAuth2 scope for the response.
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
  * @param {String} [state] The OAuth2 state for the response.
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
  * Sets the user comment for the OAuth2 payload.
  * @param {String} [comment] The OAuth2 user comment for the response.
  * @public
  */
  setComment(comment) {
    if (!_.isNil(comment)) {
      const value = this.getValue() || {};
      value.oAuth2Setup = value.oAuth2Setup || {};
      value.oAuth2Setup.comment = comment;
      this.setValue(value);
    }
  }

  /**
  * Sets the parameters to be attached to URL for the OAuth2 payload.
  * @param {Object} [extraParams] The OAuth2 URL parameters for the response.
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
};
