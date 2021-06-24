//
// Con bundlers como WebPack podemos seguir usando módulos AMD!!
//

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.applyColors = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return function applyColors(el, colors) {
    var str = '';

    for (var i = 0; i < el.textContent.length; i += 1) {
      str += '<span style="color: ' + colors[i % colors.length] + '">';
      str += el.textContent[i];
      str += '<span>';
    }

    el.innerHTML = str;
  };
}));
