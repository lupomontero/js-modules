import _ from 'lodash';
// const _ = require('lodash');
import { rainbowify, greyify } from './colors';

console.log('OMG', _);

// var rainbow = 1;

window.onload = function () {
  rainbowify(document.getElementsByTagName('h1')[0]);
  greyify(document.getElementsByTagName('h2')[0]);
};
