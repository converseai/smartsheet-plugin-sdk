const _ = require('lodash');
const Response = require('./response');

module.exports = class JSONResponse extends Response {
  constructor({
    access_token,
    token_type,
    refresh_token,
    expires_in,
    grant_type,
    metadata,
    redirectTo,
    message,
  } = {}) {
    super();
    this.setAccessToken(access_token);
    this.setTokenType(token_type);
    this.setRefreshToken(refresh_token);
    this.setExpiresIn(expires_in);
    this.setGrantType(grant_type);
    this.setMetadata(metadata);
    this.setRedirectURL(redirectTo);
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
      value.oauth2Token = value.oauth2Token || {};
      value.oauth2Token.access_token = access_token;
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
      value.oauth2Token = value.oauth2Token || {};
      value.oauth2Token.token_type = token_type;
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
      value.oauth2Token = value.oauth2Token || {};
      value.oauth2Token.refresh_token = refresh_token;
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
      value.oauth2Token = value.oauth2Token || {};
      value.oauth2Token.expires_in = expires_in;
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
      value.oauth2Token = value.oauth2Token || {};
      value.oauth2Token.grant_type = grant_type;
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
      value.oauth2Token = value.oauth2Token || {};
      value.oauth2Token.metadata = metadata;
      this.setValue(value);
    }
  }

  /**
  * Sets the redirect URL for the OAuth2 payload.
  * @param {String} [url] An OAuth2 redirect URL for the response.
  * @public
  */
  setRedirectURL(url) {
    if (!_.isNil(url)) {
      const value = this.getValue() || {};
      value.oauth2Token = value.oauth2Token || {};
      value.oauth2Token.url = url;
      this.setValue(value);
    }
  }

  /**
  * Sets the success message for the OAuth2 payload.
  * @param {String} [message] An OAuth2 success message for the response.
  * @public
  */
  setMessage(message) {
    if (!_.isNil(message)) {
      const value = this.getValue() || {};
      value.oauth2Token = value.oauth2Token || {};
      value.oauth2Token.message = message;
      this.setValue(value);
    }
  }
};
