function Module()
{
    // your src here
}

// export as module for the node environment (needed for tests to pick your js up)
if (typeof exports !== 'undefined') {
    exports.Module = Module
}