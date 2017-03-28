Code Breaker
============

In the code breaker you have a 4 digits secret, and you have to guess
what that secret is by providing a 4 digits guess.

The feedback you get depends on how your guess matches the secret.

The rules for giving feedback about the matching are:

- Returns an empty string for no matches
- Returns a "-" when one number in the guess exists in the secret (Ex: secret 1234 guess 5168)
- Returns a "+" when one number in the guess exists in the secret in the same exact position  (Ex: secret 1234 guess 6538)
- Returns a "--" for a 2 number match in the wrong place (Ex: secret 1234 guess 5621)
- Returns a "+-" for one number match in the wrong place, and one exact match (Ex: secret 1234 guess 1526)
- Returns a "++--" for two number matches in the wrong place, and two exact matches (Ex: secret 1234 guess 1432)
- Returns a "+" when one number in the guess exists in the secret in both an exact position and in a wrong place (Ex: secret 1124 guess of 5167)
- Returns a "+" for a secret of 1234 and a guess of 1155
- Returns a "+" for a secret of 4321 and a guess of 5511
- Returns a "+-" for a secret of 1231 and a guess of 5511
- Returns a "+-" for a secret of 1231 and a guess of 1155


Setup
-----

Make sure you have the following dependencies installed:

- [Node >=5.5](https://nodejs.org/en/)
- [Yarn >= 0.19](https://yarnpkg.com/en/docs/install)

With those dependencies installed and within the root folder, run:

```bash
yarn
```

You are now ready to start.


Get started
-----------

The idea is to complete the code breaker algorithm plus a little color formatter but, in order to do that, some scenarios
have been provided along with their step implementations so your task will be to fix the scenarios by speccing any code
that you write.

Remember that, in order to spec your code, you first need to describe it by by creating a file like `spec/MyObject.spec.js`
replacing `MyObject` with the name of the class you want to create.

Once the file has been created, you can paste the following template:

```javascript
const expect = require('chai').expect;
const MyObject = require('../src/MyObject').MyObject;

describe('MyObject Module', () => {
    let myobject;
    
    beforeEach(() => {
      myobject = new MyObject();
    });
    
    it('is an object', () => {
        expect(myobject).to.be.object;
    });
});
```

Remember to replace all occurrences of `MyObject`.


Running the examples
-----------------

Execute the following commands in order to ensure your code works:

```bash
# Specs
yarn specs

# Scenarios
yarn features
```

Having fun
----------

A game runner has been provided in this repository so, at any point, you can check your progress by playing the actual
game. In order to do so, you can execute this command:

```bash
bin/codebreaker
```


More information
----------------

We use [Mocha JS](https://mochajs.org/) as speccing framework. If you want to
learn more about it, you can check [get started with mocha](http://ricostacruz.com/til/get-started-with-mocha).

Also we use [Cucumber JS](https://github.com/cucumber/cucumber-js) as cucumber framework, If you want to
learn more about it, you can check [the documentation](https://github.com/cucumber/cucumber-js/tree/1.x#documentation) (be
aware that the version we use here is 1.X while, by default, github shows you the 2.X branch being the documentation
incompatible with the version used here).
