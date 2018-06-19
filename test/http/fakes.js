const _ = require('lodash');
const { spy } = require('sinon');

const FUNC_NAME = 'testFunction';
module.exports.FUNC_NAME = FUNC_NAME;

module.exports.fakeFactory = ext => _.merge({
  registrationData: { organization: spy() },
  functions: { [FUNC_NAME]: spy() },
}, ext);

module.exports.fakePayload = ext => _.merge({
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
