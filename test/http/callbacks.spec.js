/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { spy, fake } = require('sinon');
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

  describe('Callbacks', () => {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * JSONResponse
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Callback is fired', () => {
      const payload = fakePayload();

      request.body = payload;

      const json = new JSONResponse();
      const callback = spy();
      json.setCallback(callback);

      const func = fake.returns(json);
      const factory = fakeFactory();

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res).to.eq(json);

        expect(func)
          .to.be.callCount(1);

        expect(callback)
          .to.be.callCount(1);

        expect(response.json)
          .to.be.calledWith(json);
      });
    });
  });
});
