const expect = require('chai').expect;
const Module = require('../src');

describe('Module', () => {
  const instance = new Module.Module();

  it('works, hopefully...', () => {
    expect(instance.sayHello()).to.equal('hello world');
  });
});
