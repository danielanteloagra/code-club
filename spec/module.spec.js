const expect = require('chai').expect;
const Module = require('../src').Module;

describe('Module', () => {
  const instance = new Module();

  it('works, hopefully...', () => {
    expect(instance.sayHello()).to.equal('hello world');
  });
});
