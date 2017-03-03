const chai = require('chai');
const jsdom = require('jsdom');

// jsdom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

// uncomment this line for jquery support
//$ = global.$ = global.jQuery = require('jquery');
