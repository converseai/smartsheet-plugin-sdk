const _ = require('lodash');
const Response = require('./response');

module.exports = class OAuth2Start extends Response {
  constructor({
    oauth2URI,
    clientId,
    scope,
    state,
    comment,
    extraParams,
  } = {}) {
    super();
    this.setOAuth2URL(oauth2URI);
    this.setClientID(clientId);
    this.setScope(scope);
    this.setState(state);
    this.setComment(comment);
    this.setExtraParams(extraParams);
  }

  /**
  * Sets the URI for the OAuth2 payload. Get parameters will be
  * discarded from this string, use setExtraParams to pass parameters.
  * @param {String} oauth2URI The OAuth2 URI for the response.
  * @public
  */
  setOAuth2URL(oauth2URI) {
    if (!_.isNil(oauth2URI)) {
      const value = this.getValue() || {};
      value.oauth2Setup = value.oauth2Setup || {};
      value.oauth2Setup.oauth2URI = oauth2URI;
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
      value.oauth2Setup = value.oauth2Setup || {};
      value.oauth2Setup.clientId = clientId;
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
      value.oauth2Setup = value.oauth2Setup || {};
      value.oauth2Setup.scope = scope;
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
      value.oauth2Setup = value.oauth2Setup || {};
      value.oauth2Setup.state = state;
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
      value.oauth2Setup = value.oauth2Setup || {};
      value.oauth2Setup.comment = comment;
      this.setValue(value);
    }
  }

  /**
  * Sets the parameters to be attached to URL for the OAuth2 payload.
  * @param {Object} [extraParams] The OAuth2 URL parameters for the response.
  * @public
  */
  setExtraParams(extraParams) {
    if (!_.isNil(extraParams)) {
      const value = this.getValue() || {};
      value.oauth2Setup = value.oauth2Setup || {};
      value.oauth2Setup.extraParams = extraParams;
      this.setValue(value);
    }
  }
};
