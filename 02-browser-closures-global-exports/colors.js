(function () {
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

  function applyColors(el, colors) {
    var str = '';

    for (var i = 0; i < el.textContent.length; i += 1) {
      str += '<span style="color: ' + colors[i % colors.length] + '">';
      str += el.textContent[i];
      str += '<span>';
    }

    el.innerHTML = str;
  }

  // Public API exposed in `window` object.
  window.colors = {
    rainbowify: function (el) {
      applyColors(el, rainbow);
    },
    greyify: function (el) {
      applyColors(el, greyscale);
    },
  };
})();
