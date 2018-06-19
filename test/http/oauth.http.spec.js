/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { fake } = require('sinon');
const { mockReq, mockRes } = require('sinon-express-mock');
const SDK = require('../../interface/http');
const { OAuth2Start, OAuth2Token } = require('../../response');
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

  describe('OAuth2Start', () => {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * OAuth2Start
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns OAuth2Start', () => {
      const payload = fakePayload();

      request.body = payload;

      const oauth = new OAuth2Start();

      const func = fake.returns(oauth);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(oauth);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json)
          .to.be.calledWith(oauth);
      });
    });

    it('Function resolves OAuth2Start', () => {
      const payload = fakePayload();

      request.body = payload;

      const oauth = new OAuth2Start();

      const func = fake.resolves(oauth);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(oauth);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json).to.be.calledWith(oauth);
      });
    });
  });
  describe('OAuth2Token', () => {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * OAuth2Token
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns OAuth2Token', () => {
      const payload = fakePayload();

      request.body = payload;

      const oauth = new OAuth2Token();

      const func = fake.returns(oauth);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(oauth);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json)
          .to.be.calledWith(oauth);
      });
    });

    it('Function resolves OAuth2Token', () => {
      const payload = fakePayload();

      request.body = payload;

      const oauth = new OAuth2Token();

      const func = fake.resolves(oauth);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(oauth);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json).to.be.calledWith(oauth);
      });
    });
  });
});
