# CodeBreaker

In the code breaker you have a 4 digits secret, and you have to guess what that secret is by providing a 4 digits guess.

The feedback you get depends on how your guess matches the secret. The rules for giving feedback about the matching are:

- Returns an empty string for no matches
- Returns a “-” when one number in the guess exists in the secret (Ex: secret 1234 guess 5168)
- Returns a “+” when one number in the guess exists in the secret in the same exact position  (Ex: secret 1234 guess 6538)
- Returns a “--” for a 2 number match in the wrong place (Ex: secret 1234 guess 5621)
- Returns a “+-” for one number match in the wrong place, and one exact match (Ex: secret 1234 guess 1526)
- Returns a "++--" for two number matches in the wrong place, and two exact matches (Ex: secret 1234 guess 1432)
- Returns a "+" when one number in the guess exists in the secret in both an exact position and in a wrong place (Ex: secret 1124 guess of 5167)

## Setup

Install dependencies:

```bash
yarn
```

## Instructions

1. Launch the tests:

```bash
yarn test
```

This will keep watching and re-running as you change code.

2. Write your next spec in spec/CodeBreaker.spec.js and see it fail

3. Get it to pass with minimal code

4. Refactor!

5. Repeat 2-4.

Have fun!
