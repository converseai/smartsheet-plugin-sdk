/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const { fake, spy } = require('sinon');
const { mockReq, mockRes } = require('sinon-express-mock');
const SDK = require('../../interface/http');
const OnRegData = require('../../classes/onregdata');
const { JSONResponse } = require('../../response');
const { fakeFactory, fakePayload } = require('./fakes');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiAsPromised);

const FUNC_NAME = 'onPluginRegister';

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

  describe('OnRegData', () => {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * OnRegData
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    it('Function returns OnRegData', () => {
      const payload = fakePayload({
        func: FUNC_NAME,
        funcData: {
          scope: 'ORGANIZATION',
          registrationData: {
            a: 'a',
            b: 'b',
          },
        },
      });

      request.body = payload;

      const onreg = new OnRegData(payload.funcData);

      const func = fake((meta, params) => params);
      const factory = fakeFactory({ functions: { [FUNC_NAME]: spy() } });

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eql(onreg);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(func)
          .to.be.callCount(1);
      });
    });

    it('Function resolves OnRegData', () => {
      const payload = fakePayload({
        func: FUNC_NAME,
        funcData: {
          scope: 'ORGANIZATION',
          registrationData: {
            a: 'a',
            b: 'b',
          },
        },
      });

      request.body = payload;

      const onreg = new OnRegData(payload.funcData);

      const func = fake((meta, params) => Promise.resolve(params));
      const factory = fakeFactory({ functions: { [FUNC_NAME]: spy() } });

      sdk.setFunctions({ [FUNC_NAME]: func });
      sdk.setParamFactory(factory);

      return expect(sdk.handleRequest()).to.be.fulfilled.then((res) => {
        expect(res)
          .to.be.an.instanceOf(JSONResponse);
        expect(res)
          .to.have.property('value')
          .to.eql(onreg);

        expect(factory.registrationData.organization)
          .to.be.callCount(1)
          .to.be.calledWith(payload.registrationData.organization);
        expect(func)
          .to.be.callCount(1);
      });
    });
  });
});
