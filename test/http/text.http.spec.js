/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { fake } = require('sinon');
const { mockReq, mockRes } = require('sinon-express-mock');
const SDK = require('../../interface/http');
const TEXTResponse = require('../../response/text');
const { fakeFactory, fakePayload, FUNC_NAME } = require('./fakes');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('HTTP', () => {
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

  describe('TEXTResponse', () => {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * TEXTResponse
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns TEXTResponse', () => {
      const payload = fakePayload();

      request.body = payload;

      const text = new TEXTResponse();

      const func = fake.returns(text);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(text);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json)
          .to.be.calledWith(text);
      });
    });

    it('Function resolves TEXTResponse', () => {
      const payload = fakePayload();

      request.body = payload;

      const text = new TEXTResponse();

      const func = fake.resolves(text);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(text);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json).to.be.calledWith(text);
      });
    });
  });
});
