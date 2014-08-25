'use strict';

var fs = require('fs');

var labels = require('./index.js').labels;
var readme = fs.readFileSync(__dirname + '/README.md', 'utf8');
readme = readme.replace(/\#\#\ Supported\ Encodings[^\#]+/gm, '## Supported Encodings\n\n' +
                        labels.map(function (encoding) {
                          return ' - ' + encoding;
                        }).join('\n') +
                        '\n\n');
fs.writeFileSync(__dirname + '/README.md', readme);

var keywords = [
  "codec",
  "decoder",
  "decoding",
  "encoder",
  "encoding",
  "legacy",
  "legacy-encoding"
].concat(labels).concat(['browserify']);
var pkg = JSON.parse(fs.readFileSync(__dirname + '/package.json', 'utf8'));
pkg.keywords = keywords;
fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, '  ') + '\n');
