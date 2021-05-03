(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.myOtherMod = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  var a = 1; // Private var

  // Public API
  return function myOtherMod(x) {
    return x + 1;
  };
}));
