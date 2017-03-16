import { expect } from 'chai';
import CodeBreaker from './CodeBreaker';

describe('CodeBreaker', () => {
  const breaker = new CodeBreaker();

  it('works, hopefully...', () => {
    expect(breaker.takeGuess()).to.equal(undefined);
  });
});
