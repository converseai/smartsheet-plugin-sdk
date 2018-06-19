/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { fake } = require('sinon');
const { mockReq, mockRes } = require('sinon-express-mock');
const SDK = require('../../interface/http');
const { JSONResponse } = require('../../response');
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

  describe('Native Objects', () => {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Native Javascript Object
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns native Object', () => {
      const payload = fakePayload();

      request.body = payload;

      const value = { abc: 'abc' };

      const func = fake.returns(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(value);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(value);
      });
    });

    it('Function resolves native Object', () => {
      const payload = fakePayload();

      request.body = payload;

      const value = { abc: 'abc' };

      const func = fake.resolves(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(value);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(value);
      });
    });

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Native Javascript Number
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns native Number', () => {
      const payload = fakePayload();

      request.body = payload;

      const value = 100;

      const func = fake.returns(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(value);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(value);
      });
    });

    it('Function resolves native Number', () => {
      const payload = fakePayload();

      request.body = payload;

      const value = 100;

      const func = fake.resolves(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(value);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(value);
      });
    });

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Native Javascript String
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns native String', () => {
      const payload = fakePayload();

      request.body = payload;

      const value = 'String';

      const func = fake.returns(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(value);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(value);
      });
    });

    it('Function resolves native String', () => {
      const payload = fakePayload();

      request.body = payload;

      const value = 'String';

      const func = fake.resolves(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(value);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(value);
      });
    });

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Native Javascript Array
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns native Array', () => {
      const payload = fakePayload();

      request.body = payload;

      const value = ['Array'];

      const func = fake.returns(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(value);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(value);
      });
    });

    it('Function resolves native Array', () => {
      const payload = fakePayload();

      request.body = payload;

      const value = ['Array'];

      const func = fake.resolves(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(value);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(value);
      });
    });

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Native Javascript Promise
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns native Promise', () => {
      const payload = fakePayload();

      request.body = payload;

      const resolvedval = 'abc';
      const value = new Promise((resolve) => {
        setTimeout(() => resolve(resolvedval), 500);
      });

      const func = fake.returns(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(resolvedval);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(resolvedval);
      });
    });

    it('Function resolves native Promise', () => {
      const payload = fakePayload();

      request.body = payload;

      const resolvedval = 'abc';
      const value = new Promise((resolve) => {
        setTimeout(() => resolve(resolvedval), 500);
      });

      const func = fake.resolves(value);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eq(resolvedval);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(res)
          .to.have.property('value')
          .to.eq(resolvedval);
      });
    });
  });
});
