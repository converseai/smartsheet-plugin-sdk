/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { spy, fake } = require('sinon');
const { mockReq, mockRes } = require('sinon-express-mock');
const SDK = require('../interface/http');
const ErrorResponse = require('../response/error');
const JSONResponse = require('../response/json');
const { FUNC_NOT_FOUND, META_NOT_FOUND, INTERNAL_ERROR } = require('../response/errors');

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
    it('JSON Response', () => {
      request.body = { func: 'func' };
      const func = spy();
      sdk.setFunctions({ func });
      return expect(sdk.handleRequest()).to.be.rejected.then(() => {
        expect(func).to.be.callCount(0);
        expect(response.json).to.be.calledWith(new ErrorResponse(META_NOT_FOUND()));
      });
    });
    it('Internal Error', () => {
      request.body = { func: 'func' };

      const error = new TypeError('internal error is thrown');

      const func = fake(() => { throw error; });
      const registrationData = spy();
      const params = spy();

      sdk.setFunctions({ func });
      sdk.setDataModule({ registrationData, params: { func: params } });

      return expect(sdk.handleRequest()).to.be.rejected.then((e) => {
        expect(e).to.eq(error);
        expect(response.json).to.be.calledWith(new ErrorResponse(INTERNAL_ERROR(error)));
      });
    });
  });

  describe('Success Responses', () => {
    it('Function returns JSON', () => {
      request.body = { func: 'func' };

      const json = new JSONResponse();

      const func = fake.returns(json);
      const registrationData = spy();
      const params = spy();

      sdk.setFunctions({ func });
      sdk.setDataModule({ registrationData, params: { func: params } });

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(json);
        expect(registrationData).to.have.callCount(1).to.be.calledWith({});
        expect(params).to.have.callCount(1).to.be.calledWith({ funcData: {}, httpData: {} });
        expect(func).to.have.callCount(1);
        expect(response.json).to.be.calledWith(json);
      });
    });

    it('Function resolves JSON', () => {
      request.body = { func: 'func' };

      const json = new JSONResponse();

      const func = fake.resolves(json);
      const registrationData = spy();
      const params = spy();

      sdk.setFunctions({ func });
      sdk.setDataModule({ registrationData, params: { func: params } });

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(json);
        expect(registrationData).to.have.callCount(1).to.be.calledWith({});
        expect(params).to.have.callCount(1).to.be.calledWith({ funcData: {}, httpData: {} });
        expect(func).to.have.callCount(1);
        expect(response.json).to.be.calledWith(json);
      });
    });
  });
});
