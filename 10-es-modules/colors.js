import applyColors from './applyColors.js';

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
export const rainbowify = el => applyColors(el, rainbow);
export const greyify = el => applyColors(el, greyscale);

