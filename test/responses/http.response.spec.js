/* eslint-env node, mocha */
const chai = require('chai');
const { HTTPResponse } = require('../../response');

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
    .to.eql({ a: 'a' });
}

describe('Responses', () => {
  it('HTTP constructor', () => {
    const response = new HTTPResponse({
      headers: { a: 'a' },
      status: 200,
      type: 'HTTP',
    });
    test(response);
  });

  it('HTTP setter', () => {
    const response = new HTTPResponse({
      headers: { a: 'b' },
      status: 500,
      type: 'HTTP',
    });
    response.setHTTPStatus(200);
    response.setHTTPHeaders({ a: 'a' });
    test(response);
  });
});
