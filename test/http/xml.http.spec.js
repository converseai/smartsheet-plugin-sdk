/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { fake } = require('sinon');
const { mockReq, mockRes } = require('sinon-express-mock');
const SDK = require('../../interface/http');
const { XMLResponse } = require('../../response');
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

  describe('XMLResponse', () => {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * XMLResponse
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns XMLResponse', () => {
      const payload = fakePayload();

      request.body = payload;

      const xml = new XMLResponse();

      const func = fake.returns(xml);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(xml);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json)
          .to.be.calledWith(xml);
      });
    });

    it('Function resolves XMLResponse', () => {
      const payload = fakePayload();

      request.body = payload;

      const xml = new XMLResponse();

      const func = fake.resolves(xml);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(xml);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json).to.be.calledWith(xml);
      });
    });
  });
});
