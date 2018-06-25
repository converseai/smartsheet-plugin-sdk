/* eslint-env node, mocha */
const chai = require('chai');
const { Response } = require('../../response');

const { expect } = chai;

describe('Responses', () => {
  it('Base throws error', () => {
    expect(() => new Response()).to.throw('Cannot create Response with type undefined!');
  });

  it('Base constructor', () => {
    const response = new Response({ type: 'MY_TYPE' });
    expect(response).to.have.property('type').to.eql('MY_TYPE');
    response.type = 'NEW_TYPE';
    expect(response).to.have.property('type').to.eql('MY_TYPE');
  });
});
