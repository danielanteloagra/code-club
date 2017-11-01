function myFunction() {
  return 'hello world';
}

// export as module for the node environment (needed for tests to import the js)
if (typeof exports !== 'undefined') {
  exports.Module = myFunction
}
