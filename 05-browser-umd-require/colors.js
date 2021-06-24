(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['applyColors'], factory);
  } else {
    // Browser globals
    root.colors = factory(root.applyColors);
  }
}(typeof self !== 'undefined' ? self : this, function (applyColors) {
  // Private vars
  var rainbow = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  var greyscale = [
    '#000',
    '#333',
    '#666',
    '#999',
    '#CCC',
  ];

  // Public API
  return {
    rainbowify: function (el) {
      applyColors(el, rainbow);
    },
    greyify: function (el) {
      applyColors(el, greyscale);
    },
  };
}));
