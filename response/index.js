const response = require('./response');
const http = require('./http');
const error = require('./error');
const json = require('./json');
const text = require('./text');
const xml = require('./xml');

module.exports.Response = response;
module.exports.HTTPResponse = http;
module.exports.ErrorResponse = error;
module.exports.JSONResponse = json;
module.exports.TEXTResponse = text;
module.exports.XMLResponse = xml;
