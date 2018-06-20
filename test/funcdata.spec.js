/* eslint-env node, mocha */
const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const FuncData = require('../classes/funcdata');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('FuncData', () => {
  const fakePayload = {
    funcData: { a: 'funcData.a' },
    httpData: {
      method: '',
      formData: {
        a: 'formData.a',
        b: 'formData.b',
      },
      body: {
        a: 'body.a',
        b: 'body.b',
        c: 'body.c',
      },
      queryParams: {
        a: 'queryParams.a',
        b: 'queryParams.b',
        c: 'queryParams.c',
        d: 'queryParams.d',
      },
    },
  };

  it('Data should come from funcData or forData or body or queryParams', () => {
    const subject = new FuncData(fakePayload);
    expect(subject).is.instanceof(FuncData);
    expect(subject).to.have.property('get').to.be.a('function');
    expect(subject.get('d')).to.eq('queryParams.d');
    expect(subject.get('c')).to.eq('body.c');
    expect(subject.get('b')).to.eq('formData.b');
    expect(subject.get('a')).to.eq('funcData.a');
  });
});
