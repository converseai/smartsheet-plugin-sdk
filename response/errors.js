const _ = require('lodash');

/**
 * @param {Object} param
 * @param {String} param.func the name of the function that has a bad response.
 */
const BAD_RESPONSE = ({ func } = {}) => {
  const error = { status: 500, code: 'BAD_RESPONSE', message: 'Function has not returned an object of type Response.' };
  if (!_.isNil(func)) {
    error.message = `Function ${func} has not returned an object of type Response.`;
  }
  return error;
};

const INTERNAL_ERROR = (e) => {
  if (e instanceof Error) {
    return { status: 500, code: e.code, message: e.message };
  } else if (_.isString(e)) {
    return { status: 500, code: 'INTERNAL_ERROR', message: e };
  }
  return { status: 500, code: 'INTERNAL_ERROR', message: 'An unknown error has occurred.' };
};

const FUNC_NOT_FOUND = ({ func } = {}) => {
  const error = { status: 404, code: 'NOT_FOUND', message: 'Function cannot be found.' };
  if (!_.isNil(func)) {
    error.message = `Function ${func} cannot be found.`;
  }
  return error;
};

const FUNC_NOT_A_FUNCTION = ({ func } = {}) => {
  const error = { status: 500, code: 'NOT_A_FUNCTION', message: 'Property `func` is not a function. Check property definition.' };
  if (!_.isNil(func)) {
    error.message = `Property \`${func}\` is not a function. Check \`${func}\` definition.`;
  }
  return error;
};

module.exports = {
  DEFAULT: { status: 500, code: 'ERROR', message: 'An error has occurred.' },
  INTERNAL_ERROR,
  BAD_RESPONSE,
  FUNC_NOT_FOUND,
  FUNC_NOT_A_FUNCTION,
};
