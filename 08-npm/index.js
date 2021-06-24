#! /usr/bin/env node

var minimist = require('minimist');

function main(parsed) {
  console.log(parsed);
}

main(minimist(process.argv.slice(2)));
