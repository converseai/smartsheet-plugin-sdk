/* eslint class-methods-use-this:off, no-console:off */
console.log('loaded');
const _ = require('lodash');
const debug = require('debug');
const RegData = require('../classes/regdata');
const OnRegData = require('../classes/onregdata');
const FuncData = require('../classes/funcdata');
const MetaData = require('./meta');
const { Response, ErrorResponse, JSONResponse } = require('../response');
const { INTERNAL_ERROR, FUNC_NOT_FOUND } = require('../response/errors');
const PluginData = require('smartsheet-plugindata-sdk/plugindata');

const ON_REGISTER = 'onPluginRegister';
const ON_UNREGISTER = 'onPluginUnregister';

const log = debug('smartsheet-plugin-sdk');
const err = debug('smartsheet-plugin-sdk:err');

function getRegistrationScope(factory, property) {
  return (!_.isNil(factory)
  && !_.isNil(factory.registrationData)
  && _.isFunction(factory.registrationData[property])
    ? factory.registrationData[property]
    : regPayload => new RegData(regPayload[property]));
}

function buildRegistrationData(factory, regPayload) {
  const registrationData = {};
  let iterable = [];

  if (!_.isNil(factory) && !_.isNil(factory.registrationData)) {
    iterable = _.union(iterable, _.keys(factory.registrationData));
  }
  if (!_.isNil(regPayload)) {
    iterable = _.union(iterable, _.keys(regPayload));
  }

  _.each(iterable, (property) => {
    const build = getRegistrationScope(factory, property);
    const value = build(regPayload[property]);
    Object.defineProperty(registrationData, property, { get: () => value });
  });

  return registrationData;
}

function buildFunctionData(factory, property, funcPayload) {
  if (!_.isNil(factory)
  && !_.isNil(factory.functions)
  && _.isFunction(factory.functions[property])) {
    return factory.functions[property](funcPayload);
  }
  return new FuncData(funcPayload);
}

const SDKCore = class SDKCore {
  constructor({ request, response, silence = true }) {
    this.silence = silence;
    this.request = request;
    this.response = response;
    this.functions = {};
    this.factory = {};
    if (!_.isNil(process.env.PLUGINDATA_SERVICE)) {
      this.grpc = new PluginData(process.env.PLUGINDATA_SERVICE);
    }
  }

  error() {
    throw new Error('Cannot use SDKCore directly.');
  }

  respond() {
    throw new Error('Cannot use SDKCore directly.');
  }

  setFunctions(functions) {
    this.functions = functions;
  }

  setParamFactory(params) {
    this.factory = params;
  }

  handleRequest() {
    return new Promise((resolve) => {
      if (!this.request || !this.request.body) {
        throw new ErrorResponse();
      }

      if (!this.request.body.func || !this.functions[this.request.body.func]) {
        throw new ErrorResponse(FUNC_NOT_FOUND({ func: this.request.body.func }));
      }

      const { func, caller = {}, registrationData = {}, funcData = {}, httpData = {} }
        = this.request.body;

      const callable = this.functions[func];

      const meta = new MetaData({
        caller,
        registrationData: buildRegistrationData(this.factory, registrationData),
        grpc: this.grpc,
      });

      let params;
      if (func === ON_REGISTER || func === ON_UNREGISTER) {
        params = new OnRegData(funcData);
      } else {
        params = buildFunctionData(this.factory, func, { funcData, httpData });
      }

      return resolve(callable(meta, params));
    }).then((res) => {
      log('function response');
      let value = res;
      if (!(value instanceof Response)) {
        value = new JSONResponse({ value });
      }
      log(value);
      this.respond(value);
      return value;
    }).catch((e) => {
      let response;
      let error;
      if (e instanceof ErrorResponse) {
        response = e;
        error = new Error(`${e.error.code}: ${e.error.message}`);
      } else {
        error = e;
        response = new ErrorResponse(INTERNAL_ERROR(e));
      }

      err(error);
      console.error(error.stack);
      this.respond(response);

      if (!this.silence) {
        throw error;
      }
    });
  }
};

module.exports = SDKCore;
