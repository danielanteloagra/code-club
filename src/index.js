function Module() {
  this.name = 'world';
}

Module.prototype.sayHello = function() {
  return 'hello ' + this.name;
};

// export as module for the node environment (needed for tests to import the js)
if (typeof exports !== 'undefined') {
  exports.Module = Module
}
