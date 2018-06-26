const _ = require('lodash');
const { TYPE_JSON } = require('./consts');
const Response = require('./response');

module.exports = class OAuth2Token extends Response {
  constructor({
    access_token,
    token_type,
    refresh_token,
    expires_in,
    grant_type,
    metadata,
    redirectURL,
    message,
  } = {}) {
    super({ type: TYPE_JSON });
    this.setAccessToken(access_token);
    this.setTokenType(token_type);
    this.setRefreshToken(refresh_token);
    this.setExpiresIn(expires_in);
    this.setGrantType(grant_type);
    this.setMetadata(metadata);
    this.setRedirectURL(redirectURL);
    this.setMessage(message);
  }

  /**
  * Sets the access token for the OAuth2 payload.
  * @param {String} access_token The OAuth2 access token for the response.
  * @public
  */
  setAccessToken(access_token) {
    if (!_.isNil(access_token)) {
      const value = this.getValue() || {};
      value.oAuth2Token = value.oAuth2Token || {};
      value.oAuth2Token.access_token = access_token;
      this.setValue(value);
    }
  }

  /**
  * Sets the token type for the OAuth2 payload.
  * @param {String} token_type The OAuth2 token type for the response.
  * @public
  */
  setTokenType(token_type) {
    if (!_.isNil(token_type)) {
      const value = this.getValue() || {};
      value.oAuth2Token = value.oAuth2Token || {};
      value.oAuth2Token.token_type = token_type;
      this.setValue(value);
    }
  }

  /**
  * Sets the refresh token for the OAuth2 payload.
  * @param {String} refresh_token The OAuth2 refresh token for the response.
  * @public
  */
  setRefreshToken(refresh_token) {
    if (!_.isNil(refresh_token)) {
      const value = this.getValue() || {};
      value.oAuth2Token = value.oAuth2Token || {};
      value.oAuth2Token.refresh_token = refresh_token;
      this.setValue(value);
    }
  }

  /**
  * Sets the expiry time for the OAuth2 payload.
  * @param {String} expires_in The OAuth2 expiry time for the response.
  * @public
  */
  setExpiresIn(expires_in) {
    if (!_.isNil(expires_in)) {
      const value = this.getValue() || {};
      value.oAuth2Token = value.oAuth2Token || {};
      value.oAuth2Token.expires_in = expires_in;
      this.setValue(value);
    }
  }

  /**
  * Sets the expiry time for the OAuth2 payload.
  * @param {String} grant_type The OAuth2 expiry time for the response.
  * @public
  */
  setGrantType(grant_type) {
    if (!_.isNil(grant_type)) {
      const value = this.getValue() || {};
      value.oAuth2Token = value.oAuth2Token || {};
      value.oAuth2Token.grant_type = grant_type;
      this.setValue(value);
    }
  }

  /**
  * Sets the metadata for the OAuth2 payload.
  * @param {Object} [metadata] A Key/Value map of metadata for the OAuth2 response.
  * @public
  */
  setMetadata(metadata) {
    if (!_.isNil(metadata)) {
      const value = this.getValue() || {};
      value.oAuth2Token = value.oAuth2Token || {};
      value.oAuth2Token.metadata = metadata;
      this.setValue(value);
    }
  }

  /**
  * Sets the redirect URL for the OAuth2 payload.
  * @param {String} [redirectURL] An OAuth2 redirect URL for the response.
  * @public
  */
  setRedirectURL(redirectURL) {
    if (!_.isNil(redirectURL)) {
      const value = this.getValue() || {};
      value.oAuth2Token = value.oAuth2Token || {};
      value.oAuth2Token.redirectURL = redirectURL;
      this.setValue(value);
    }
  }

  /**
  * Sets the user message for the OAuth2 payload.
  * If redirect URL is set then this value is ignored.
  * @param {String} [message] The OAuth2 user message for the response.
  * @public
  */
  setMessage(message) {
    if (!_.isNil(message)) {
      const value = this.getValue() || {};
      value.oAuth2Setup = value.oAuth2Setup || {};
      value.oAuth2Setup.message = message;
      this.setValue(value);
    }
  }
};
