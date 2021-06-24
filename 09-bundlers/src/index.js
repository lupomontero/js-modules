import _ from 'lodash';
// const _ = require('lodash');
import { rainbowify, greyify } from './colors';

console.log('OMG', _);

// var rainbow = 1;

window.addEventListener('load', () => {
  rainbowify(document.querySelector('h1'));
  greyify(document.querySelector('h2'));
});
