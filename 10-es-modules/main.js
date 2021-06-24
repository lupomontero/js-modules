import { rainbowify, greyify } from './colors.js';

window.onload = function () {
  rainbowify(document.getElementsByTagName('h1')[0]);
  greyify(document.getElementsByTagName('h2')[0]);
};
