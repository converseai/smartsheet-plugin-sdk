/* eslint-env node, mocha */
const chai = require('chai');
const { TEXTResponse } = require('../../response');

const { expect } = chai;

function test(response) {
  expect(response)
    .to.have.property('http');

  expect(response.http)
    .to.have.property('status')
    .to.be.a('number')
    .to.eq(200);
  expect(response.http)
    .to.have.property('headers')
    .to.be.an('object')
    .to.eql({ 'Content-Type': 'text/plain' });

  expect(response)
    .to.have.property('type')
    .to.be.an('string')
    .to.eq('TEXT');

  expect(response)
    .to.have.property('value')
    .to.be.an('string')
    .to.eql('Hello, World!');
}

describe('Responses', () => {
  it('TEXT constructor', () => {
    const response = new TEXTResponse({ value: 'Hello, World!' });
    test(response);
  });

  it('TEXT setter', () => {
    const response = new TEXTResponse({ value: 'Hello, Universe!' });
    response.setValue('Hello, World!');
    test(response);
  });
});
