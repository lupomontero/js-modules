(function () {
  var a = 1; // Private var

  function b() { }

  var count = 0;

  // Public API exposed in `window` object.
  window.myMod = {
    foo: function foo() { },
    // bar: function bar() { },
  };
})();
