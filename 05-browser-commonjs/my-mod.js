(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('my-mod', ['exports', 'my-other-mod'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('my-other-mod'));
  } else {
    // Browser globals
    factory((root.commonJsStrict = {}), root.myOtherMod);
  }
}(typeof self !== 'undefined' ? self : this, function (exports, myOtherMod) {
  var a = 1; // Private var

  // Public API
  // attach properties to the exports object to define
  // the exported module properties
  exports.foo = function foo() {
    return myOtherMod(a);
  };

  exports.bar = function bar() { };
}));
