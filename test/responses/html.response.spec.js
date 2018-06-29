/* eslint-env node, mocha */
const chai = require('chai');
const { HTMLResponse } = require('../../response');

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
    .to.eql({ 'Content-Type': 'text/html' });

  expect(response)
    .to.have.property('type')
    .to.be.an('string')
    .to.eq('HTML');

  expect(response)
    .to.have.property('value')
    .to.be.an('string')
    .to.eql('<p>Hello, World!</p>');
}

describe('Responses', () => {
  it('HTML constructor', () => {
    const response = new HTMLResponse({ value: '<p>Hello, World!</p>' });
    test(response);
  });

  it('HTML setter', () => {
    const response = new HTMLResponse({ value: '<p>Hello, Universe!</p>' });
    response.setValue('<p>Hello, World!</p>');
    test(response);
  });
});
