(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'applyColors'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('applyColors'));
  } else {
    // Browser globals
    factory((root.commonJsStrict = {}), root.applyColors);
  }
}(typeof self !== 'undefined' ? self : this, function (exports, applyColors) {
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
  // Attach properties to the exports object to define the exported module
  // properties

  exports.rainbowify = function (el) {
    applyColors(el, rainbow);
  };

  exports.greyify = function (el) {
    applyColors(el, greyscale);
  };
}));

// const rainbow = [
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'blue',
//   'indigo',
//   'violet',
// ];

// const rainbowify = el => [...el.textContent].reduce(
//   (memo, char, idx) => (
//     `${memo}<span style="color: ${rainbow[idx % rainbow.length]}">${char}<span>`
//   ),
//   '',
// );
