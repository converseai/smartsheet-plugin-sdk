const _ = require('lodash');
const grpc = require('grpc');
const path = require('path');

module.exports = (host) => {
  if (_.isNil(host)) {
    throw new Error('GRPC Host not defined!');
  }

  const proto = grpc.load({
    root: path.dirname(__filename),
    file: 'github.com/planningto/groot/service/plugindata/plugindata.proto',
  });

  const deadline = new Date().setTime(new Date().getTime() + (3600 * 10)).toString();
  return new proto.plugindata.PluginData(
    host,
    grpc.credentials.createInsecure(),
    // grpc.credentials.createSsl(),
    { deadline },
  );
};

