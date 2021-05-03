(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('my-mod', ['my-other-mod'], factory);
  } else {
    // Browser globals
    root.myMod = factory(root.myOtherMod);
  }
}(typeof self !== 'undefined' ? self : this, function (myOtherMod) {
  var a = 1; // Private var

  // Public API
  return {
    foo: function foo() {
      return myOtherMod(a);
    },
    bar: function bar() { }
  };
}));
