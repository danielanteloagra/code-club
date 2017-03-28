import { expect } from 'chai';
import CodeBreaker from '../src/CodeBreaker';

describe('CodeBreaker', () => {
  let breaker;

  beforeEach(() => {
    breaker = new CodeBreaker();
  });

  it('is an object', () => {
    expect(breaker).to.be.object;
  });

  describe('set secret', () => {
    it('is a function', () => {
      expect(breaker.setSecret).to.be.function;
    });
  });

  describe('take guess', () => {
    it('is a function', () => {
      expect(breaker.takeGuess).to.be.function;
    });
  });
});
