module.exports = function () {
    var guessResult;
    var colors = {
        'red': '\033[31m',
        'green': '\033[32m',
        'yellow': '\033[33m',
        'off': '\033[0m'
    };

    this.Given(/^the secret is set to "([^"]*)"$/, function (secret, done) {
        this.codebreaker.setSecret(secret);

        done();
    });

    this.When(/^I take the guess "([^"]*)"$/, function (guess, done) {
        guessResult = this.codebreaker.takeGuess(guess);

        done();
    });

    this.Then(/^I should get the output "([^"]*)"$/, function (expectedResult, done) {
        if (expectedResult !== guessResult) {
            done('Expected ' + expectedResult + ' but got: ' + guessResult);
        }

        done();
    });

    this.Then(/^I should get the output "([^"]*)" in (.*)$/, function (expectedResult, color, done) {
        output = this.formatter.format(guessResult);
        expectedOutputs = possibleOutputsForColor(color, expectedResult);

        if (expectedOutputs.indexOf(output) === -1) {
            done(colors.red + 'Expected ' + colors.off + expectedOutputs.join(' or ') + colors.red + ' but got: ' + colors.off + output + colors.off);
        }

        done();
    });

    function possibleOutputsForColor(color, expectedResult)
    {
        expectedOutputs = [];
        expectedOutputs.push(colors[color] + expectedResult + colors.off);

        if(expectedResult.length > 1) {
            composedOutput = [];
            for (var i = 0; i < expectedResult.length; i++) {
                composedOutput.push(colors[color] + expectedResult[i] + colors.off);
            }

            expectedOutputs.push(composedOutput.join(''));
        }

        return expectedOutputs;
    }
};
