/* eslint class-methods-use-this:off */
const _ = require('lodash');
const debug = require('debug');
const RegData = require('../classes/regdata');
const FuncData = require('../classes/funcdata');
const MetaData = require('./meta');
const Response = require('../response');
const ErrorResponse = require('../response/error');
const JSONResponse = require('../response/json');
const { INTERNAL_ERROR, FUNC_NOT_FOUND } = require('../response/errors');

const log = debug('smartsheet-plugin-sdk');
const err = debug('smartsheet-plugin-sdk:err');

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
    const prop = _.camelCase(property);
    const value = (!_.isNil(factory)
    && !_.isNil(factory.registrationData)
    && _.isFunction(factory.registrationData[prop])
      ? factory.registrationData[prop](regPayload[property])
      : new RegData(regPayload[property]));

    Object.defineProperty(registrationData, prop, { get: () => value });
  });

  return registrationData;
}

function buildFunctionData(factory, property, funcPayload) {
  const prop = _.camelCase(property);
  if (!_.isNil(factory)
  && !_.isNil(factory.functions)
  && _.isFunction(factory.functions[prop])) {
    return factory.functions[prop](funcPayload);
  }
  return new FuncData(funcPayload);
}

const SDKCore = class SDKCore {
  constructor({ request, response }) {
    this.request = request;
    this.response = response;
    this.functions = {};
    this.factory = {};
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

      const func = _.camelCase(this.request.body.func);
      const { caller = {}, registrationData = {}, funcData = {}, httpData = {} }
        = this.request.body;

      if (!this.request.body.func || !this.functions[func]) {
        throw new ErrorResponse(FUNC_NOT_FOUND({ func: this.request.body.func }));
      }

      const callable = this.functions[func];

      const meta = new MetaData({
        caller,
        registrationData: buildRegistrationData(this.factory, registrationData),
      });

      const params = buildFunctionData(this.factory, func, { funcData, httpData });

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
      err(e);
      if (e instanceof ErrorResponse) {
        this.respond(e);
      } else {
        this.error(INTERNAL_ERROR(e));
      }
      throw e;
    });
  }
};

module.exports = SDKCore;
