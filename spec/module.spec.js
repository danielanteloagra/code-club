const expect = require('chai').expect;
const myFunction = require('../src').Module;

describe('myFunction', () => {

  it('works, hopefully...', () => {
    expect(myFunction()).to.equal('hello world');
  });
});
