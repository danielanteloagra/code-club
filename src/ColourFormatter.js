function ColourFormatter() {
  this.format = function(str) {
    if (str.indexOf('+') > -1 && str.indexOf('-') === -1) {
      return '\033[33m' + str + '\033[0m'
    }

    return '\033[31m' + str + '\033[0m'
  }
}

exports.ColourFormatter = ColourFormatter;
