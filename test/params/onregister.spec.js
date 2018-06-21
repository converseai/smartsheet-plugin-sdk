/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { spy } = require('sinon');
const { mockReq, mockRes } = require('sinon-express-mock');
const SDK = require('../../interface/http');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiAsPromised);

const FUNC_NAME = 'onPluginRegister';
const fakeFactory = { registrationData: { organization: spy() } };
const fakePayload = {
  func: FUNC_NAME,
  registrationData: {
    organization: {
      a: 'a',
      b: 'b',
    },
  },
  funcData: {
    scope: 'ORG',
    data: {
      a: 'c',
      b: 'd',
    },
  },
};

describe('onRegister', () => {
  let sdk;
  let request;
  let response;

  beforeEach(() => {
    request = mockReq();
    response = mockRes();
    sdk = SDK.create({ request, response });
  });

  afterEach(() => {
    request = undefined;
    response = undefined;
    sdk = undefined;
  });

  it('Function returns JSONResponse', () => {
    request.body = fakePayload;

    const func = spy();

    sdk.setFunctions({ [FUNC_NAME]: func });
    sdk.setParamFactory(fakeFactory);

    return expect(sdk.handleRequest()).to.be.fulfilled.then(() => {
      expect(fakeFactory.registrationData.organization)
        .to.be.callCount(2)
        .to.be.calledWith(fakePayload.registrationData.organization);
      expect(func)
        .to.be.callCount(1);
    });
  });
});
