/* eslint-env node, mocha */
const _ = require('lodash');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { spy, fake } = require('sinon');
const { mockReq, mockRes } = require('sinon-express-mock');
const SDK = require('../interface/http');
const ErrorResponse = require('../response/error');
const JSONResponse = require('../response/json');
const TEXTResponse = require('../response/text');
const XMLResponse = require('../response/xml');
const { FUNC_NOT_FOUND, INTERNAL_ERROR } = require('../response/errors');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('HTTP', () => {
  let sdk;
  let request;
  let response;

  const FUNC_NAME = 'testFunction';

  const fakeFactory = ext => _.merge({
    registrationData: { organization: spy() },
    functions: { [FUNC_NAME]: spy() },
  }, ext);

  const fakePayload = ext => _.merge({
    func: FUNC_NAME,
    caller: {
      organization: {
        uuid: _,
        data: {},
      },
    },
    registrationData: {
      user: {},
      organization: {},
      workspace: {},
    },
    funcData: {},
    httpData: {
      method: _,
      formData: {},
      body: {},
      queryParams: {},
    },
  }, ext);

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

  describe('Error Responses', () => {
    it('No Functions', () => expect(sdk.handleRequest()).to.be.rejected.then(() =>
      expect(response.json).to.be.calledWith(new ErrorResponse(FUNC_NOT_FOUND()))));
    it('Function not found', () => {
      const func = spy();
      sdk.setFunctions({ func });
      return expect(sdk.handleRequest()).to.be.rejected.then(() => {
        expect(func).to.be.callCount(0);
        expect(response.json).to.be.calledWith(new ErrorResponse(FUNC_NOT_FOUND()));
      });
    });
    it('Internal Error', () => {
      request.body = { func: FUNC_NAME };

      const error = new TypeError('internal error is thrown');

      const func = fake(() => { throw error; });
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.rejected.then((e) => {
        expect(e).to.eq(error);
        expect(factory.registrationData.organization)
          .to.be.callCount(1).to.be.calledWith(undefined);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1).calledWith({ funcData: {}, httpData: {} });
        expect(func).to.be.callCount(1);
        expect(response.json).to.be.calledWith(new ErrorResponse(INTERNAL_ERROR(error)));
      });
    });
  });

  describe('Success Responses', () => {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * JSONResponse
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns JSONResponse', () => {
      const payload = fakePayload();

      request.body = payload;

      const json = new JSONResponse();

      const func = fake.returns(json);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(json);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json)
          .to.be.calledWith(json);
      });
    });

    it('Function resolves JSONResponse', () => {
      const payload = fakePayload();

      request.body = payload;

      const json = new JSONResponse();

      const func = fake.resolves(json);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(json);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(factory.functions[FUNC_NAME])
          .to.be.callCount(1)
          .calledWith({ funcData: payload.funcData, httpData: payload.httpData });
        expect(func)
          .to.be.callCount(1);

        expect(response.json).to.be.calledWith(json);
      });
    });

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
