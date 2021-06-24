const applyColors = require('./applyColors');

// Private vars
const rainbow = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

const greyscale = [
  '#000',
  '#333',
  '#666',
  '#999',
  '#CCC',
];

// Public API
exports.rainbowify = el => applyColors(el, rainbow);
exports.greyify = el => applyColors(el, greyscale);
