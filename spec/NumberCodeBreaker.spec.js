const expect = require('chai').expect;
const NumberCodeBreaker = require('../src/NumberCodeBreaker').NumberCodeBreaker;

describe('NumberCodeBreaker', () => {
    let codeBreaker;

    beforeEach(() => {
      codeBreaker = new NumberCodeBreaker();
      codeBreaker.setSecret('1234');
    });

    it('is an object', () => {
      expect(codeBreaker).to.be.object;
    });

    it('sets a secret', () => {
      expect(codeBreaker.secret).to.equal('1234');
    });

    it('returns an empty string for no matches', () => {
      const result = codeBreaker.takeGuess('9999');
      expect(result).to.equal('');
    });

    it('returns - when one number in the guess exists in the secret but in different position', () => {
      const result = codeBreaker.takeGuess('9881');
      expect(result).to.equal('-');
    });

    it('returns + when one number in the guess exists in the secret in same position', () => {
      const result = codeBreaker.takeGuess('1988');
      expect(result).to.equal('+');
    });

    it('returns ---- for full matches in wrong order', () => {
      const result = codeBreaker.takeGuess('4321');
      expect(result).to.equal('----');
    });

    it('returns ++++ for full exact matches in right order', () => {
      const result = codeBreaker.takeGuess('1234');
      expect(result).to.equal('++++');
    });

    it('returns + when one number is guessed in right position but exists twice in secret', () => {
      codeBreaker.setSecret('1234');
      const result = codeBreaker.takeGuess('1155');
      expect(result).to.equal('+');
    });

    it('ignores duplicate numbers in guess that have already been matched in exact position', () => {
      result = codeBreaker.takeGuess('1153');
      expect(result).to.equal('+-');
    });
});
