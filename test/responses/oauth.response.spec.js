/* eslint-env node, mocha */
const chai = require('chai');
const { OAuth2Start, OAuth2Token } = require('../../response');

const { expect } = chai;

function testStart(response) {
  expect(response)
    .to.have.property('type')
    .to.eq('JSON');

  expect(response)
    .to.have.property('value')
    .to.be.an('object')
    .to.have.property('oAuth2Setup')
    .to.be.an('object');

  expect(response.value.oAuth2Setup)
    .to.have.property('oAuth2URL')
    .to.be.an('string')
    .to.eq('a');

  expect(response.value.oAuth2Setup)
    .to.have.property('clientId')
    .to.be.an('string')
    .to.eq('b');

  expect(response.value.oAuth2Setup)
    .to.have.property('scope')
    .to.be.an('string')
    .to.eq('c');

  expect(response.value.oAuth2Setup)
    .to.have.property('state')
    .to.be.an('string')
    .to.eq('d');

  expect(response.value.oAuth2Setup)
    .to.have.property('extraParams')
    .to.be.an('object')
    .to.eql({ a: 'a' });
}

function testToken(response) {
  expect(response)
    .to.have.property('type')
    .to.eq('JSON');

  expect(response)
    .to.have.property('value')
    .to.be.an('object')
    .to.have.property('oAuth2Token')
    .to.be.an('object');

  expect(response.value.oAuth2Token)
    .to.have.property('access_token')
    .to.be.an('string')
    .to.eq('a');

  expect(response.value.oAuth2Token)
    .to.have.property('token_type')
    .to.be.an('string')
    .to.eq('b');

  expect(response.value.oAuth2Token)
    .to.have.property('refresh_token')
    .to.be.an('string')
    .to.eq('c');

  expect(response.value.oAuth2Token)
    .to.have.property('expires_in')
    .to.be.an('string')
    .to.eq('d');

  expect(response.value.oAuth2Token)
    .to.have.property('grant_type')
    .to.be.an('string')
    .to.eq('e');

  expect(response.value)
    .to.have.property('redirectURL')
    .to.be.an('string')
    .to.eq('f');

  expect(response.value)
    .to.have.property('message')
    .to.be.an('string')
    .to.eq('g');

  expect(response.value.oAuth2Token)
    .to.have.property('metadata')
    .to.be.an('object')
    .to.eql({ a: 'a' });
}

describe('Responses', () => {
  it('OAuth2Start constructor', () => {
    const response = new OAuth2Start({
      oAuth2URL: 'a',
      clientId: 'b',
      scope: 'c',
      state: 'd',
      extraParams: { a: 'a' },
    });
    testStart(response);
  });

  it('OAuth2Start setter', () => {
    const response = new OAuth2Start({
      oAuth2URL: 'x',
      clientId: 'x',
      scope: 'x',
      state: 'x',
      extraParams: { x: 'x' },
    });
    response.setOAuth2URI('a');
    response.setClientID('b');
    response.setScope('c');
    response.setState('d');
    response.setExtraParams({ a: 'a' });
    testStart(response);
  });

  it('OAuthToken constructor', () => {
    const response = new OAuth2Token({
      access_token: 'a',
      token_type: 'b',
      refresh_token: 'c',
      expires_in: 'd',
      grant_type: 'e',
      redirectURL: 'f',
      message: 'g',
      metadata: { a: 'a' },
    });
    testToken(response);
  });

  it('OAuthToken setter', () => {
    const response = new OAuth2Token({
      access_token: 'x',
      token_type: 'x',
      refresh_token: 'x',
      expires_in: 'x',
      grant_type: 'x',
      redirectURL: 'x',
      message: 'x',
      metadata: { x: 'x' },
    });
    response.setAccessToken('a');
    response.setTokenType('b');
    response.setRefreshToken('c');
    response.setExpiresIn('d');
    response.setGrantType('e');
    response.setRedirectURL('f');
    response.setMessage('g');
    response.setMetadata({ a: 'a' });
    testToken(response);
  });
});
