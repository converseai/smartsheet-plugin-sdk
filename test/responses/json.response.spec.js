/* eslint-env node, mocha */
const chai = require('chai');
const { JSONResponse } = require('../../response');

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
    .to.eql({ 'Content-Type': 'application/json' });

  expect(response)
    .to.have.property('type')
    .to.be.an('string')
    .to.eq('JSON');

  expect(response)
    .to.have.property('value')
    .to.be.an('object')
    .to.eql({ a: 'a' });
}

describe('Responses', () => {
  it('JSON constructor', () => {
    const response = new JSONResponse({ value: { a: 'a' } });
    test(response);
  });

  it('JSON setter', () => {
    const response = new JSONResponse({ a: 'b' });
    response.setValue({ a: 'a' });
    test(response);
  });
});
