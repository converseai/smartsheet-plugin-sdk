/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const RegData = require('../classes/regdata');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('RegData', () => {
  const fakePayload = {
    registrationData: {
      user: {},
      organization: { a: 'organization.a' },
      workspace: {},
    },
  };

  it('Data should come from get method', () => {
    const subject = new RegData(fakePayload.registrationData.organization);
    expect(subject).is.instanceof(RegData);
    expect(subject).to.have.property('get').to.be.a('function');
    expect(subject.get('a')).to.eq('organization.a');
  });
});
