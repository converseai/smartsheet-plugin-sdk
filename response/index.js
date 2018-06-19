const Response = require('./response');
const HTTPResponse = require('./http');
const ErrorResponse = require('./error');
const JSONResponse = require('./json');
const TEXTResponse = require('./text');
const XMLResponse = require('./xml');
const OAuth2Start = require('./oauthstart');
const OAuth2Token = require('./oauthtoken');

module.exports.Response = Response;
module.exports.HTTPResponse = HTTPResponse;
module.exports.ErrorResponse = ErrorResponse;
module.exports.JSONResponse = JSONResponse;
module.exports.TEXTResponse = TEXTResponse;
module.exports.XMLResponse = XMLResponse;
module.exports.OAuth2Start = OAuth2Start;
module.exports.OAuth2Token = OAuth2Token;
