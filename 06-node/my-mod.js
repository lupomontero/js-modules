var myOtherMod = require('./my-other-mod');


var a = 32;

exports.foo = function foo() {
  return myOtherMod(a);
};

exports.bar = function bar() { };