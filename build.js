'use strict';

var fs = require('fs');

var encodings = fs.readFileSync(__dirname + '/encodings.txt', 'utf8').split('\n').filter(Boolean);

fs.writeFileSync(__dirname + '/encodings.js', '\'use strict\';\n\nmodule.exports = [\n' + encodings.map(function (encoding) {
  return '  require(\'' + encoding + '\')';
}).join(',\n') + '\n];\n');

try {
  require('./encodings.js');
} catch (ex) {
  console.log();
  console.log('Try running the following before retrying: npm install ' + encodings.join(' ') + ' --save');
  console.log();
  throw ex;
}

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
