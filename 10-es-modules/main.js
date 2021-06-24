import { rainbowify, greyify } from './colors.js';

window.addEventListener('load', () => {
  rainbowify(document.querySelector('h1'));
  greyify(document.querySelector('h2'));
});
