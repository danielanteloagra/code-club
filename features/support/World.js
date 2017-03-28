const NumberCodeBreaker = require('../../src/NumberCodeBreaker').NumberCodeBreaker;
const ColourFormatter = require('../../src/ColourFormatter').ColourFormatter;

function CustomWorld() {
    this.codebreaker = new NumberCodeBreaker();
    this.formatter = new ColourFormatter();
}

module.exports = function() {
    this.World = CustomWorld;
};
