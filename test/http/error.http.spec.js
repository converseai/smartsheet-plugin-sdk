/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { spy, fake } = require('sinon');
const { mockReq, mockRes } = require('sinon-express-mock');
const SDK = require('../../interface/http');
const ErrorResponse = require('../../response/error');
const { FUNC_NOT_FOUND, INTERNAL_ERROR } = require('../../response/errors');
const { fakeFactory, FUNC_NAME } = require('./fakes');

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

  describe('ErrorResponse', () => {
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
});
