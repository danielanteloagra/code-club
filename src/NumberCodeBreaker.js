function NumberCodeBreaker() {
  this.setSecret = function(secret) {
    this.secret = secret;
  }

  this.takeGuess = function(guess) {
    const hints = [];
    const guessed = [];
    guess.split('').forEach((char, posOfCharInGuess) => {
      const posOfCharInSecret = this.secret.indexOf(char);
      const hint = getHint(posOfCharInSecret, posOfCharInGuess);
      if (hint && !guessed.includes(char)) {
        hints.push(hint);
        guessed.push(char);
      }
    });

    return createResult(hints);
  }

  createResult = function(hints = []) {
    return hints.sort().join('');
  }

  getHint = function(posOfCharInSecret, posOfCharInGuess) {
    if (posOfCharInSecret === -1) {
      return;
    }

    return (posOfCharInSecret === posOfCharInGuess) ? '+' : '-';
  }
}

exports.NumberCodeBreaker = NumberCodeBreaker;
