const _ = require('lodash');
const { TYPE_JSON } = require('./consts');
const Response = require('./response');

/**
 * @class OAuth2Token
 * @extends Response
 * @classdesc A Response with a return type of `JSON`.
 *  This response is used during an OAuth2 process by providing the caller
 *  with the details specific to the external authentication system.
 * @param {Object} config configuration object.
 * @param {string} config.access_token OAuth2 access token.
 * @param {string} config.token_type OAuth2 token type.
 * @param {string} config.refresh_token OAuth2 refresh token.
 * @param {string} config.expires_in OAuth2 expiry time.
 * @param {Object} config.grant_type OAuth2 grant type.
 * @param {Object} config.metadata A Key/Value map of metadata.
 * @param {Object} config.redirectURL OAuth2 redirect URL.
 * @param {Object} config.message OAuth2 user message.
 */
class OAuth2Token extends Response {
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
  * @param {String} access_token OAuth2 access token.
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
  * @param {String} token_type OAuth2 token type.
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
  * @param {String} refresh_token OAuth2 refresh token.
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
  * @param {String} expires_in OAuth2 expiry time.
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
  * Sets the grant type for the OAuth2 payload.
  * @param {String} grant_type OAuth2 grant type.
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
  * @param {Object} [metadata] A Key/Value map of metadata.
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
  * @param {String} [redirectURL] OAuth2 redirect URL.
  * @public
  */
  setRedirectURL(redirectURL) {
    if (!_.isNil(redirectURL)) {
      const value = this.getValue() || {};
      value.redirectURL = redirectURL;
      this.setValue(value);
    }
  }

  /**
  * Sets the user message for the OAuth2 payload.
  * If redirect URL is set then this value is ignored.
  * @param {String} [message] OAuth2 user message.
  * @public
  */
  setMessage(message) {
    if (!_.isNil(message)) {
      const value = this.getValue() || {};
      value.message = message;
      this.setValue(value);
    }
  }
}

module.exports = OAuth2Token;
