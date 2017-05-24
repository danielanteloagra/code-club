const expect = require('chai').expect;
const ColourFormatter = require('../src/ColourFormatter').ColourFormatter;

describe('ColourFormatter', () => {
    let formatter;

    beforeEach(() => {
      formatter = new ColourFormatter();
    });

    it('is an object', () => {
      expect(formatter).to.be.object;
    });

    it('formats - in red', () => {
      expect(formatter.format('-')).to.equal('\033[31m-\033[0m');
    });

    it('formats plusses in yellow', () => {
      expect(formatter.format('+')).to.equal('\033[33m+\033[0m');
      expect(formatter.format('++')).to.equal('\033[33m++\033[0m');
      expect(formatter.format('+++')).to.equal('\033[33m+++\033[0m');
    });

    it('formats mix of + and - in red', () => {
      expect(formatter.format('+-')).to.equal('\033[31m+-\033[0m');
      expect(formatter.format('++--')).to.equal('\033[31m++--\033[0m');
    });
});
