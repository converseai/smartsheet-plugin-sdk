/* eslint-env node, mocha */
/* eslint global-require: off */
const fs = require('fs');
const { expect } = require('chai');
const { stub } = require('sinon');
const decache = require('decache');


const ENV_KEY = 'TEST_KEY';
const ENV_VAL = 'TEST_VAL';

describe('.ENV', () => {
  before(() => {
    decache('../../');
  });

  after(() => {
    decache('../../');
  });

  it('Data should come from get method', () => {
    const oldReadFileSync = fs.readFileSync;
    stub(fs, 'readFileSync').callsFake((path, ...args) => {
      if (path.endsWith('/usercode/.env')) {
        return `${ENV_KEY}=${ENV_VAL}`;
      }
      return oldReadFileSync(path, ...args);
    });
    require('../../');
    expect(process.env[ENV_KEY]).to.eq(ENV_VAL);
  });
});
