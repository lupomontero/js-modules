(function ($) {
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

  function applyColors($el, colors) {
    var text = $el.text();
    var str = '';

    for (var i = 0; i < text.length; i += 1) {
      str += '<span style="color: ' + colors[i % colors.length] + '">';
      str += text[i];
      str += '<span>';
    }

    $el.html(str);
  }

  // Public API exposed via `fn` object.
  $.fn.rainbowify = function () {
    applyColors($(this), rainbow);
  };

  $.fn.greyify = function () {
    applyColors($(this), greyscale);
  };
}(jQuery));
