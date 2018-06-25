/* eslint-env node, mocha */
const chai = require('chai');
const { ErrorResponse } = require('../../response');

const { expect } = chai;

function test(response) {
  expect(response)
    .to.have.property('http');

  expect(response.http)
    .to.have.property('status')
    .to.be.a('number')
    .to.eq(500);

  expect(response)
    .to.have.property('type')
    .to.be.an('string')
    .to.eq('ERROR');

  expect(response)
    .to.have.property('error')
    .to.be.an('object');
  expect(response.error)
    .to.have.property('message')
    .to.eq('I am an error!');
  expect(response.error)
    .to.have.property('code')
    .to.eq('ERR_CODE');
}

describe('Responses', () => {
  it('Error constructor', () => {
    const response = new ErrorResponse({ message: 'I am an error!', code: 'ERR_CODE', status: 500 });
    test(response);
  });

  it('Error setter', () => {
    const response = new ErrorResponse({ message: 'I am a warning!', code: 'WARN_CODE', status: 1000 });
    response.setHTTPStatus(500);
    response.setErrorMessage('I am an error!');
    response.setErrorCode('ERR_CODE');
    test(response);
  });
});
