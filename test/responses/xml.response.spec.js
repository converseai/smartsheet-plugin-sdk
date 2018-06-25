/* eslint-env node, mocha */
const chai = require('chai');
const { XMLResponse } = require('../../response');

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
    .to.eql({ 'Content-Type': 'text/xml' });

  expect(response)
    .to.have.property('type')
    .to.be.an('string')
    .to.eq('XML');

  expect(response)
    .to.have.property('value')
    .to.be.an('string')
    .to.eql('<hello>World!</hello>');
}

describe('Responses', () => {
  it('XML constructor', () => {
    const response = new XMLResponse({ value: '<hello>World!</hello>' });
    test(response);
  });

  it('XML setter', () => {
    const response = new XMLResponse({ value: '<hello>Universe!</hello>' });
    response.setValue('<hello>World!</hello>');
    test(response);
  });
});
